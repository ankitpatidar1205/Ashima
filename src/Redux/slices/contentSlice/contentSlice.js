 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// ✅ Create Content (with formData)
export const createContent = createAsyncThunk(
  "contents/createContent",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/courseSyllabusCont", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error creating content");
    }
  }
);

// ✅ Get All Contents
export const fetchContents = createAsyncThunk(
  "contents/fetchContents",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/content");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching contents");
    }
  }
);

// ✅ Get Content By ID
export const fetchContentById = createAsyncThunk(
  "contents/fetchContentById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/courseSyllabusCont/${id}`);
      console.log(res)
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching content by ID");
    }
  }
);

// ✅ Delete Content
export const deleteContent = createAsyncThunk(
  "contents/deleteContent",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/courseSyllabusCont/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error deleting content");
    }
  }
);

// ✅ Update Content (full update)
export const updateContent = createAsyncThunk(
  "contents/updateContent",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/courseSyllabusCont/${id}`, formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating content");
    }
  }
);

// ✅ Update Content Status (PATCH method to update only status)
export const updateContentStatus = createAsyncThunk(
  "contents/updateContentStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch(
        `/publishContent/${id}`,
        { status },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating content status");
    }
  }
);

const contentsSlice = createSlice({
  name: "contents",
  initialState: {
    contents: [],
    selectedContent: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createContent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contents.push(action.payload);
      })
      .addCase(createContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch All
      .addCase(fetchContents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contents = action.payload;
      })
      .addCase(fetchContents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch By ID
      .addCase(fetchContentById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedContent = null;
      })
      .addCase(fetchContentById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedContent = action.payload;
      })
      .addCase(fetchContentById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.selectedContent = null;
      })

      // Delete
      .addCase(deleteContent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contents = state.contents.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(updateContent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateContent.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.contents.findIndex((content) => content.id === action.payload.id);
        if (index !== -1) {
          state.contents[index] = action.payload;
        }
      })
      .addCase(updateContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Status
      .addCase(updateContentStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateContentStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.contents.findIndex((content) => content.id === action.payload.id);
        if (index !== -1) {
          state.contents[index] = action.payload;
        }
      })
      .addCase(updateContentStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default contentsSlice.reducer;
