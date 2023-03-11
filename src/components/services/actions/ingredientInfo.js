export const GET_INFO = "GET_INFO";
export const WRITE_INFO = "WRITE_INFO";

export function getInfo() {
  return function (dispatch) {
    dispatch({
      type: GET_INFO,
    });
  };
}

export const writeInfo = (image, name, price) => ({
  type: WRITE_INFO,
  payload: { image: image, name: name, price: price },
});

// export function writeInfo(...data) {
//   console.log(data);
//   return function (dispatch) {
//     dispatch({
//       type: WRITE_INFO,
//     });
//   };
// }
