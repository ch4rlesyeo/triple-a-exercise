import { useRouter } from 'next/navigation';
import { FormProvider } from 'react-hook-form';
import { toast } from 'sonner';

import Form from '@/components/form';
import FormErrorMessage from '@/components/form/error-message';
import FormInputSection from '@/components/form/input-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ApiService } from '@/lib/api';

import CreateAccountActions from './actions';
import { ICreateAccountForm, useCreateAccountForm } from './hooks';

const CreateAccount: FC = () => {
  const router = useRouter();
  const formMethods = useCreateAccountForm();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = formMethods;

  const onFormSubmit = async (values: ICreateAccountForm) => {
    const { success, accountId, initialBalance } = values;

    if (success) {
      return;
    }

    try {
      const newAccount = await ApiService.createAccount(
        accountId,
        initialBalance
      );

      setValue('success', true);

      toast.success('Account created successfully');

      setTimeout(() => {
        router.push(`/account/${newAccount.id}`);
      }, 1500);
    } catch {
      toast.error('Unable to create account');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Account</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...formMethods}>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <FormInputSection label="Account ID" htmlFor="accountId">
              <Input
                id="accountId"
                type="text"
                placeholder="Enter account ID"
                {...register('accountId')}
              />
              <FormErrorMessage message={errors.accountId?.message} />
            </FormInputSection>
            <FormInputSection
              label="Initial Balance ($)"
              htmlFor="initialBalance"
            >
              <Input
                id="initialBalance"
                type="number"
                step="any"
                placeholder="Enter initial balance"
                {...register('initialBalance')}
              />
              <FormErrorMessage message={errors.initialBalance?.message} />
            </FormInputSection>
            <CreateAccountActions />
          </Form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default CreateAccount;
