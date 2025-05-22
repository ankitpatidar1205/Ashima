import { configureStore } from '@reduxjs/toolkit';
import StudentReducer from './slices/StudentSlice/StudentSlice';
import instructorReducer from './slices/InstructorSlice/InstructorSlice';
import courseReducer from './slices/CourseSlice/CourseSlice';
import productReducer from './slices/DigitalProductSlice/DigitalProductSlice';
import categorySlice from './slices/categorySlice/categorySlice';
import templateReducer from './slices/templateSlice/templateSlice';
import articleSliceREducer from './slices/articleSlice/articleSlice'
import adminReducer from './slices/adminSlice/adminSlice'
import planReducer from './slices/planSlice/planeSlice'
import contentReducer from './slices/contentSlice/contentSlice'
import quizReducer from './slices/quizSlice/quizSlice'
export const store = configureStore({
  reducer: {
    Student:StudentReducer,
    instructors:instructorReducer,
    courses:courseReducer,
    products:productReducer,
    categories:categorySlice,
    templates:templateReducer,
    articles:articleSliceREducer,
    admins:adminReducer,
    plans:planReducer,
    content:contentReducer,
    quiz:quizReducer,
  },
})
