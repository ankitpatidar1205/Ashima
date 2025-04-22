import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// ========== Add Digital Product ========== 
export const addDigitalProduct = createAsyncThunk(
    "digitalProduct/addDigitalProduct",
    async (formData, thunkAPI) => {
      try {
        const response = await axiosInstance.post("/digitalProduct", formData, 
          {
            headers: {
              'Content-Type': 'multipart/form-data', 
            }
          }
        );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  

// ========== Get All Digital Products ==========
export const getAllDigitalProducts = createAsyncThunk(
  "digitalProduct/getAllDigitalProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/digitalProduct");
    //    console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ========== Delete Digital Product ==========
export const deleteDigitalProduct = createAsyncThunk(
  "digitalProduct/deleteDigitalProduct",
  async (productId, thunkAPI) => {
    try {
      await axiosInstance.delete(`/digitalProduct/${productId}`);
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ========== Slice ==========
const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add
      .addCase(addDigitalProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDigitalProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addDigitalProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get All
      .addCase(getAllDigitalProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDigitalProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllDigitalProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteDigitalProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDigitalProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(item => item.id !== action.payload);
      })
      .addCase(deleteDigitalProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
