import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../../utils/axiosInstance";
export const addInstructor = createAsyncThunk(
  "instructors/addInstructor",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/instructor", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Very important!
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


// 📥 Get All Instructors
export const getInstructors = createAsyncThunk(
  "instructors/getInstructors",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/instructor`);
      // console.log(res.data.data)
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 🗑 Delete Instructor
export const deleteInstructor = createAsyncThunk(
  "instructors/deleteInstructor",
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`deleteinstructor/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 🔥 Update Instructor
export const updateInstructor = createAsyncThunk(
  "instructors/updateInstructor",
  async (updatedInstructor, thunkAPI) => {
    try {
      const response = await axiosInstance.put(
        `/editinstructor/${updatedInstructor.id}`,
        updatedInstructor,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Adjust if needed
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 🔥 Slice
const instructorSlice = createSlice({
  name: "instructors",
  initialState: {
    instructors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔄 Add
      .addCase(addInstructor.pending, (state) => {
        state.loading = true;
      })
      .addCase(addInstructor.fulfilled, (state, action) => {
        state.loading = false;
        state.instructors.push(action.payload); // ✅ this works fine now
      })
      .addCase(addInstructor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
 
      // 📥 Get
      .addCase(getInstructors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInstructors.fulfilled, (state, action) => {
        state.loading = false;
        state.instructors = action.payload;
      })
      .addCase(getInstructors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🗑 Delete
      .addCase(deleteInstructor.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteInstructor.fulfilled, (state, action) => {
        state.loading = false;
        state.instructors = state.instructors.filter(
          (instructor) => instructor.id !== action.payload.id
        );
      })
      .addCase(deleteInstructor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

       // 🔄 Update Instructor
       .addCase(updateInstructor.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateInstructor.fulfilled, (state, action) => {
        state.loading = false;
        state.instructors = state.instructors.map((instructor) =>
          instructor.id === action.payload.id ? action.payload : instructor
        );
      })
      .addCase(updateInstructor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default instructorSlice.reducer;
