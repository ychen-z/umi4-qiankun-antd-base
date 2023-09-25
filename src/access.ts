// return用户角色权限表，页面路由和操作功能
// 用法：useAccess()或Access组件包裹
export default function (initialState: any) {
  const { userInfo } = initialState || {};

  const canSeeAdmin = !!(initialState && userInfo.name !== 'z');
  return {
    canSeeAdmin,
  };
}
