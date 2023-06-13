import { IUserRoleItem } from '@/api/home';

// return用户角色权限表，页面路由和操作功能，用法：useAccess()或Access组件包裹
export default function (initialState: any) {
  const { userInfo } = initialState || {};
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  const userRoles = userInfo?.userRoles?.map(
    (role: IUserRoleItem) => role.name,
  );

  return {
    canSeeAdmin,
    userRoles: {
      deptAdmin: userRoles?.includes('OKR_ADMIN'),
    },
  };
}
