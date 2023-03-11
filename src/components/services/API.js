const API_URL = "https://norma.nomoreparties.space/api/ingredients";

export const getIngredientsRequest = async () => {
  return (
    fetch(API_URL)
      .then((res) => res.json())
      // .then((data) => res.data)
      .catch((error) => console.log(error.message))
  );
};

//   return await new Promise((resolve) =>
//     setTimeout(() => {
//       resolve({
//         success: true,
//         data: [
//           {
//             id: 1,
//             src: pic1,
//             qty: 1,
//             text: "похожая на настоящую красный Мягкая приманка в виде червя силиконовый искусственный приманки рыбный запах креветок",
//             price: 120,
//           },
//           {
//             id: 2,
//             src: pic2,
//             qty: 1,
//             text: "Умное кольцо из нержавеющей стали с датчиком температуры тела, модный дисплей",
//             price: 450,
//           },
//         ],
//       });
//     }, 1500)
//   );
// };
