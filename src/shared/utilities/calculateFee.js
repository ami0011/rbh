import get from 'lodash/get';

export default function calculateFee(beneficiaries) {
  const amount = beneficiaries.reduce((sum, entry) => {
    const value = get(entry, 'amount.value');
    return typeof value === 'number' ? sum + value : sum;
  }, 0);

  const fee = beneficiaries.reduce((sum, entry) => {
    const value = get(entry, 'fee.value');
    return typeof value === 'number' ? sum + value : sum;
  }, 0);

  const total = amount + fee;
  return { amount, fee, total };
}
