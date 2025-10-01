import { useState } from 'react';
import { FormProvider } from 'react-hook-form';

import { IAccount } from '@/lib/api';

import { useTransferFundsForm } from './hooks';
import AccountDetailsOverview from './overview';
import FundsTransfer from './transfer';

interface IAccountDetailsProps {
  account: IAccount;
  onTransferComplete: () => Promise<void>;
}

const AccountDetails: FC<IAccountDetailsProps> = (props) => {
  const { account, onTransferComplete } = props;
  const { id } = account;

  const [showTransfer, setShowTransfer] = useState(false);

  const onClickFundsTransfer = () => {
    setShowTransfer(true);
  };

  const onSuccessAnimationComplete = () => {
    setShowTransfer(false);
  };

  const formMethods = useTransferFundsForm(id);

  return (
    <FormProvider {...formMethods}>
      <AccountDetailsOverview
        account={account}
        onClickFundsTransfer={onClickFundsTransfer}
      />
      {showTransfer && (
        <FundsTransfer
          onTransferComplete={onTransferComplete}
          onSuccessAnimationComplete={onSuccessAnimationComplete}
        />
      )}
    </FormProvider>
  );
};

export default AccountDetails;
