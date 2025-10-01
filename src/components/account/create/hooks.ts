import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormContext } from 'react-hook-form';

import { createAccountSchema } from '@/schema/account';

export interface ICreateAccountForm {
  success?: boolean;
  accountId: number;
  initialBalance: string;
}

export const useCreateAccountForm = () => {
  return useForm<ICreateAccountForm>({
    mode: 'onChange',
    resolver: yupResolver(createAccountSchema)
  });
};

export const useCreateAccountFormContext = () => {
  return useFormContext<ICreateAccountForm>();
};
