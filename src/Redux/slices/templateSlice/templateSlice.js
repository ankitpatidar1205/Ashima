import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// Add Template Async Action
export const addTemplate = createAsyncThunk(
  "template/addTemplate",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/certificate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch Templates Async Action
export const fetchTemplates = createAsyncThunk(
  "template/fetchTemplates",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/certificate");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete Template Async Action
export const deleteTemplate = createAsyncThunk(
  "template/deleteTemplate",
  async (templateId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/deletecertificate/${templateId}`);
      return templateId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTemplate = createAsyncThunk(
  "template/updateTemplate",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/editcertificate/${id}`, formData,{
        headers:{
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const templateSlice = createSlice({
  name: "template",
  initialState: {
    templates: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Add Template
      .addCase(addTemplate.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.templates.push(action.payload);
      })
      .addCase(addTemplate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Templates
      .addCase(fetchTemplates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Template
      .addCase(deleteTemplate.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.templates = state.templates.filter(
          (template) => template.id !== action.payload
        );
      })
      .addCase(deleteTemplate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default templateSlice.reducer;
