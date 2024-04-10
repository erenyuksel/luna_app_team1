import { configureStore } from '@reduxjs/toolkit'
import listFilter from './slices/listFilter'
import loggedInUser from './slices/loggedInUser'
import restaurantsReducer from './slices/restaurantsSlice'

export default configureStore({
  reducer: {
    loggedInUser: loggedInUser,
    listFilter: listFilter,
    restaurants: restaurantsReducer,
  },
},)
