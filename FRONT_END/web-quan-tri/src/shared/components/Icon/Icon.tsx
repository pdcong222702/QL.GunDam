
import { Icon as Iconify } from '@iconify/react';
import classNames from 'classnames';

type IconProps = {
    width?: string | number;
    height?: string | number;
    className?: string;
    icon: string;
}


export const Icon = ({ ...props }: IconProps) => {
    const { width = '1em', height = '1em', className } = props;
    return (<span className={classNames('anticon', className)}><Iconify width={width} height={height} {...props} /></span>);
};

