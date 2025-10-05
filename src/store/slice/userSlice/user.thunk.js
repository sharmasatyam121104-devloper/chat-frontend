import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUserThunk = createAsyncThunk("users/fetchUserById",async ()=>{
    try {
        console.log("jii"); 
    } catch (error) {
        console.log(error);
    } 
});