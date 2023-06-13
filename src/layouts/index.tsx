import { Outlet, useModel } from 'umi';

export default function LayoutContainer(props: any) {
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
    localStorage.okrUserId = null;
    localStorage.okrUserName = null;
    const { host, origin } = window.location;
    const returnUrl = origin; // 登录成功后跳转的页面
    const errUrl = `${host}/index.html`; // 登录无权限页面
    window.location.href = `/api/auth/login/openId/logout?returnUrl=${returnUrl}&errUrl=${errUrl}`;
  };

  return (
    <div id="app-page">
      <div id="header">TOUBU21</div>
      <main id="main">
        <Outlet />
      </main>
    </div>
  );
}
