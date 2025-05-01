import { configureStore } from '@reduxjs/toolkit';
import StudentReducer from './slices/StudentSlice/StudentSlice';
import instructorReducer from './slices/InstructorSlice/InstructorSlice';
import courseReducer from './slices/CourseSlice/CourseSlice';
import productReducer from './slices/DigitalProductSlice/DigitalProductSlice';
import categorySlice from './slices/categorySlice/categorySlice'
export const store = configureStore({
  reducer: {
    Student:StudentReducer,
    instructors:instructorReducer,
    courses:courseReducer,
    products:productReducer,
    categories:categorySlice
  },
})
