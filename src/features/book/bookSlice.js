import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  details: {},
  isLoading: false,
  error: "",
};

// BOOK API ISTEGI
export const fetchBook = createAsyncThunk("fetchBook", async () => {
  const response = await axios.get(
    "https://64542599c18adbbdfeb058b1.mockapi.io/posts"
  );
  return response.data;
});

// BOOK DETAY SAYFASI
export const fetchBookDetails = createAsyncThunk(
  "books/fetchBookDetails",
  async (id) => {
    const response = await axios.get(
      `https://64542599c18adbbdfeb058b1.mockapi.io/posts/${id}`
    );
    return response.data;
  }
);

// YENI KITAP EKLEME ISTEGI
export const addNewBook = createAsyncThunk("books/addNewBook", async (body) => {
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

// SILME ISTEGI
export const handleDelete = createAsyncThunk("books/deleteBook", async (id) => {
  try {
    await axios.delete(
      `https://64542599c18adbbdfeb058b1.mockapi.io/posts/${id}`
    );
    toast.error("Book deleted successfully");
    return id;
  } catch (error) {
    console.error("Error deleting user: ", error.message);
    throw error;
  }
});

// EDIT ISLEMI
export const editBook = createAsyncThunk(
  "books/editBook",
  async ({ id, body }) => {
    const response = await axios.put(
      `https://64542599c18adbbdfeb058b1.mockapi.io/posts/${id}`,
      body
    );
    return response.data;
  }
);

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
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.isLoading = true;
      state.status = "loading";
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
      state.status = "success";
    });
    builder.addCase(fetchBookDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.status = "failed";
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
    builder.addCase(handleDelete.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handleDelete.fulfilled, (state, action) => {
      state.data = state.data.filter((book) => book.id !== action.payload);
      state.isLoading = false;
    });
    builder.addCase(handleDelete.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(editBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editBook.fulfilled, (state, action) => {
      const updatedData = state.data.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
      state.data = updatedData;
      state.isLoading = false;
    });
    builder.addCase(editBook.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default bookSlice.reducer;
