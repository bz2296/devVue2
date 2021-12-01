// parseRestfulUrl, isIE
export const parseRestfulUrl = (url, params) => {
    debugger;
    let result = url;
    Object.keys(params).forEach(val => {
        result = result.replace(`{${val}}`, params[val] || '');
    });
    console.log('result', result);
    return result;
};

export const isIE = () => {
    const { userAgent } = navigator.userAgent; // 取得浏览器的userAgent字符串
    return (!!userAgent) && userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
};
