import { Button, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import { CheckPerm } from "./CheckPerm";

interface SendButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function SendButton({ ...props }: SendButtonProps) {
    if (props.perm === null || CheckPerm(props.perm)) {
        return (
            <Button
                icon={<Icon icon="mdi:send-variant-outline" />}
                title={props.title ?? 'Gửi'}
                {...props}
            >
                {props.title ?? 'Gửi'}
            </Button>
        )
    } else {
        return null;
    }
}