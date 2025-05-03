 // src/Redux/slices/articleSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// ✅ Create Article
export const createArticle = createAsyncThunk(
  "articles/createArticle",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/article", formData,
        {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error creating article");
    }
  }
);

// ✅ Get All Articles
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/article");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching articles");
    }
  }
);

// ✅ Delete Article
export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/deletearticle/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error deleting article");
    }
  }
);

// ✅ Edit Article
export const editArticle = createAsyncThunk(
  "articles/editArticle",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/editarticle/${id}`, updatedData);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating article");
    }
  }
);

// ✅ Publish Article
export const publishArticle = createAsyncThunk(
  "articles/publishArticle",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/publisharticle/${id}`);
      return res.data; // Assuming the API returns the updated article
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error publishing article");
    }
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles.push(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = state.articles.filter((article) => article.id !== action.payload);
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Edit
      .addCase(editArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = state.articles.map((article) =>
          article._id === action.payload._id ? action.payload : article
        );
      })
      .addCase(editArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Publish
      .addCase(publishArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(publishArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update the published article in the state
        state.articles = state.articles.map((article) =>
          article._id === action.payload._id ? action.payload : article
        );
      })
      .addCase(publishArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default articleSlice.reducer;
