import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  details: {},
  isLoading: false,
  error: "",
};

export const fetchBook = createAsyncThunk("fetchBook", async () => {
  const response = await axios.get(
    "https://64542599c18adbbdfeb058b1.mockapi.io/posts"
  );
  return response.data;
});

export const bookSlice = createSlice({
  name: `books`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default bookSlice.reducer;
