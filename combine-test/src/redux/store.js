import { configureStore } from '@reduxjs/toolkit';
import todoslice from './todoSlice'

export default configureStore({
  reducer: {
    todo : todoslice
  },
})