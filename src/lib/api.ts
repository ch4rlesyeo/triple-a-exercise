import axios, { AxiosError } from 'axios';

export interface IAccount {
  id: number;
  balance: string;
}

export interface ITransaction {
  sourceAccountId: number;
  destinationAccountId: number;
  amount: string;
}

interface ITransactionRequest {
  source_account_id: number;
  destination_account_id: number;
  amount: string;
}

export interface IApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

export class ApiError extends Error {
  code?: string;
  statusCode?: number;

  constructor(message: string, code?: string, statusCode?: number) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

interface IAccountResponse {
  account_id: number;
  balance: string;
}

interface ICreateAccountRequest {
  account_id: number;
  initial_balance: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<IApiError>) => {
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    const code = error.response?.data?.code;
    const statusCode = error.response?.status;
    throw new ApiError(message, code, statusCode);
  }
);

export class ApiService {
  static async createAccount(
    accountId: number,
    initialBalance: string
  ): Promise<IAccount> {
    const requestData: ICreateAccountRequest = {
      account_id: accountId,
      initial_balance: initialBalance
    };

    const response = await apiClient.post<IAccountResponse>(
      '/accounts',
      requestData
    );

    return {
      id: response.data.account_id,
      balance: response.data.balance
    };
  }

  static async getAccountBalance(accountId: string): Promise<IAccount> {
    const response = await apiClient.get<IAccountResponse>(
      `/accounts/${accountId}`
    );
    return {
      id: response.data.account_id,
      balance: response.data.balance
    };
  }

  static async executeTransaction(transaction: ITransaction): Promise<void> {
    const { sourceAccountId, destinationAccountId, amount } = transaction;

    const requestData: ITransactionRequest = {
      source_account_id: sourceAccountId,
      destination_account_id: destinationAccountId,
      amount: amount.toString()
    };

    await apiClient.post('/transactions', requestData);
  }
}
