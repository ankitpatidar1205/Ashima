// src/Redux/slices/categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// ✅ Create Category
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/category", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error creating category");
    }
  }
);

// ✅ Get All Categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/category");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching categories");
    }
  }
);

// ✅ Delete Category
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/deletecategory/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error deleting category");
    }
  }
);
// ✅ Edit Category
export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async ({ id, updatedData }, { rejectWithValue }) => {
    console.log(updatedData)
    try {
      const res = await axiosInstance.put(`/editcategory/${id}`, updatedData);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating category");
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Create
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = state.categories.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Edit
.addCase(editCategory.pending, (state) => {
  state.isLoading = true;
  state.error = null;
})
.addCase(editCategory.fulfilled, (state, action) => {
  state.isLoading = false;
  state.categories = state.categories.map((category) =>
    category._id === action.payload._id ? action.payload : category
  );
})
.addCase(editCategory.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
});

  },
});

export default categorySlice.reducer;
