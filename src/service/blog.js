import { httpApi } from './index.js';
// debugger;
console.log(httpApi)
export const getBloglist = (url, data) => {
    return httpApi({
        url: url,
        params: data,
        methods: 'get',
    })
}
// export const getBloglist = (config) => httpApi(config);