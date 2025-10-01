import * as yup from 'yup';

const accountIdSchema = yup
  .number()
  .required('Account ID is required')
  .typeError('Account ID must be a number')
  .positive('Account ID must be positive')
  .integer('Account ID must be a whole number');

const accountBalanceSchema = yup
  .string()
  .required('Initial balance is required');

export const searchAccountIdSchema = yup.object().shape({
  accountId: accountIdSchema
});

export const createAccountSchema = searchAccountIdSchema.shape({
  initialBalance: accountBalanceSchema
});

export const transferFundsSchema = yup.object().shape({
  sourceAccountId: accountIdSchema,
  destinationAccountId: accountIdSchema,
  amount: yup.string().required('Amount is required')
});
