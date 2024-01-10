import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import formJson from "../../static/formJson";

const Sample = () => {
  const [value, setValue] = useState(JSON.stringify(formJson, null, 2)); // Initialize with string representation

  useEffect(() => {
    // No need to setJsonInput(formJson) here
    setValue(JSON.stringify(formJson, null, 2)); // Update the editor value with string representation
  }, []);

  return (
    <>
      <Editor height="85vh" width={`100%`} language={"json"} value={value} theme="vs-dark" defaultValue="// some comment" />
    </>
  );
};

export default Sample;
