import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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

export const addNewBook = createAsyncThunk("users/addNewBook", async (body) => {
  try {
    const response = await axios.post(
      `https://64542599c18adbbdfeb058b1.mockapi.io/posts`,
      body
    );
    toast.success("Book added successfully");
    return response.data;
  } catch (error) {
    console.error("Error adding new book: ", error.message);
    throw error;
  }
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
    builder.addCase(addNewBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewBook.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addNewBook.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default bookSlice.reducer;
