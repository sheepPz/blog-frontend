import { httpApi } from './index.js';
// debugger;
export const getBloglist = (data) => {
    return httpApi({
        url:'api/blog/list',
        params: data,
        method: 'get',
    })
}

export const login = (data) => {
    return httpApi({
        url: 'api/user/login',
        data,
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
        }
    })
}
export const exit = () => {
    return httpApi({
        url: 'api/user/signout',
    })
}
// export const getBloglist = (config) => httpApi(config);