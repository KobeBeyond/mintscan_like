/* eslint-disable no-param-reassign */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: 'home'
}

export const getHomeData = createAsyncThunk('home/getData', async () => {
  const resp = await new Promise((res) => {
    setTimeout(() => {
      res({title: 'new home title'})
    }, 50)
  })
  return resp.title
})

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      state.title = action.payload
    })
  },
})

export default homeSlice.reducer
