import { createSlice } from '@reduxjs/toolkit';

const initialState = { ticket: [] };

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    createTicket: (state, { payload }) => {
      state.ticket = [...state.ticket, payload];
    },
  },
});

export const { createTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
