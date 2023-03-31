export const totalPriceSelector = (state) => {
  const {
    items: { items },
  } = state;
  return items.reduce((acc, item) => acc + item.price * item.counter, 0);
};

export const _checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};
