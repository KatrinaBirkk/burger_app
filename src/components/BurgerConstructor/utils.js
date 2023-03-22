export const totalPriceSelector = (state) => {
  const {
    items: { items },
  } = state;
  return items.reduce((acc, item) => acc + item.price * item.counter, 0);
};
