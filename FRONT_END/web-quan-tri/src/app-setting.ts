const host = window.location.hostname;
export const API_URL = `https://${host}:6116/`;
const BASE_AS_URL = `https://${host}:6112/`;
export const AS_URL = `${BASE_AS_URL}connect/`
export const WEB_DASHBOARD_URL = '/'; // link tu dashboard sang cac man hinh
export const SSO_CLIENT_ID = 'RV1aIdcZjZNHgQjj2Mopups1DY4a';
// const SSO_URL = 'https://sso.hcma.vn:9443';
export const SSO_URL = `https://${host}:6112`;
export const IFRAME_CHECK_SESSION_URL = `${BASE_AS_URL}connect/checksession`;
export const TIME_CHECK = 2;  //mở cái này ra để check logout sso, không cần thì đóng lại, nhớ cấu hình frontChannelLogoutUri trong bảng Clients ở db để nó logout generate ra page để clear cookies
export const VGCA_LOCAL_URL = 'https://127.0.0.1:8987';

export const CLIENT = {
    client_id: 'EPS.WebCore-Api',
    client_secret: 'Q2jGsMahbmcgdHLDrG5oIGtob2EgaOG7jWMgdsOgIGPDtG5nIG5naOG7hyBxdeG7kWMgZ2lh',
    scope:'offline_access openid',
    redirect_uri:`${window.location.protocol}//${window.location.host}/oauth-callback`,
    logout_redirect_uri:`${window.location.protocol}//${window.location.host}/logout`
};
export const AUTHORIZATION_BASE = `Basic ${btoa(CLIENT.client_id + ':' + CLIENT.client_secret)}`;