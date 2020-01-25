// reducer = object = data
// action = function = feed the data
const initialState = {
  //    it is the same as:
  // this.state
  starWarsData: []
  // first it is empty now we want to fill data in >> ACTION :D
};

export const starWarsReducer = (state = initialState, action) => {
  // if action.type == same name, then send the data here
  //  and because reducer is in the store it knows about action
  switch (action.type) {
    //   if you found a Get-starwars give me the data
    case "GET_STARWARS":
      return {
        //   ! every reducer will return state as in this syntax:
        ...state,
        starWarsData: action.payload
      };
    default:
      return state;
  }
};
