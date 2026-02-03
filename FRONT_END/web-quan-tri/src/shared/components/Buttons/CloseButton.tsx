import { Button, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";

interface CloseButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function CloseButton({ ...props }: CloseButtonProps) {
    return (
        <Button
            icon={<Icon icon="ant-design:close-circle-outlined" />}
            {...props}
        >
            {props.title ?? 'Đóng'}
        </Button>
    )
}