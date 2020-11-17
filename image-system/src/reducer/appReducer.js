export const initialState = {
    profile: null,
    images: [],
    activeImage: null,
    collections: [],
    activeCollection: null,
  }
  
  export const appReducer = (state, action) => {
    switch (action.type) {
      case "GET_PROFILE":
        return { ...state, profile: action.profile };
      case "GET_IMAGES":
        return { ...state, images: action.images };
      case "GET_ACTIVE_IMAGE":
        return { ...state, activeImage: action.activeImage };
      case "GET_COLLECTIONS":
        return { ...state, collections: action.collections };
      case "GET_ACTIVE_COLLECTION":
        return { ...state, activeCollection: action.activeCollection };
      case "GET_REQUEST_MESSAGE":
        return { ...state, requestMessage: action.requestMessage };
      default:
        return state;
      }
  };