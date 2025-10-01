import { useRouter } from 'next/navigation';

import FormInputSection from '@/components/form/input-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IAccount } from '@/lib/api';
import { formatBalance } from '@/lib/utils';

interface IAccountDetailsOverviewProps {
  account: IAccount;
  onClickFundsTransfer: () => void;
}

const AccountDetailsOverview: FC<IAccountDetailsOverviewProps> = (props) => {
  const {
    account: { id, balance },
    onClickFundsTransfer
  } = props;

  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <FormInputSection label="Account ID">
            <div className="text-xs">{id}</div>
          </FormInputSection>
          <FormInputSection label="Balance">
            <div className="text-xl font-semibold">
              ${formatBalance(balance)}
            </div>
          </FormInputSection>
          <div className="flex flex-row gap-2">
            <Button variant="outline" onClick={goToHomePage} className="flex-1">
              Back
            </Button>
            <Button onClick={onClickFundsTransfer} className="flex-1">
              Transfer Funds
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountDetailsOverview;
