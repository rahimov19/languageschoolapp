import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

import languageReducer from "../reducers/languageReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  tranforms: [
    encryptTransform({
      secretKey: "S3CR3T_K3Y",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const bitReducer = combineReducers({
  languages: languageReducer,
});
const persistedReducer = persistReducer(persistConfig, bitReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
