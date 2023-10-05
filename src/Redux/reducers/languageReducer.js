import { SWITCH_LANGUAGE } from "../actions";
import { SAVE_LANGUAGES } from "../actions";

const initialState = {
  currentLanguage: "ru",
  languages: {},
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    case SAVE_LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };

    default:
      return state;
  }
};

export default languageReducer;
