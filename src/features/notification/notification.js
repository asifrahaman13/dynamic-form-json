import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    // Define the initial state of the notification.
    data: {
      showData: false, // Only one state to toogle the notification.
    },
  },
  reducers: {
    toogleNotification: (state, action) => {
      // Reducer function to toogle the notification.
      const { present } = action.payload; // Destructure the object to extract the 'preset' component.
      state.data.showData = !present; // Set the vlaue of the showData
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
