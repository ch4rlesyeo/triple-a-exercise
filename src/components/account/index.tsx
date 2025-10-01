import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ApiService, IAccount } from '@/lib/api';

import AccountDetails from './details';
import AccountNotFound from './not-found';

type TAccountPageParams = {
  accountid: string;
};

const Account: FC = () => {
  const { accountid } = useParams<TAccountPageParams>();

  const [account, setAccount] = useState<IAccount>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAccount = useCallback(async () => {
    try {
      const foundAccount = await ApiService.getAccountBalance(accountid);
      setAccount(foundAccount);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [accountid]);

  useEffect(() => {
    fetchAccount();
  }, [fetchAccount]);

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[50%]" />
            <Skeleton className="h-4 w-[50%]" />
            <Skeleton className="h-4 w-[50%]" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!account) {
    return <AccountNotFound />;
  }

  return <AccountDetails account={account} onTransferComplete={fetchAccount} />;
};

export default Account;
