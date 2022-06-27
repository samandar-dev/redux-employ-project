import { configureStore } from "@reduxjs/toolkit";
import emplloyeSlice from './Splice'

const store = configureStore({
  reducer: { employ: emplloyeSlice }
})

export default store;