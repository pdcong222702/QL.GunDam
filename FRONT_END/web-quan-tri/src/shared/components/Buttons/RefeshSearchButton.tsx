import { Button, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import { CheckPerm } from "./CheckPerm";

interface RefeshSearchButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function RefeshSearchButton({ ...props }: RefeshSearchButtonProps) {
    if (props.perm === null || CheckPerm(props.perm)) {
        return (
            <Button
                icon={<Icon icon="ant-design:reload-outlined" />}
                type='default'
                {...props}
            >
                {props.title ?? 'Làm mới'}
            </Button>
        )
    } else {
        return null;
    }
}