export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
export const SAVE_LANGUAGES = "SAVE_LANGUAGES";

export const switchLanguageAction = (language) => {
  return {
    type: SWITCH_LANGUAGE,
    payload: language,
  };
};
export const saveLanguagesAction = (language) => {
  return {
    type: SAVE_LANGUAGES,
    payload: language,
  };
};
