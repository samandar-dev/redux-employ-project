import { createSlice } from "@reduxjs/toolkit";
import initialState from '../Object/Object'

const emplloyeSlice = createSlice({
  name: 'employ',
  initialState,
  reducers: {
    addItemsFunc(state, action) {
      let itm = {
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.email,
        number: action.payload.number,
        departament: action.payload.departament,
      }
      state.push(itm)
    },
    editFunc(state, action) {
      state.map(itm => {
        if (itm.id === action.payload.id) {
          itm.name = action.payload.name
          itm.email = action.payload.email
          itm.number = action.payload.number
          itm.departament = action.payload.departament
        }
      })
    },
    deleteFunc(state, action) {
      return state.filter((itm) => itm.id !== action.payload.id)
    },
  },
});

export const emplloyActions = emplloyeSlice.actions;

export default emplloyeSlice.reducer;