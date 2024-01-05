import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  LoggedIn: false,
  Name:'',
  Email:''
}

export const isLoggedInSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LogIn: (state) => {
      state.LoggedIn = true
    },
    LogOut: (state) => {
      state.LoggedIn = false
    },
    setName: (state,action) => {
      state.Name = action.payload
    },
    setEmail: (state,action)=>{
      state.Email = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { LogIn, LogOut,setName,setEmail} = isLoggedInSlice.actions

export default isLoggedInSlice.reducer