import { configureStore } from '@reduxjs/toolkit'
import listFilter from './slices/listFilter'
import loggedInUser from './slices/loggedInUser'
import restaurantsReducer from './slices/restaurantsSlice'
import usersReducer from './slices/usersSlice'
import reviewsReducer from './slices/reviewsSlice'

export default configureStore({
  reducer: {
    loggedInUser: loggedInUser,
    listFilter: listFilter,
    restaurants: restaurantsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
  },
},)
