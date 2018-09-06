import { add } from './add';

export const total = (subtotal, total) => {
  return `$${add(subtotal, total)}`;
};
