import { Outlet, history } from 'umi';

export default function B() {
  return (
    <div onClick={() => history.push('/home')}>
      Bxx
      <div>
        <Outlet />
      </div>
    </div>
  );
}
