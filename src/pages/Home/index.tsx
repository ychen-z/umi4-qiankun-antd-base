import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { useModel } from '@umijs/max';
import { Button } from 'antd';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <div>
      <Guide name={trim(name)} />
      <span className="flex pr-2 font-bold text-purple h-[100px] leading-[100px]">
        fefe
      </span>
      <Button type="primary">按钮</Button>
    </div>
  );
};

export default HomePage;
