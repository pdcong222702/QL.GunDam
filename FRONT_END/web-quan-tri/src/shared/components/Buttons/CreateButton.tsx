import { Button, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import { CheckPerm } from "./CheckPerm";

interface CreateButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function CreateButton({ ...props }: CreateButtonProps) {
    if (props.perm === null || CheckPerm(props.perm)) {
        return (
            <Button
                icon={<Icon icon="ant-design:plus-outlined" />}
                type='primary'
                {...props}
            >
                {props.title ?? 'Lưu lại'}
            </Button>
        )
    } else {
        return null;
    }
}