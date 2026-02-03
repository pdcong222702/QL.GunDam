import { Button, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import { CheckPerm } from "./CheckPerm";

interface DeleteButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function DeleteButton({ ...props }: DeleteButtonProps) {
    if (props.perm === null || CheckPerm(props.perm)) {
        return (
            <Button
                icon={<Icon icon="ant-design:delete-outlined" />}
                danger
                {...props}
            >
                {props.title ?? 'Xóa'}
            </Button>
        )
    } else {
        return null;
    }
}