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
      console.log(res.data.data);
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
      console.log("Get All Courses", res.data.data);
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

// ✅ Update Course (full update)
export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, formData }, { rejectWithValue }) => {
    console.log("formData");
    console.log("id", id);
    try {
      const res = await axiosInstance.put(`/editcourse/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Updated Course:", res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating course");
    }
  }
);

// ✅ Update Course Status (PATCH method to update only status)
export const publishCourse = createAsyncThunk(
  "courses/publishCourse",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      // Make PATCH request to update only the status
      const res = await axiosInstance.patch(
        `/publishCourse/${id}`,
        { status }, // Send only the status field
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Updated Course Status:", res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating course status");
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
      })

      // Update (full course update)
      .addCase(updateCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update the course in the array
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Course Status (only the status field)
      .addCase(publishCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(publishCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        // Find the course and update only its status
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(publishCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;
