import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface messengesStateInterface {
  id: Number | null,
  islogin: Boolean,
  accessToken: String | null,
}

// Define the initial state using that type
const initialState: messengesStateInterface = {
  id: null,
  islogin: false,
  accessToken: null,
  

}

export const messengesSlice = createSlice({
  name: 'messenges',
  initialState,
  reducers: {
    isLogin: state => {
      // state.islogin;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    }
  }
})

export const { isLogin ,incrementByAmount } = messengesSlice.actions

export default messengesSlice.reducer