import React from 'react'
import {Form,Formik} from 'formik'
import TextFields from './TextFields'
import *as Yup from 'yup'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import CustomSlect from './CustomSlect'
const SlignUp = () => {
     const navigates = useNavigate()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
     const validates= Yup.object({
         UserName:Yup.string().max(15,"mut be inn15 charcters").required("required"),
         Contact:Yup.string().matches(phoneRegExp,"Must be a contact a number").max(10, "Numbers required").required("required"),
         Email:Yup.string().email('email is invalid').required('required'),
         Password:Yup.string().max(9,"password required in 9 words").required("required"),
         Professional:Yup.string().required("required")
     })
      const data =[];
  return (
    <>
    
    <Formik
    initialValues={{
        UserName:"",
        Contact:"",
        Email:"",
        Password:"",
        Professional:""

    }}
    validationSchema={validates}
    
    onSubmit= {(values,actions)=>{
           console.log(values)
           navigates('/SignIn')
            localStorage.setItem("userdetails",JSON.stringify([...data,values]))
          actions.resetForm();
    }}
    >
        {formik=>(

      <Form>
    <TextFields label="UserName" type="text" name="UserName" placeholder="Enter username"/>
    <TextFields label="ContactNumber" type="number" name="Contact" placeholder="Enter contact Number"/>
    <TextFields label="Email" type="email" name="Email" placeholder="Enter Email address"/>
    <TextFields label="Password" type="password" name="Password" placeholder="Enter password"/>
     <CustomSlect  label ="Professional" name="Professional" placeholder="please select">
     <option value="select">Select</option>
       
        <option value="Developer">Developer</option>
        <option value="Hr">Hr</option>
        <option value="Manager">Manager</option>
     </CustomSlect>
       <Button type="submit"> Submit</Button>
       <Button type="reset">Reset</Button>

       </Form>

        )}

    </Formik>
    
    
    <p className='mt-3'>Already Have a Account<span><NavLink to="/SignIn">SignIn</NavLink></span></p>
    
    
    
    
    
    </>
  )
}

export default SlignUp