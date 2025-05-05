import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axiosInstance';

// Create Student
export const createStudent = createAsyncThunk(
  'students/create',
  async (studentData, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/student', studentData);
      // console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to create student'
      );
    }
  }
);

// Get All Students
export const getStudents = createAsyncThunk(
  'students/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/student');
      // console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch students'
      );
    }
  }
);

// Delete Student
export const deleteStudent = createAsyncThunk(
  'students/delete',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/deletestudent/${id}`);
      return { id, message: response.data.message };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to delete student'
      );
    }
  }
);
// Update student status
export const updateStudentStatus = createAsyncThunk(
  "students/updateStudentStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`studentStatus/${id}`, {
        is_active: status,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (updatedStudent, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/editstudent/${updatedStudent.id}`,
        updatedStudent,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const StudentSlice = createSlice({
  name: 'students',
  initialState: {
    loading: false,
    success: false,
    error: null,
    Student: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.Student.push(action.payload);
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Get
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.Student = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.Student = state.Student.filter(
          (student) => student.id !== action.payload.id
        );
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateStudentStatus.fulfilled, (state, action) => {
        state.Student = state.Student.map((student) =>
          student.id === action.payload.id
            ? { ...student, is_active: action.payload.is_active }
            : student
        );
      })
      .addCase(updateStudentStatus.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Update Student
      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        const updatedIndex = state.students.findIndex(
          (student) => student.id === action.payload.data.id
        );
        if (updatedIndex !== -1) {
          state.Student[updatedIndex] = action.payload.data;
        }
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default StudentSlice.reducer;
