import React from 'react';
import { ConfigProvider, App, theme } from 'antd';
import locale from 'antd/locale/vi_VN';
import { router } from './AppRouters';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/store';;

export const headerHeight = 56;
export const headerPadding = '0px 12px';
export function WrapApp() {
  const themeConfig = {
    token: {
      colorPrimary: '#1D50E7',
      colorInfo: '#1D50E7',
      fontFamily: '"Inter", sans-serif'
    }
  };
  const { colorBgContainer, colorPrimary } = theme.getDesignToken(themeConfig);
  const lightTheme = {
    token: themeConfig.token,
    algorithm: theme.defaultAlgorithm,
    components: {
      Layout: {
        headerBg: colorPrimary,
        siderBg: colorBgContainer,
        headerHeight: headerHeight,
        headerPadding: headerPadding,
      }
    }
  };
  return (
    <ConfigProvider
      theme={lightTheme}
      locale={locale}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  )
}


class AppRoot extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WrapApp />
      </Provider>
    );
  }
}

export default AppRoot
