import { configureStore } from '@reduxjs/toolkit'
import  editorSlice  from '../features/editor/editor'
import  notificationSlice  from '../features/notification/notification'

export default configureStore({
  reducer: {
    editor: editorSlice,
    notification:notificationSlice
  },
})