import React, { useEffect, useState } from "react";
// import DynamicForm from './components/Form/DynamicForm';
import styled from "styled-components";
import DynamicForm from "./components/Form";
import { sampleFormConfig } from "./constants/formConfig.constants";

const AppContainer = styled.div`
  padding: 2rem;
  display: flex;
  column-gap: 2rem;
`;

const ResultContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;

  pre {
    margin: 0;
    white-space: pre-wrap;
  }
`;

const DebugContainer = styled.div`
  flex: 1;
`;

function App() {
  const [formResult, setFormResult] = useState(null);
  const [formConfig,setConfig]=useState(sampleFormConfig);

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    setFormResult(data);
  };

  const isValidConfig=(config)=>{
    const fieldsMap={};
    config.fields.forEach(fld => {
      if(fieldsMap[fld.name]){
        alert(`${fld.name} is repeating`);
        // return false;
      }
      else fieldsMap[fld.name]=1;
    });
    return true;
  }

  useEffect(()=>{
    isValidConfig(formConfig);
  },[formConfig])

  return (
    <AppContainer>
      <DynamicForm formConfig={formConfig} onSubmit={handleSubmit} />
      <DebugContainer>
        <ResultContainer
          style={{
            maxHeight: "500px",
            overflow: "scroll",
          }}
        >
          <h3>Form Config JSON:</h3>
          <pre>{JSON.stringify(sampleFormConfig, null, 2)}</pre>
        </ResultContainer>
        <ResultContainer>
          <h3>Form Submission Result:</h3>
          <pre>
            {formResult
              ? JSON.stringify(formResult, null, 2)
              : "Submit the form to see data here"}
          </pre>
        </ResultContainer>
      </DebugContainer>
    </AppContainer>
  );
}

export default App;
