import { Outlet, useLocation, useModel } from 'umi';

export default function LayoutContainer(props: any) {
  const location = useLocation();
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};

  // const { data: needRemindKnowledge, refresh } = useRequest(
  //   () => api.getUserInfo(1),
  //   {
  //     onSuccess: (data) => {
  //       setKnowledgeVisible(data);
  //     },
  //   },
  // );
  // const { run } = useRequest(() => api.muteTip(1), { manual: true });

  const onLogout = () => {
    const { host, origin } = window.location;
    const returnUrl = origin; // 登录成功后跳转的页面
    const errUrl = `${host}`; // 登录无权限页面
    window.location.href = `/api/auth/login/openId/logout?returnUrl=${returnUrl}&errUrl=${errUrl}`;
  };

  if (location.pathname === '/login') {
    return (
      <div id="main">
        <Outlet />
      </div>
    );
  }
  return (
    <div id="app-page" className="bg-blue-100">
      <div id="header" className="shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] ">
        <div className="flex h-20 items-center m-auto w-[1200px]">
          <div className="flex-1">网易猎头系统</div>
          <div className="w-[100px] ml-1 text-right" onClick={onLogout}>
            {userInfo?.name} , 退出
          </div>
        </div>
      </div>

      <main id="main" className="m-auto w-[1200px] flex">
        <div className="w-[200px]">111</div>
        <div className="ml-4 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
