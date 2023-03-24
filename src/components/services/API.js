const API_URL = "https://norma.nomoreparties.space/api/ingredients";

export const getIngredientsRequest = async () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
};
