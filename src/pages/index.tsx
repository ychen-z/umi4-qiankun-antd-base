import { useEffect } from 'react';
import { history } from 'umi';

export default function Index() {
  useEffect(() => {
    history.push('/home');
  }, []);
  return null;
}
