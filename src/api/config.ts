export const isDev = process.env.NODE_ENV === 'development';
const isDevEnv = !['xx'].includes(window.location.host); // 是否是线上
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
export const EP_ENV = {
  Online: 'online-project',
  Dev: 'dev',
  Test: 'test',
};
export const FEEDBACK_TYPE = {
  Submit: 'submit',
  Display: 'display',
};
