import { configureStore } from '@reduxjs/toolkit'
import signState from './signState'
import userState from './userState'


export default configureStore({
  reducer: {
   signState:signState,
   userState:userState
  },
})