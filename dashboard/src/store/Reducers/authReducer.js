import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export  const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info) =>{
        console.log("got from  reducer");
        console.log(info);
    }
)

export  const authReducer = createSlice({
    name:'auth',
    initialState:{
        successMessage: '',
        errorMessage: '',
        loader: '',
        userInfo: ''
    }
    ,
    reducers:
    {

    },
    extraReducers:()=>{

    }
})

export default authReducer.reducer