export const initialState = {
    images: [],
    activeImage: null,
    collections: [],
    activeCollection: null,
  }
  
  export const appReducer = (state, action) => {
    switch (action.type) {
      case "GET_IMAGES":
        return { ...state, images: action.images };
      case "GET_ACTIVE_IMAGE":
        return { ...state, activeImage: action.activeImage };
      case "GET_COLLECTIONS":
        return { ...state, collections: action.collections };
      case "GET_ACTIVE_COLLECTION":
        return { ...state, activeCollection: action.activeCollection };
      default:
        return state;
      }
  };