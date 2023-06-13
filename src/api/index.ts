import { notification } from 'antd';
import axios from 'axios';

export const RequestCodeMap = {
  // 锁定
  locked: 400,
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const EXIT_CODE = ['406', 406];

function handleResponseFormat(res: any) {
  if (!res) {
    return {};
  }
  const { data, code, msg } = res;
  return data;
}

const handleLogout = () => {
  window.location.href = `/api/auth/login/openId?returnUrl=${encodeURIComponent(
    location.href,
  )}&errUrl=${location.origin}/403`;
};

function isResponseError<R>(x: any) {
  return x.data;
}
function isAxiosError<R>(x: any) {
  return x.code;
}

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  console.log('errorHandler', error);
  const { response } = error || {};
  let errResult = {};
  let code = -1;
  let msg = '';
  if (isResponseError(response)) {
    //@ts-ignore
    code = response.data.code;
    //@ts-ignore
    msg = response.data.msg;
  }
  if (isAxiosError(error)) {
    code = error.response.status;
    //@ts-ignore
    msg = error?.message;
  }
  if (response && response.status) {
    // @ts-ignore
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    const ERR_MESSAGE = msg;
    try {
      console.error('请求出错', JSON.stringify(response));
      console.log('请求错误：', response);
      if (ERR_MESSAGE && code !== RequestCodeMap.locked) {
        notification.error({ message: ERR_MESSAGE });
      }
    } catch (e) {
      console.log(`请求错误 ${status}: ${url}`, errorText);
    }
  } else if (!response) {
    console.warn('请求出错：', error);
  }
  if (isResponseError(error)) {
    //@ts-ignore
    errResult = error.data;
  }
  //@ts-ignore
  return Promise.reject(response.data);
};

const prefix = process.env.NODE_ENV === 'development' ? '/test' : '';

const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

const request = axios.create({
  // errorHandler, // 默认错误处理
  timeout: 300000,
  // credentials: 'include',
  // getResponse: true,
  // prefix,
  // suffix: '.do',
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use((config) => {
  const { url } = config;
  let nextUrl = url?.includes('http') ? url : `${prefix}${url}`;
  // if (!nextUrl?.endsWith('.do')) {
  //   nextUrl = `${nextUrl}.do`;
  // }
  return {
    ...config,
    url: nextUrl,
  };
});

// response拦截器, 处理response
request.interceptors.response.use((response) => {
  const { code, data } = response?.data || {};
  if (EXIT_CODE.includes(code)) {
    handleLogout();
    return;
  }
  if (+code !== 200) {
    //@ts-ignore
    return errorHandler({ response });
  }
  return response;
}, errorHandler);

const httpRequest = {
  get: (url: string, params?: any, config = {}) =>
    request
      .get(url, { params, ...DEFAULT_OPTIONS, ...config })
      .then((res) => handleResponseFormat(res && res.data)),
  post: (url: string, data?: any, config?: object) =>
    request
      .post(url, data, { ...DEFAULT_OPTIONS, ...config })
      .then((res) => handleResponseFormat(res && res.data)),
  delete: (url: string, data?: any, config = {}) =>
    request
      .delete(url, { data, ...DEFAULT_OPTIONS, ...config })
      .then((res) => handleResponseFormat(res && res.data)),
  put: (url: string, data?: any, config = {}) =>
    request
      .put(url, data, { ...DEFAULT_OPTIONS, ...config })
      .then((res) => handleResponseFormat(res && res.data)),
};

export default httpRequest;
