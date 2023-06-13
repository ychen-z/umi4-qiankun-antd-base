export const isDev = process.env.NODE_ENV === 'development';
const isDevEnv = !['okr.netease.com', 'okr-pre.netease.com'].includes(
  window.location.host,
); // 是否是线上
const useTest = true;
export const isMock = !useTest;
export const isTest = useTest;
export const rootURL = isDev
  ? isMock
    ? '/mock'
    : isTest
    ? '/test'
    : '/test'
  : '';
export const EP_APP_KEY = isDevEnv
  ? 'ec5f509feb31475d9d3675100d0cae07'
  : '59b4d3915c724c84bf548b789ae52c9e';
export const EP_EMAIL = 'daizhonghuan@corp.netease.com'; // 负责人
export const SUB_PRODUCT_ID = isDevEnv ? '296' : 186;
export const EP_ENV = {
  Online: 'online-project',
  Dev: 'dev',
  Test: 'test',
};
export const FEEDBACK_TYPE = {
  Submit: 'submit',
  Display: 'display',
};
