import axios from 'axios';
import type {
    AxiosRequestConfig
} from 'axios';
import { HttpHandle, HttpErrorResponse } from './htppUtils';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import {
    catchError,
    // filter,
    // finalize,
    // switchMap,
    // take,
} from 'rxjs/operators';
import { store } from '../../../store/store';
import type { OAuthState } from '../../../store/oauth.slice';
import { actions as OauthAction } from '../../../store/oauth.slice';


interface HttpClientOptions {
    apiUrl?: string;
    authorizationBase?: string;
}

export default class HttpClient {
    apiUrl?: string;
    authorizationBase?: string;
    tokenSubject: BehaviorSubject<string | null>;
    isRefreshingToken: boolean;
    oauth: OAuthState | null;

    constructor(options: HttpClientOptions = {}) {
        this.apiUrl = options.apiUrl;
        this.authorizationBase = options.authorizationBase;
        this.tokenSubject = new BehaviorSubject<string | null>(null);
        this.isRefreshingToken = false;
        this.oauth = null;

        axios.defaults.baseURL = this.apiUrl;

        // Không cần "const that = this" nữa vì method không bị bind lại
        store.subscribe(() => {
            this.oauth = store.getState().oauth;
        });
    }

    request(config: AxiosRequestConfig): Observable<any> {
        return HttpHandle(this.updateConfig(config, this.oauth)).pipe(
            catchError((error: HttpErrorResponse): Observable<any> => {
                if (error instanceof HttpErrorResponse) {
                    switch (error.status) {
                        case 400:
                            return this.handle400Error(error);
                        // case 401:
                        // return this.handle401Error(config, error);
                        default:
                            return throwError(() => error);
                    }
                } else {
                    return throwError(() => error);
                }
            })
        );
    }

    get(url: string, config?: AxiosRequestConfig): Observable<any> {
        return this.request({ ...config, method: 'get', url });
    }

    post(url: string, data?: any, config?: AxiosRequestConfig): Observable<any> {
        return this.request({ ...config, method: 'post', url, data });
    }

    private updateConfig(
        config: AxiosRequestConfig,
        token: any,
        isOverwrite?: boolean
    ): AxiosRequestConfig {
        let access_token = '';
        if (token) {
            access_token = `Bearer ${token.access_token}`;
        }
        config.headers = config.headers || {};
        if (config.headers.Authorization && !isOverwrite) {
            access_token = config.headers.Authorization as string;
        }
        config.headers.Authorization = access_token;
        return config;
    }
    handle400Error(error: any) {
        return throwError(error);
    }
    // handle401Error(config: AxiosRequestConfig, error: any): Observable<any> {
    //     if (!this.isRefreshingToken) {
    //         this.isRefreshingToken = true;
    //         // Reset here so that the following requests wait until the token
    //         // comes back from the refreshToken call.
    //         this.tokenSubject.next(null);
    //         return this.refreshToken().pipe(
    //             catchError(err => {
    //                 // If there is an exception calling 'refreshToken', bad news so logout.
    //                 if (err) {
    //                     this.logoutUser();

    //                 }
    //                 return throwError(error);
    //             }),
    //             switchMap((newToken: any) => {
    //                 if (newToken) {
    //                     this.tokenSubject.next(newToken);
    //                     return HttpHandle(this.updateConfig(config, newToken, true));

    //                 }
    //                 // If we don't get a new token, we are in trouble so logout.
    //                 this.logoutUser();
    //                 return throwError(error);
    //             }),
    //             finalize(() => {
    //                 this.isRefreshingToken = false;
    //             }));
    //     } else {
    //         return this.tokenSubject.pipe(
    //             filter(token => token != null),
    //             take(1),
    //             switchMap(token => {
    //                 return HttpHandle(this.updateConfig(config, token, true));
    //             }));
    //     }
    // }

    // refreshToken() {
    //     if (this.oauth && this.oauth.refresh_token) {
    //         return authService.refreshToken(this.oauth.refresh_token);
    //     } else {
    //         return new Observable(observable => {
    //             observable.next(false);
    //         });
    //     }
    // }

    logoutUser() {
        // Route to the login page (implementation up to you)        
        store.dispatch(OauthAction.removeToken());

    }
    // ... các method khác
}