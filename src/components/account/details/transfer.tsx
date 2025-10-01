import { toast } from 'sonner';

import Form from '@/components/form';
import FormErrorMessage from '@/components/form/error-message';
import FormInputSection from '@/components/form/input-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ApiService, ITransaction } from '@/lib/api';

import FundsTransferActions from './actions';
import { ITransferFundsForm, useTransferFundsFormContext } from './hooks';

interface ITransferFundsProps {
  onTransferComplete: () => Promise<void>;
  onSuccessAnimationComplete: () => void;
}

const TransferFunds: FC<ITransferFundsProps> = (props) => {
  const { onTransferComplete, onSuccessAnimationComplete } = props;

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useTransferFundsFormContext();

  const onFormSubmit = async (values: ITransferFundsForm) => {
    try {
      const transaction: ITransaction = {
        ...values
      };

      await ApiService.executeTransaction(transaction);
      await onTransferComplete();

      setValue('success', true);
      toast.success('Funds transferred successfully');

      setTimeout(() => {
        onSuccessAnimationComplete();
        setValue('success', false);
        reset({});
      }, 1500);
    } catch {
      toast.error('Invalid destination account');
    }
  };

  return (
    <div>
      <div className="flex justify-center m-0">
        <div className="w-0.5 h-12 bg-border"></div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Funds Transfer</CardTitle>
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <FormInputSection
              label="Destination Account ID"
              htmlFor="destinationAccountId"
            >
              <Input
                id="destinationAccountId"
                type="text"
                placeholder="Enter account ID"
                {...register('destinationAccountId')}
              />
              <FormErrorMessage
                message={errors.destinationAccountId?.message}
              />
            </FormInputSection>
            <FormInputSection label="Amount ($)" htmlFor="amount">
              <Input
                id="amount"
                type="number"
                step="any"
                placeholder="Enter initial balance"
                {...register('amount')}
              />
              <FormErrorMessage message={errors.amount?.message} />
            </FormInputSection>
            <FundsTransferActions />
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransferFunds;
