import Big from 'big.js';

export function formatBalance(balance: string | number): string {
  try {
    return new Big(balance).toFixed(2);
  } catch {
    return '0.00';
  }
}

export function formatAmount(amount: string | number): string {
  try {
    return new Big(amount).toFixed(2);
  } catch {
    return '0.00';
  }
}
