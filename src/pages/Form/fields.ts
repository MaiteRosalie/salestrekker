import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const currencyMask = (props?: any) => {
  const options = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
    ...props,
  };
  return createNumberMask(options);
};

export const phoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const zipMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export const fields = [
  {
    label: 'Title',
    name: 'title',
    tag: 'select',
    value: '',
    options: [
      {
        disabled: true,
        hidden: true,
        label: 'Select an option',
        value: '',
      },
      { label: 'Mr' },
      { label: 'Ms' },
      { label: 'Mrs' },
      { label: 'Miss' },
      { label: 'Other' },
    ],
  },
  {
    label: 'First name',
    name: 'firstName',
  },
  {
    label: 'Surname',
    name: 'Surname',
  },
  {
    label: 'Date of birth (d/m/y)',
    name: 'birth',
    pattern: '\\d{1,2}/\\d{1,2}/\\d{4}',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Phone',
    name: 'phone',
    tag: 'masked',
    mask: phoneMask,
    inputMode: 'tel' as 'tel',
  },
  {
    label: 'Marital status',
    name: 'maritalStatus',
    tag: 'select',
    value: '',
    options: [
      {
        disabled: true,
        hidden: true,
        label: 'Select an option',
        value: '',
      },
      { label: 'Single' },
      { label: 'Married' },
      { label: 'De Facto' },
      { label: 'Divorced' },
    ],
  },
  {
    label: 'Address',
    name: 'address',
  },
  {
    label: 'Property price',
    tag: 'masked',
    inputMode: 'numeric' as 'numeric',
    name: 'propertyPrice',
    mask: currencyMask(),
  },
  {
    label: 'Mortgage amount',
    tag: 'masked',
    inputMode: 'numeric' as 'numeric',
    name: 'mortgageAmount',
    mask: currencyMask(),
  },
  {
    label: 'Term (Years)',
    inputMode: 'numeric' as 'numeric',
    name: 'term',
  },
  {
    label: 'Interest rate %',
    inputMode: 'numeric' as 'numeric',
    name: 'interestRate',
  },
  {
    label: 'Monthly repayment',
    tag: 'masked',
    inputMode: 'numeric' as 'numeric',
    name: 'monthlyRepayment',
    mask: currencyMask(),
  },
];
