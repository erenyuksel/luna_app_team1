import { configureStore } from '@reduxjs/toolkit'
import listFilter from './slices/listFilter'

export default configureStore({
  reducer: {
    listFilter: listFilter,
  },
})
