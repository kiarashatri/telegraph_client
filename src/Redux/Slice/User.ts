import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface userStateInterface {
  id: Number | null,
  islogin: Boolean,
  accessToken: String | null,
}

// Define the initial state using that type
const initialState: userStateInterface = {
  id: null,
  islogin: false,
  accessToken: null,
  

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLogin: state => {
      state.islogin;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    }
  }
})

export const { isLogin ,incrementByAmount } = userSlice.actions

export default userSlice.reducer