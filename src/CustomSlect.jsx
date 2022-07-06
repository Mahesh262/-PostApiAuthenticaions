import { ErrorMessage,useField } from 'formik'
import React from 'react'

const CustomSlect = ({label,...props}) => {
    const [field,meta]= useField(props)

  return (
    <>
    <label htmlFor={field.name}>{label}</label>
    <select
    className={`form-control shadow-none ${meta.touched && meta.error ? "input-error":"is-valid"}`}
    {...field}{...props}/>
      <ErrorMessage component='div' name={field.name} style ={{color:"red"}}/>
    </>
  )
}

export default CustomSlect