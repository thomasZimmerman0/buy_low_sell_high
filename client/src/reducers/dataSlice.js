import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  companies : [],
  // companiesWithPercents:[],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
      populate(state, action){
        state.companies = action.payload
      },
      // populatePercents(state, action){
      //   state.companiesWithPercents = action.payload
      // }
    },

})

// Action creators are generated for each case reducer function
export const dataActions = dataSlice.actions

export default dataSlice.reducer