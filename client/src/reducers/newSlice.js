import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  company : [],
}


export const newSlice = createSlice({
  name: 'data1',
  initialState,
  reducers: {
      setCompany(state, action){
        state.company = action.payload
      },
    },

})

// Action creators are generated for each case reducer function
export const newSliceActions = newSlice.actions

export default newSlice.reducer