import { Button, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import { CheckPerm } from "./CheckPerm";

interface SaveButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function SaveButton({ ...props }: SaveButtonProps) {
    if (props.perm === null || CheckPerm(props.perm)) {
        return (
            <Button
                icon={<Icon icon="ant-design:save-filled" />}
                {...props}
                type='primary'
            >
                {props.title ?? 'Lưu lại'}
            </Button>
        )
    } else {
        return null;
    }
}