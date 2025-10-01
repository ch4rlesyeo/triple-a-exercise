import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormContext } from 'react-hook-form';

import { transferFundsSchema } from '@/schema/account';

export interface ITransferFundsForm {
  amount: string;
  success?: boolean;
  sourceAccountId: number;
  destinationAccountId: number;
}

export const useTransferFundsForm = (sourceAccountId: number) => {
  return useForm<ITransferFundsForm>({
    defaultValues: {
      sourceAccountId
    },
    resolver: yupResolver(transferFundsSchema)
  });
};

export const useTransferFundsFormContext = () => {
  return useFormContext<ITransferFundsForm>();
};
