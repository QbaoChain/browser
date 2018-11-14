import axios from 'axios';

const baseURL = 'http://172.16.5.203:8081/';
const CancelToken = axios.CancelToken;
let cancel, promiseArr = {};

axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    "Content-Type":"application/json"
};
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //发起请求时，取消掉当前正在进行的请求
    return config;
}, function (error) {
    //对错误请求做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
}, err => {
    return Promise.reject(err);
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误';
                break;
            case 401:
                err.message = '未授权，请重新登录';
                break;
            case 404:
                err.messgae = '请求错误，未找到相关资源';
                break;
            case 403:
                err.message = '拒绝访问';
                break;
            case 408:
                err.messgae = '请求超时';
                break;
            case 500:
                err.message = '服务器错误';
                break;
            case 501:
                err.message = '网络未实现';
                break;
            case 502:
                err.message = '网络错误';
                break;
            case 503:
                err.message = '服务不可用';
                break;
            case 504:
                err.message = '网络超时';
                break;
            case 505:
                err.message = 'http 版本不支持该请求';
                break;
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        err.message = '连接到服务器失败'
    }
    message.err(err.message);
    return Promise.resolve(err.response);
});

export function get (url, param) {
    return new Promise((resolve, reject) => {
        axios({
            baseURL,
            method: 'get',
            url,
            params: param,
            withCredentials: false, // 默认的    表示跨域请求时是否需要使用凭证
            cancelToken: new CancelToken(c => {
                cancel = c;
            })
        }).then((res) => {
            resolve(res)
        })
    })
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            baseURL,
            method: 'post',
            data,
            timeout: 1000,
            withCredentials: false, // 默认的    表示跨域请求时是否需要使用凭证
            cancelToken: new CancelToken(c => {
                cancel = c;
            })
        }).then(res => {
            resolve(res);
        })
    })
}
