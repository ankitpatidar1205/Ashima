import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

// ✅ Create Quiz (with formData)
export const createQuiz = createAsyncThunk(
  "quizzes/createQuiz",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/Ai/create", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error creating quiz");
    }
  }
);

// ✅ Fetch All Quizzes
export const fetchQuizzes = createAsyncThunk(
  "quizzes/fetchQuizzes",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/quiz");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching quizzes");
    }
  }
);

// ✅ Fetch Quiz by ID
export const fetchQuizById = createAsyncThunk(
  "quizzes/fetchQuizById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/Ai/getQuiz/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching quiz by ID");
    }
  }
);

// ✅ Delete Quiz
export const deleteQuiz = createAsyncThunk(
  "quizzes/deleteQuiz",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/quiz/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error deleting quiz");
    }
  }
);

// ✅ Update Quiz (full update)
export const updateQuiz = createAsyncThunk(
  "quizzes/updateQuiz",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/quiz/${id}`, formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating quiz");
    }
  }
);

// ✅ Update Quiz Status (PATCH)
export const updateQuizStatus = createAsyncThunk(
  "quizzes/updateQuizStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch(
        `/publishQuiz/${id}`,
        { status },
        { headers: { "Content-Type": "application/json" } }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating quiz status");
    }
  }
);

const quizSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: [],
    selectedQuiz: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuiz.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quizzes.push(action.payload);
      })
      .addCase(createQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchQuizzes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quizzes = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchQuizById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedQuiz = null;
      })
      .addCase(fetchQuizById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedQuiz = action.payload;
      })
      .addCase(fetchQuizById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.selectedQuiz = null;
      })

      .addCase(deleteQuiz.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quizzes = state.quizzes.filter((q) => q.id !== action.payload);
      })
      .addCase(deleteQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateQuiz.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.quizzes.findIndex((q) => q.id === action.payload.id);
        if (index !== -1) {
          state.quizzes[index] = action.payload;
        }
      })
      .addCase(updateQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateQuizStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateQuizStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.quizzes.findIndex((q) => q.id === action.payload.id);
        if (index !== -1) {
          state.quizzes[index] = action.payload;
        }
      })
      .addCase(updateQuizStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default quizSlice.reducer;
