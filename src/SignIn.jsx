import { Button } from '@mui/material'
import React from 'react'
 import { Formik,Form}  from 'formik'
import { useNavigate } from 'react-router'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextFields from './TextFields'
import * as Yup from 'yup'
const SignIn = () => {
const history = useNavigate();
   const validates=  Yup.object({
      email:Yup.string().email('email is invalid').required('required'),
      password:Yup.string().max(9,"password required in 9 words").required("required"),
   })
   const addData = (values)=>{
     const getuserArr = localStorage.getItem("userdetails");

         if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
             const userLogin = userdata.filter( (el,k)=>{
                  return el.Email === values.email && el.Password === values.password
             });
             if(userLogin.length === 0){
                alert("Invalid details")
             } else{
                 console.log("user login Succesfully");
                 localStorage.setItem("user_login", JSON.stringify(userLogin))
                  history('/Details')
             }
         }
   }
  return (
    <>
    <div>
        <section>
            <div className='mt-3 p-3'style={{width:"100%"}}>
                <h3 className='"text-center col-lg-6'>Sign IN</h3>
                <Formik
                initialValues={{
                  email:"",
                  password:"",
                }}
                 validationSchema={validates}
                 onSubmit={addData}
                > 
                   { formik=>(

                     <Form>
                    <TextFields label="Email" type ="email" name="email" placeholder ="enter your email"/>
                   <TextFields label ="Password" type ="password" name="password" placeholder="Enter your password"/>

                   <Button variant="secondary" className="col-lg-6"  style={{background:"rgb(65,185,127)"}} type="submit">
                  Submit
                 </Button>
                     </Form>
                   )}
                </Formik>
                 
                 <p className='mt-3'>Already Have a Account<span><>SignUp</></span></p>
            </div>
        </section>
        <ToastContainer/>
    </div>
    
    </>
  )
}

export default SignIn