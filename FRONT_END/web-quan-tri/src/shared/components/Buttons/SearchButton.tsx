import { Button, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import { CheckPerm } from "./CheckPerm";

interface SearchButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function SearchButton({ ...props }: SearchButtonProps) {
    if (props.perm === null || CheckPerm(props.perm)) {
        return (
            <Button
                icon={<Icon icon="ant-design:search-outlined" />}
                type='primary'
                {...props}
            >
                {props.title ?? 'Tìm kiếm'}
            </Button>
        )
    } else {
        return null;
    }
}