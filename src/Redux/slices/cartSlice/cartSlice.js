 // src/Redux/slices/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// ✅ Add Item to Cart
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (itemData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/cart/add", itemData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error adding item to cart");
    }
  }
);

// ✅ Fetch All Cart Items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/cart");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching cart items");
    }
  }
);

// ✅ Fetch Single Cart Item by ID
export const fetchCartItemById = createAsyncThunk(
  "cart/fetchCartItemById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/cart/${id}`);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching cart item by ID");
    }
  }
);

// ✅ Delete Cart Item
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/cart/remove/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error deleting cart item");
    }
  }
);

// ✅ Update Cart Item
export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/cart/${id}`, updatedData);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating cart item");
    }
  }
);
export const buyItem = createAsyncThunk(
  "/buy",
  async (purchaseData, { rejectWithValue }) => {
    try {
      // Adjust endpoint and method as per your API spec
      const res = await axiosInstance.post("/buy", purchaseData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error buying item");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    selectedItem: null,
    isLoading: false,
    error: null,
    purchaseSuccess: false, // new state to track buy status
  },
  reducers: {
    clearCart(state) {
      state.items = [];
      state.selectedItem = null;
      state.error = null;
      state.isLoading = false;
       state.purchaseSuccess = false;
    },
     clearPurchaseSuccess(state) {
      state.purchaseSuccess = false;
    },
  },
  
  extraReducers: (builder) => {
    builder
      // Add Item
      .addCase(addItemToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch All Items
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch Item by ID
      .addCase(fetchCartItemById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItemById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchCartItemById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete Item
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Item
      .addCase(updateCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      .addCase(buyItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.purchaseSuccess = false;
      })
      .addCase(buyItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.purchaseSuccess = true;
        // Optionally clear the cart or update state as needed
        // state.items = []; 
      })
      .addCase(buyItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.purchaseSuccess = false;
      });
      ;
      
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;


