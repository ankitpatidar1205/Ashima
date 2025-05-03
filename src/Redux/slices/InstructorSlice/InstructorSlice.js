import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// 📥 Add Instructor
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

// 📥 Get Instructor by ID
export const getInstructorById = createAsyncThunk(
  "instructors/getInstructorById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/instructor/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
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
// ✅ Update Instructor Status
export const updateInstructorStatus = createAsyncThunk(
  "instructors/updateInstructorStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
    
      const response = await axiosInstance.patch(
        `instructorStatus/${id}`,
        { is_active: status } 
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 🔥 Slice
const instructorSlice = createSlice({
  name: "instructors",
  initialState: {
    instructors: [],
    selectedInstructor: null, // Store selected instructor for detail view
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔄 Add Instructor
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

      // 📥 Get All Instructors
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

      // 📥 Get Instructor by ID
      .addCase(getInstructorById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInstructorById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedInstructor = action.payload; // Store selected instructor data
      })
      .addCase(getInstructorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🗑 Delete Instructor
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
      })

        // ✅ updateInstructorStatus
        .addCase(updateInstructorStatus.fulfilled, (state, action) => {
          const updatedInstructor = action.payload;
          const index = state.instructors.findIndex(
            (instructor) => instructor.id === updatedInstructor.id
          );
          if (index !== -1) {
            state.instructors[index] = updatedInstructor;
          }
        });
  },
});

export default instructorSlice.reducer;
