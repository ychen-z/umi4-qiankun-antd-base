import api from '@/api';
import { ResponsePromise } from '../interface';
import { IUserInfo } from './interface';

export default {
  getUserInfo: (userId?: number): ResponsePromise<IUserInfo> =>
    api.get('/user/getUserInfo', { userId }),
};

export * from './interface';
