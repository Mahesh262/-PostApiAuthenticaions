import React from 'react'
 import { ErrorMessage,useField } from 'formik'

const TextFields = ({label,...props}) => {
     const [field,meta]= useField(props)
  return (
    <>
    <label htmlFor={field.name}>{label}

    </label>
      <input className={`form-control shadow-none ${meta.touched && meta.error ? "input-error":"is-valid"}`}
       autoComplete='off'
       {...field}{...props}
      />
      <ErrorMessage component='div' name={field.name} style ={{color:"red"}}/>
    
    
    </>
  )
}

export default TextFields;