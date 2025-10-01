import { useRouter } from 'next/navigation';

import SearchAccount from './search-account';

const Home: FC = () => {
  const router = useRouter();

  const handleSearch = (accountId: number) => {
    router.push(`/account/${accountId.toString().trim()}`);
  };

  return <SearchAccount onSearch={handleSearch} />;
};

export default Home;
