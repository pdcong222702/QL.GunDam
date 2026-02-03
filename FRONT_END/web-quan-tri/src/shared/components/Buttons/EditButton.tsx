import { Button, ConfigProvider, theme, type ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import { CheckPerm } from "./CheckPerm";

interface EditButtonProps extends ButtonProps {
    perm?: string | string[];
}

export function EditButton({ ...props }: EditButtonProps) {
    const { token } = theme.useToken();

    if (props.perm === null || CheckPerm(props.perm)) {
        return (
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultBorderColor: token.colorWarningBorder,
                            defaultHoverBorderColor: token.colorWarningBorderHover,
                            defaultHoverColor: token.colorTextBase,
                            defaultBg: token.colorWarning,
                            defaultHoverBg: token.colorWarningHover,
                        },
                    },
                }}
            >
                <Button
                    icon={<Icon icon="ant-design:edit-filled" />}
                    type='default'
                    {...props}
                >
                    {props.title ?? 'Chỉnh sửa'}
                </Button>
            </ConfigProvider>
        )
    } else {
        return null;
    }
}