// src/Redux/slices/courseSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// ✅ Create a Course (with formData)
export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (formData, { rejectWithValue }) => {
    console.log("formData", formData);
    try {
      const res = await axiosInstance.post("/course", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data.data)
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error creating course");
    }
  }
);

// ✅ Get All Courses
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/course");
      console.log("Get All Courses",res.data.data)
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching courses");
    }
  }
);

// ✅ Delete Course
export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/deletecourse/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error deleting course");
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Create
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = state.courses.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;
