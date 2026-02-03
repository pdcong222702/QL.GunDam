import { API_URL, AUTHORIZATION_BASE } from '../../../app-setting';
import HttpClient from './HttpClient';

export const http = new HttpClient({
    apiUrl: API_URL,
    authorizationBase: AUTHORIZATION_BASE

});
export { jsonToUrlencoded } from './htppUtils';