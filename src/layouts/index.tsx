import { routes } from '@/route';
import { Breadcrumb, Menu } from 'antd';
import { Link, Outlet, useLocation, useModel } from 'umi';

const renderBreadCrumb = (pathname) => {
  let arr = pathname.split('/').slice(1);
  if (arr[0] === '') {
    arr[0] = 'Home';
  }
  return (
    <Breadcrumb>
      {arr.map((name) => {
        return <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default function LayoutContainer(props: any) {
  const location = useLocation();
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const selectKey = '/' + location.pathname.split('/')[1];
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

  // 路由跳转
  // if (location.pathname === '/') {
  //   history.push('/home');
  //   return;
  // }

  if (location.pathname === '/login') {
    return (
      <div id="main">
        <Outlet />
      </div>
    );
  }
  return (
    <div id="app-page" className="bg-blue-100 flex flex-col">
      <div id="header" className="h-20 shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] ">
        <div className="flex h-20 items-center m-auto px-4 mb-4">
          <div className="flex-1">网易猎头系统</div>
          <div className="w-[100px] ml-1 text-right" onClick={onLogout}>
            {userInfo?.name} , 退出
          </div>
        </div>
      </div>

      <main id="main" className="bg-[#f5f5f5] flex-1  ">
        {renderBreadCrumb(location.pathname)}
        <section className="flex m-auto w-[1200px] bg-[#fff]">
          <div className="w-[200px]">
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={['home']}
              selectedKeys={[selectKey]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/">
                <Link to="/">Home</Link>
              </Menu.Item>
              {routes?.map((route) => {
                let name = (route.name ?? route.path)?.replace('/', '');

                return name ? (
                  <Menu.Item key={route.path}>
                    <Link to={route.path}>{name}</Link>
                  </Menu.Item>
                ) : null;
              })}
            </Menu>
          </div>
          <div className="ml-4 flex-1 p-4">
            {/* umi 4 是 react router v6 ，layout 没有 props.children 了，需要通过 <Outlet /> 来代替 */}
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}
