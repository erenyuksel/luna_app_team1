import { configureStore } from '@reduxjs/toolkit'
import listFilter from './slices/listFilter'
import loggedInUser from './slices/loggedInUser'

export default configureStore({
  reducer: {
    loggedInUser: loggedInUser,
    listFilter: listFilter,
  },
},)
