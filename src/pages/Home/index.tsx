import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { useModel } from '@umijs/max';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <div>
      <Guide name={trim(name)} />
      <span className="flex pr-2 font-bold text-purple h-[100px] leading-[100px]">
        fefe
      </span>
    </div>
  );
};

export default HomePage;
