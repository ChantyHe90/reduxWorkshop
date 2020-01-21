// reducer = object = data
// action = function = feed the data
import axios from "axios";
// dispatch is 2nd function > our reducer will know about changes
// getStarWars as soon as it is called reducer will know about this
export const getStarWarsData = () => dispatch => {
  axios.get("https://swapi.co/api/people").then(res =>
    dispatch({
      type: "GET_STARWARS",
      payload: res.data
    })
  );
};
// above written in another way:
// export default getSomething = () => {
//   dispatch => {
//     return dispatch({
//       type: dasdas,
//       payload: das
//     });
//   };
// };
// ! dispatch is:
// a) what is the name of the action?
// what is the type of action?
// b) what is action giving us?

// export default <> export const
// file: can have many functions
// export default XYZ does not work with many functions
