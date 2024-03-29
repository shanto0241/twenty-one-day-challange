import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterslice.actions;
export default counterslice.reducer;
