import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  term?: string
}

const initialState: FilterState = {
  term: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { handleTerm } = filterSlice.actions
export default filterSlice.reducer
