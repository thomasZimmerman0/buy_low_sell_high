import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  companiesWithPercents:[],
}

export const percentSlice = createSlice({
  name: 'data2',
  initialState,
  reducers: {
      populatePercents(state, action){
        state.companiesWithPercents = action.payload
      }
    },

})

// Action creators are generated for each case reducer function
export const percentActions = percentSlice.actions

export default percentSlice.reducer