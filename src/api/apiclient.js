import axios from 'axios';
import qs from 'qs';

import store, { APP_SPIN } from '@types';
import { parseRestfulUrl, isIE } from '@utils/tools';

const methods = ['get', 'post', 'put', 'patch', 'delete'];
const isIe = isIE();
let callbackId = 0;

export default class ApiClient {
    constructor() {
        this.jsonp = (url, params = {}, setting = {}) => new Promise((resolve, reject) => {
            callbackId++;
            store.commit(APP_SPIN, true);

            const callbackFunction = `jsonCallBack${callbackId}`;
            const jsonp = document.createElement('script');

            jsonp.onload = () => {
                store.commit(APP_SPIN, false);

                delete window[callbackFunction];
                document.getElementsByTagName('head')[0].removeChild(jsonp);
            };
            jsonp.onerror = err => {
                store.commit(APP_SPIN, false);

                reject(err);
            };
            jsonp.type = 'text/javascript';
            jsonp.src = `${url}?callback=${callbackFunction}&${ApiClient.parseJsonpParams(params)}`;

            window[callbackFunction] = result => resolve(result);

            document.getElementsByTagName('head')[0].appendChild(jsonp);
        });

        methods.forEach(method => this[method] = async (path, axiosConfig, setting = {}) => {
                const {
                    isUpload,
                    enableSpin = true,
                    cache = false,
                    auth = true,
                    old = false,
                    restfulParams,
                } = setting;
                const requestConfig = { ...axiosConfig };

                // if (auth) ApiClient.authCheck();

                requestConfig.headers = {
                    'Content-Type': 'application/json; charset=UTF-8',
                    ...requestConfig.headers,
                };

                if (old) {
                    requestConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
                }

                if (isUpload) {
                    requestConfig.headers['Content-Type'] = 'multipart/form-data;';
                }

                if (method === 'get' && !cache && isIe) {
                    if (!requestConfig.params) requestConfig.params = {};

                    requestConfig.params.v = Math.random();
                }

                const config = {
                    url: restfulParams ? parseRestfulUrl(path, restfulParams) : path,
                    method,
                    ...requestConfig,
                };

                if (config.data && old) {
                    config.data = qs.stringify(config.data);
                }

                if (enableSpin) {
                    store.commit(APP_SPIN, true);
                }

                return axios(config)
                    .then(res => {
                        const { data } = res;

                        ApiClient.successMiddle(data, setting);

                        return data;
                    })
                    .catch(error => {
                        ApiClient.failureMiddle(error, setting);

                        return Promise.reject(error);
                    });
            });
    }

    static parseJsonpParams(params) {
        const keys = Object.keys(params);
        const arr = [];

        keys.forEach(i => arr.push(`${i}=${encodeURIComponent(params[i])}`));

        return arr.join('&');
    }

    /**
     * success middle
     * @author jWX631548 2021/1/7 19:54
     * @param {Object} data
     * @param {Object} setting
     * @return void
     */
    static successMiddle(data, setting) {
        const { enableSpin = true } = setting;

        if (enableSpin) {
            store.commit(APP_SPIN, false);
        }
    }

    /**
     * failure middle
     * @author jWX631548 2021/1/7 19:56
     * @param {Error} error
     * @param {Object} setting
     * @return void
     */
    static failureMiddle(error, setting) {
        const {
            enableSpin = true,
            enableError = true,
        } = setting;

        if (enableSpin) {
            store.commit(APP_SPIN, false);
        }

        if (enableError) {
            ApiClient.showError(error);
        }

        if (error?.response?.status === 401) {
            ApiClient.goLogin();
        }
    }

    static authCheck() {
        return axios
            .post('/wireless/userInfo.do')
            .then(res => {
                const { data } = res;

                if (!data || (data && !data.userId)) {
                    ApiClient.goLogin();

                    return Promise.reject();
                }
                    return data;
            }, () => {
                ApiClient.goLogin();

                return Promise.reject();
            });
    }

    static goLogin() {
        const isDev = process.env.NODE_ENV === 'development';
        const proxyUrl = process.env.VUE_APP_API_PROXY;
        const onlineUrl = process.env.VUE_APP_ONLINE;
        const testHost = process.env.VUE_APP_TEST_HOST;

        let { href } = window.location;

        href = decodeURIComponent(href);
        href = encodeURIComponent(encodeURIComponent(href));

        const devUrl = `https://uniportal-beta.huawei.com/uniportal/?redirect=${href}`;
        const prodUrl = `https://uniportal.huawei.com/uniportal/?redirect=${href}`;

        let finalHref = devUrl;

        if ((isDev && proxyUrl === onlineUrl) || !isDev) finalHref = prodUrl;
        if (!isDev && window.location.host === testHost) finalHref = devUrl;

        window.location.href = finalHref;
    }

    static showError() {
    }
}
