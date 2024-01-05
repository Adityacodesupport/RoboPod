import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/User/userSlice'
import { persistStore,persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//used To Configure Storage Of Data On Local Storage
const auth_config = {
  key:'auth_user',
  storage
}

//Creates a persist reducer that stores the state in local storage
const persistUserReduce = persistReducer(auth_config,userReducer)


//Add the Reducers Here and export the normal store
export const store = configureStore({
  reducer: {
    user:persistUserReduce
  },
})

// Add the Persist reducer an create the persist store that stores data on local storage
export const persistUserStore = persistStore(store)