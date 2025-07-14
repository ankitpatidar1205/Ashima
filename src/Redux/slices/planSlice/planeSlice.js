import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
// ✅ Create a Plan (with formData)
export const createPlan = createAsyncThunk(
  "plans/createPlan",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/plan", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error creating plan");
    }
  }
);

// ✅ Get All Plans
export const fetchPlans = createAsyncThunk(
  "plans/fetchPlans",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/plan");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching plans");
    }
  }
);

// ✅ Get All Plans
export const fetchPlanEnquiry = createAsyncThunk(
  "plans/fetchPlanEnquiry",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/planenquiry");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching plans");
    }
  }
);

export const createPlanEnquiry = createAsyncThunk(
  "plans/createPlanEnquiry",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/planenquiry", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error creating plan");
    }
  }
);

// ✅ Delete Plan
export const deletePlan = createAsyncThunk(
  "plans/deletePlan",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/plan/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error deleting plan");
    }
  }
);

// ✅ Update Plan (full update)
export const updatePlan = createAsyncThunk(
  "plans/updatePlan",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/plan/${id}`, formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating plan");
    }
  }
);

// ✅ Update Plan Status (PATCH method to update only status)
export const updatePlanStatus = createAsyncThunk(
  "plans/updatePlanStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch(
        `/publishPlan/${id}`,
        { status },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating plan status");
    }
  }
);

const plansSlice = createSlice({
  name: "plans",
  initialState: {
    plans: [],
    plansenquiry: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createPlan.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plans.push(action.payload);
      })
      .addCase(createPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(createPlanEnquiry.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPlanEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plansenquiry.push(action.payload);
      })
      .addCase(createPlanEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch
      .addCase(fetchPlans.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plans = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch
      .addCase(fetchPlanEnquiry.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPlanEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plansenquiry = action.payload;
      })
      .addCase(fetchPlanEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deletePlan.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plans = state.plans.filter((p) => p.id !== action.payload);
      })
      .addCase(deletePlan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update (full)
      .addCase(updatePlan.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePlan.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.plans.findIndex((plan) => plan.id === action.payload.id);
        if (index !== -1) {
          state.plans[index] = action.payload;
        }
      })
      .addCase(updatePlan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Status (patch)
      .addCase(updatePlanStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePlanStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.plans.findIndex((plan) => plan.id === action.payload.id);
        if (index !== -1) {
          state.plans[index] = action.payload;
        }
      })
      .addCase(updatePlanStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default plansSlice.reducer;
