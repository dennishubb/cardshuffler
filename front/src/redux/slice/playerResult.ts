import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerResult: {} as {[key: string]: string[]}
}

// export const parsePlayerResult = () => {
//   const response = await fetch('https://api.example.com/users')
//   if (!response.ok) {
//     throw new Error('Failed to fetch users')
//   }
//   const data = await response.json()
//   return data
// }

const playerResult = createSlice({
  name: 'playerResult',
  initialState: initialState,
  reducers: {
    setPlayerResult: (state, action) => {
      state.playerResult = action.payload;
    }
  }
})
export const { setPlayerResult } = playerResult.actions
export default playerResult.reducer