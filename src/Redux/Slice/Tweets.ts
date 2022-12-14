import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface tweetsStateInterface {
  id: Number | null,
  islogin: Boolean,
  accessToken: String | null,
}

// Define the initial state using that type
const initialState: tweetsStateInterface = {
  id: null,
  islogin: false,
  accessToken: null,
  

}

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    isLogin: state => {
      // state.islogin;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.id = action.payload
    }
  }
})

export const { isLogin ,incrementByAmount } = tweetsSlice.actions

export default tweetsSlice.reducer