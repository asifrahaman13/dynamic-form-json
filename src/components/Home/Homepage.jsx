import React, { useState } from "react";
import DynamicForm from "../DynamicForm/DynamicForm";
import Header from "../Header/Header";
import Editor from "@monaco-editor/react";
import { useSelector, useDispatch } from "react-redux";
import { handleEditorValue} from "../../features/editor/editor";

const Homepage = () => {
  const [editorValue, setEditorValue] = useState(""); // State to handle the Editor value then set the vlaue of this state to false.

  const editor = useSelector((state) => state.editor.data);
  const dispatch = useDispatch();

  const handleEditorChange = (value) => {
    try {
      dispatch(handleEditorValue(value));
      setEditorValue(value); // Update the editorValue state
      // dispatch(setEditorValue(value));
    } catch (e) {
      // Handle error if needed
      
    }
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="p-2 w-full">
            <div className="relative">
              <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
                <Editor height="85vh" width="100%" language="json" value={editorValue} theme="vs-dark" defaultValue="[{}]" onChange={handleEditorChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 min-h-screen">
          {editor.wrongFormat ? (
            <div className="flex flex-row items-center justify-center font-bold text-2xl w-1/2 text-red-300">Sorry either wrong format or it is empty</div>
          ) : (
            <DynamicForm formJson={editor.value} />
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
