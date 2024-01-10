import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice({
  name: "editor",
  initialState: {
    data: {
      value: "",
      wrongFormat: true,
    },
  },
  reducers: {
    handleEditorValue: (state, action) => {
      try {
        const values = JSON.parse(action.payload);
        // console.log("The values is:,",values)
        state.data.value = values;
        //   JSON.parse(values);
        state.data.wrongFormat = false;
        // You can use 'parsedJson' directly if needed
      } catch (err) {
        state.data.wrongFormat = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleEditorValue } = editorSlice.actions;

export default editorSlice.reducer;
