import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  companies : [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
      populate(state, action){
        state.companies = action.payload
      },
    },

})

// Action creators are generated for each case reducer function
export const dataActions = dataSlice.actions

export default dataSlice.reducer