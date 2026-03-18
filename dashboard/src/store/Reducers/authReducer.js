import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info,{rejectWithValue,fulfillWithValue}) => {
    console.log("got from  reducer");
    console.log(info);

    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });

     // console.log(data);
     return fulfillWithValue(data);
    } catch (error) {
      //console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
  
    clearMessages: (state,_)=>{
      state.errorMessage = "";
      state.successMessage = "";
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(admin_login.pending, (state, { payload }) => {
      state.loader = true;
    })
    .addCase(admin_login.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    })
    .addCase(admin_login.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
    });
  },
});
export const {clearMessages} = authReducer.actions;
export default authReducer.reducer;
