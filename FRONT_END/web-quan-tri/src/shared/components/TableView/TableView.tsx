import React, { useEffect, useState } from 'react';
import { Spin, Input, Table, Select, Pagination, Row, Col, Button, Space } from 'antd';
import type { ColumnsType, TablePaginationConfig, TableProps } from 'antd/es/table';
import type { SorterResult } from 'antd/es/table/interface';
import type { Key } from 'react';
import { Icon } from '../Icon';

/* ======================
 * Types
 * ====================== */

type SortOrderMap = {
    [key: string]: 1 | -1;
};

type SortTypeMap = {
    [key: string]: 'ascend' | 'descend';
};

const SortType: SortTypeMap = {
    '1': 'ascend',
    '-1': 'descend',
};

interface TableViewChangeParams {
    search?: string;
    page: number;
    page_size: number;
    sort: SortOrderMap;
}

export interface TableViewProps<T extends object>
    extends Omit<TableProps<T>, 'columns' | 'onChange' | 'pagination'> {
    loading?: boolean;
    className?: string;
    hasSearch?: boolean;
    AdvanceFilter?: React.ReactNode;
    defaultAdvSearchOpen?: boolean;
    ActionBar?: React.ReactNode;
    page?: number;
    page_size?: number;
    total?: number;
    search?: string;
    sort?: SortOrderMap;
    columns: ColumnsType<T>;
    handleChange?: (params: TableViewChangeParams) => void;
    expandable?: TableProps<T>['expandable'];
    pagination?: boolean;
    searchSpan?: number;
}

/* ======================
 * Utils
 * ====================== */

function updateColumnsSort<T extends object>(
    columns: ColumnsType<T>,
    sortOption: SortOrderMap = {}
): ColumnsType<T> {
    return columns.map((col: any) => {
        const newCol = { ...col };

        if (newCol.children) {
            newCol.children = updateColumnsSort(newCol.children, sortOption);
        }

        if (newCol.key) {
            newCol.sortOrder = SortType[String(sortOption[newCol.key])];
        }

        return newCol;
    });
}

/* ======================
 * Component
 * ====================== */

export function TableView<T extends object>({
    loading,
    className,
    hasSearch,
    AdvanceFilter,
    defaultAdvSearchOpen = false,
    ActionBar,
    page = 1,
    page_size = 20,
    total = 0,
    search = '',
    sort = {},
    columns,
    handleChange,
    expandable,
    pagination = true,
    searchSpan,
    ...rest
}: TableViewProps<T>) {
    const [isAdvSearchOpen, setIsAdvSearchOpen] = useState(defaultAdvSearchOpen);
    const [keySearch, setKeySearch] = useState(search);
    const [pageSize, setPageSize] = useState(page_size);
    const [totalRecord, setTotalRecord] = useState(total);
    const [currentPage, setCurrentPage] = useState(page);
    const [sortOption, setSortOption] = useState<SortOrderMap>(sort);
    const [cols, setCols] = useState<ColumnsType<T>>([]);

    /* Sync columns sort */
    useEffect(() => {
        setCols(updateColumnsSort(columns, sortOption));
    }, [columns, sortOption]);

    /* Sync external props */
    useEffect(() => {
        if (totalRecord !== total) setTotalRecord(total);
        if (currentPage !== page) setCurrentPage(page);
        if (pageSize !== page_size) setPageSize(page_size);
        if (keySearch !== search) setKeySearch(search);
    }, [page, page_size, total, search]);

    /* Emit change */
    useEffect(() => {
        handleChange?.({
            search: keySearch,
            page_size: pageSize,
            page: currentPage,
            sort: sortOption,
        });
    }, [keySearch, pageSize, currentPage, sortOption]);

    /* Handlers */
    const onChangePage = (p: number) => {
        setCurrentPage(p);
    };

    const onChangePageSize = (size: number) => {
        if (pageSize !== size) {
            setCurrentPage(1);
            setPageSize(size);
        }
    };

    const handleTableChange = (
        pagination: TablePaginationConfig,
        _: Record<string, (Key | boolean)[] | null>,
        sorter: SorterResult<T> | SorterResult<T>[]
    ) => {
        if (pagination.current && pagination.current !== currentPage) {
            setCurrentPage(pagination.current);
        }

        const sortOtp: SortOrderMap = {};

        if (Array.isArray(sorter)) {
            sorter.forEach((item) => {
                if (item.columnKey && item.order) {
                    sortOtp[item.columnKey as string] =
                        item.order === 'ascend' ? 1 : -1;
                }
            });
        } else if (sorter?.columnKey && sorter.order) {
            sortOtp[sorter.columnKey as string] =
                sorter.order === 'ascend' ? 1 : -1;
        }

        setSortOption(sortOtp);
    };

    const onSearch = (value: string) => {
        setKeySearch(value);
        setCurrentPage(1);
    };

    return (
        <Spin spinning={loading}>
            <Row gutter={[16, 16]} className={['grid-view', className].join(' ')}>
                <Col span={24} className="grid-header">
                    <Row gutter={[16, 16]}>
                        {hasSearch && (
                            <Col xs={{ span: 24, order: 2 }} md={{ span: searchSpan ?? 10, order: 1 }}>
                                <Input.Search
                                    addonAfter={
                                        AdvanceFilter ? (
                                            <Button
                                                className="btn-adv-search"
                                                type="link"
                                                onClick={() => setIsAdvSearchOpen(!isAdvSearchOpen)}
                                            >
                                                <Space>
                                                    Tìm kiếm nâng cao
                                                    <Icon
                                                        icon={
                                                            isAdvSearchOpen
                                                                ? 'ant-design:down-outlined'
                                                                : 'ant-design:up-outlined'
                                                        }
                                                    />
                                                </Space>
                                            </Button>
                                        ) : null
                                    }
                                    className="search"
                                    defaultValue={keySearch}
                                    onSearch={onSearch}
                                    placeholder="Tìm kiếm nhanh"
                                    allowClear
                                />
                            </Col>
                        )}

                        {ActionBar && (
                            <Col
                                xs={{ span: 24, order: 1 }}
                                md={{
                                    span: hasSearch ? (searchSpan ? 24 - searchSpan : 14) : 24,
                                    order: 2,
                                }}
                                className="grid-view-action-bar"
                            >
                                <div className="float-sm-end">{ActionBar}</div>
                            </Col>
                        )}

                        {isAdvSearchOpen && (
                            <Col span={24} order={3} className="filter-adv-container">
                                <fieldset>
                                    <legend>Tham số tìm kiếm</legend>
                                    {AdvanceFilter}
                                </fieldset>
                            </Col>
                        )}
                    </Row>
                </Col>

                <Col span={24} className="grid-table">
                    <Table<T>
                        {...rest}
                        columns={cols}
                        onChange={handleTableChange}
                        pagination={false}
                        size="small"
                        expandable={expandable}
                        locale={{ emptyText: 'Không có dữ liệu' }}
                    />
                </Col>

                {pagination && (
                    <Col span={24} className="grid-pagination">
                        <div className="d-none d-sm-flex">
                            {pageSize > 0 && (
                                <div className="select-page-size">
                                    Hiển thị{' '}
                                    <Select
                                        size="small"
                                        className="change-page-size"
                                        value={pageSize}
                                        onChange={onChangePageSize}
                                        options={[
                                            { value: 10, label: '10 / trang' },
                                            { value: 20, label: '20 / trang' },
                                            { value: 50, label: '50 / trang' },
                                            { value: 100, label: '100 / trang' },
                                        ]}
                                    />
                                </div>
                            )}
                        </div>

                        <Pagination
                            className="float-end justify-content-center"
                            total={totalRecord}
                            pageSize={pageSize > 0 ? pageSize : totalRecord}
                            current={currentPage}
                            onChange={onChangePage}
                            simple
                            showTotal={(total, range) => (
                                <span>
                                    {range[0]} - {range[1]} trong số {total}
                                </span>
                            )}
                        />
                    </Col>
                )}
            </Row>
        </Spin>
    );
}
