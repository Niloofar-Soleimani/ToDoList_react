import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Form'
import FormInput from "./FormInput"
import Clock from "./Clock"


Form
FormInput
Clock;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
<Clock/>    

  <div className="wrapper">
        <h1>لیست تسک ها</h1>
        <Form />
     
      </div>


    </>

  </StrictMode>
);
