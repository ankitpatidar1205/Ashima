import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axiosInstance';

// Create Admin
export const createAdmin = createAsyncThunk(
  'admins/create',
  async (adminData, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/admin/register', adminData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to create admin'
      );
    }
  }
);

// Get All Admins
export const getAdmins = createAsyncThunk(
  'admins/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/admin/getAll');
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch admins'
      );
    }
  }
);

// Delete Admin
export const deleteAdmin = createAsyncThunk(
  'admins/delete',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/deleteadmin/${id}`);
      return { id, message: response.data.message };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to delete admin'
      );
    }
  }
);

// Update admin status
export const updateAdminStatus = createAsyncThunk(
  'admins/updateStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/adminStatus/${id}`, {
        is_active: status,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update Admin
export const updateAdmin = createAsyncThunk(
  'admins/update',
  async (updatedAdmin, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/editadmin/${updatedAdmin.id}`,
        updatedAdmin,
        {
          headers: {
            'Content-Type': 'application/json',
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
const AdminSlice = createSlice({
  name: 'admins',
  initialState: {
    loading: false,
    success: false,
    error: null,
    Admin: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createAdmin.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.Admin.push(action.payload);
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Get
      .addCase(getAdmins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.Admin = action.payload;
      })
      .addCase(getAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.Admin = state.Admin.filter(
          (admin) => admin.id !== action.payload.id
        );
      })
      .addCase(deleteAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Status
      .addCase(updateAdminStatus.fulfilled, (state, action) => {
        state.Admin = state.Admin.map((admin) =>
          admin.id === action.payload.id
            ? { ...admin, is_active: action.payload.is_active }
            : admin
        );
      })
      .addCase(updateAdminStatus.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Update Admin
      .addCase(updateAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        state.loading = false;
        const updatedIndex = state.Admin.findIndex(
          (admin) => admin.id === action.payload.data.id
        );
        if (updatedIndex !== -1) {
          state.Admin[updatedIndex] = action.payload.data;
        }
      })
      .addCase(updateAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AdminSlice.reducer;
