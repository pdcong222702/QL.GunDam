export { };

declare global {
    interface Window {
        appCfg: {
            API_URL: string;
            // env: 'dev' | 'staging' | 'prod';
            BASE_AS_URL: string;
            AS_URL: string;
            WEB_DASHBOARD_URL: string;
            SSO_CLIENT_ID: string;
            SSO_URL: string;
            IFRAME_CHECK_SESSION_URL: string;
            VGCA_LOCAL_URL: string;
            TIME_CHECK: number;
        };
    }
}

const host = window.location.hostname;
const API_URL = `https://${host}:6116/`;
const BASE_AS_URL = `https://${host}:6112/`;
const AS_URL = `${BASE_AS_URL}connect/`
const WEB_DASHBOARD_URL = '/'; // link tu dashboard sang cac man hinh
const SSO_CLIENT_ID = 'RV1aIdcZjZNHgQjj2Mopups1DY4a';
// const SSO_URL = 'https://sso.hcma.vn:9443';
const SSO_URL = `https://${host}:6112`;
const IFRAME_CHECK_SESSION_URL = `${BASE_AS_URL}connect/checksession`;
// const IFRAME_CHECK_SESSION_URL = `${SSO_URL}/oidc/checksession?client_id=${SSO_CLIENT_ID}&redirect_uri=${BASE_AS_URL}/signin-oidc`;
const TIME_CHECK = 2;  //mở cái này ra để check logout sso, không cần thì đóng lại, nhớ cấu hình frontChannelLogoutUri trong bảng Clients ở db để nó logout generate ra page để clear cookies
const VGCA_LOCAL_URL = 'https://127.0.0.1:8987';
window.appCfg = { VGCA_LOCAL_URL, TIME_CHECK, API_URL, BASE_AS_URL, AS_URL, SSO_URL, IFRAME_CHECK_SESSION_URL, SSO_CLIENT_ID, WEB_DASHBOARD_URL };
