// 引入axios
import axios from 'axios';
import store from '@/store';

// 创建axios实例
const httpService = new axios.create({
    // baseURL: process.env.BASE_API, // 需自定义
    baseURL: 'http://localhost:81/',
    // 请求超时时间
    timeout: 3000, // 需自定义
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:81/'
    }
});

//添加请求和响应拦截器
// 添加请求拦截器
httpService.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.headers.token=store.getters.GET_TOKEN
    return config;
},function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
httpService.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    response.headers['Content-Type'] = 'application/json;charset=utf-8';
    return response;
},function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url, params = {}) {
    return new Promise(function (resolve, reject) {
        httpService({
            url: url,
            method: 'get',
            params: params,
        }).then( function (response) {
            console.log(response)
            resolve(response);
        }).catch( function (error) {
            reject(error);
        });
    });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params = {}) {
    return new Promise( function (resolve, reject) {
        httpService({
            url: url,
            method: 'post',
            data: params,
        }).then( function (response) {
            console.log(response)
            resolve(response);
        }).catch( function (error) {
            reject(error);
        });
    });
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url, params = {}) {
    return new Promise( function (resolve, reject) {
        httpService({
            url: url,
            method: 'post',
            data: params,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Server': 'apache',
                'Access-Control-Allow-Origin': 'http://localhost:81/'
            }
        }).then( function (response) {
            resolve(response);
        }).catch( function (error) {
            reject(error);
        });
    });
}

export function getServerUrl(url){
    return url;
}

export default {
    get,
    post,
    fileUpload,
    getServerUrl
}
