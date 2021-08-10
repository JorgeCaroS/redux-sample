import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [{title:"Redux"}]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === DELETE_ARTICLE) { 
        state.articles.pop(); 
  }
  return state;
}

export default rootReducer;