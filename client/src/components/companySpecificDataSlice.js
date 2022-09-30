import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    company : [],
    eodData : []
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
      setEodData(state, action){
        state.company = action.payload.company
        state.eodData = action.payload
      },
    },

})

// Action creators are generated for each case reducer function
export const dataActions = dataSlice.actions

export default dataSlice.reducer