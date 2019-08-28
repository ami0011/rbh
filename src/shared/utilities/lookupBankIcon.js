const bankLogo = {
  'Kasikorn Bank': '/transfer/bank-logo/004.png',
  'Krungsri Bank': '/transfer/bank-logo/025.png',
  'Siam Commercial Bank': '/transfer/bank-logo/014.png',
};

export default function lookupBankIcon(bankName) {
  return bankLogo[bankName];
}
