export const initialState = {
    images: [],
    activeImage: null,
  }
  
  export const appReducer = (state, action) => {
    switch (action.type) {
      case "GET_IMAGES":
        return { ...state, images: action.images };
      case "GET_ACTIVE_IMAGE":
        return { ...state, activeImage: action.activeImage };
      default:
        return state;
      }
  };