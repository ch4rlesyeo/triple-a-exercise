import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Form from '@/components/form';
import FormErrorMessage from '@/components/form/error-message';
import FormInputSection from '@/components/form/input-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { searchAccountIdSchema } from '@/schema/account';

interface ISearchAccountProps {
  onSearch: (accountId: number) => void;
}

interface ISearchAccountForm {
  accountId: number;
}

const SearchAccount: FC<ISearchAccountProps> = (props) => {
  const { onSearch } = props;

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ISearchAccountForm>({
    resolver: yupResolver(searchAccountIdSchema)
  });

  const goToCreateAccountPage = () => {
    router.push('/account/create');
  };

  const onFormSubmit = async (values: ISearchAccountForm) => {
    const { accountId } = values;

    if (accountId) {
      onSearch(accountId);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Account</CardTitle>
      </CardHeader>
      <CardContent>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <FormInputSection label="Account ID" htmlFor="accountId">
            <Input
              id="accountId"
              type="text"
              {...register('accountId')}
              placeholder="Enter account ID"
            />
            <FormErrorMessage message={errors.accountId?.message} />
          </FormInputSection>
          <div className="flex flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={goToCreateAccountPage}
              className="flex-1"
            >
              Create Account
            </Button>
            <Button type="submit" className="flex-1">
              Search
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SearchAccount;
