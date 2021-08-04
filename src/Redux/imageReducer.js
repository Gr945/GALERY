
const initialState = {
 imagesURL:[]
}

function imageReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_IMAGE":
      return {...state, imagesURL:[... state.imagesURL,action.payload]};
   
    default:
      return {...state};
  }
}

export default imageReducer
