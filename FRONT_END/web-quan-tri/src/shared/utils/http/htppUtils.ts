import { Observable } from 'rxjs';
import axios from 'axios';
import type {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    RawAxiosResponseHeaders,
    AxiosResponseHeaders 
} from 'axios';

/* =======================
 * HttpErrorResponse
 * ======================= */

export interface IHttpErrorResponse {
    error: unknown;
    headers?: AxiosResponseHeaders | RawAxiosResponseHeaders;
    status?: number;
    statusText?: string;
    url?: string;
    request?: AxiosRequestConfig;
}

export class HttpErrorResponse implements IHttpErrorResponse {
    error: unknown;
    headers?: AxiosResponseHeaders  | RawAxiosResponseHeaders;
    status?: number;
    statusText?: string;
    url?: string;
    request?: AxiosRequestConfig;

    constructor(otp: IHttpErrorResponse) {
        this.error = otp.error;
        this.headers = otp.headers;
        this.status = otp.status;
        this.statusText = otp.statusText;
        this.url = otp.url;
        this.request = otp.request;
    }
}

/* =======================
 * HttpHandle
 * ======================= */

export const HttpHandle = (
    config: AxiosRequestConfig
): Observable<any> => {
    return new Observable<any>((subscriber) => {
        axios
            .request(config)
            .then((response: AxiosResponse) => {
                subscriber.next(response.data);
                subscriber.complete();
            })
            .catch((err: AxiosError) => {
                let error: HttpErrorResponse | { error: true; message: string };

                if (err.response) {
                    error = new HttpErrorResponse({
                        error: err.response.data,
                        headers: err.response.headers,
                        status: err.response.status,
                        statusText: err.response.statusText,
                        url: err.response.config?.url,
                        request: err.config,
                    });
                } else {
                    error = {
                        error: true,
                        message: err.message,
                    };
                }

                subscriber.error(error);
            });
    });
};
export function jsonToUrlencoded(
    data: Record<string, string | number | boolean | null | undefined>
): string {
    return Object.entries(data)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        )
        .join('&');
}
