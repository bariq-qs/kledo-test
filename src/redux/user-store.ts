import { createSlice } from "@reduxjs/toolkit"

export const uiStore = createSlice({
  name: 'userStore',
  initialState: {
    data: null,
    isLogin: false,
    access_token: null,
    token_type: null
  },
  reducers: {
    setDataUser(state, action) {
      state.data = action.payload
      state.token_type = action.payload.data.token_type
      state.access_token = action.payload.data.access_token
      state.isLogin = true
    },
    setDefaultDataUser(state) {
      state.data = null
      state.token_type = null
      state.access_token = null
      state.isLogin = false
    }
  },
})

export const { setDataUser, setDefaultDataUser } = uiStore.actions

export default uiStore.reducer