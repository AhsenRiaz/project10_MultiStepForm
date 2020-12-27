import React from 'react'
import {Formik , Form, Field, ErrorMessage} from "formik"
import {PersonalInfo_type} from "../interface/PersonalInfo_interface"
import * as yup from "yup"
import { Button , TextField  } from '@material-ui/core'

type Props = {
    submit : React.Dispatch<React.SetStateAction<number>>
    setFormValues : React.Dispatch<React.SetStateAction<{}>>
    preValue : any
}



const PersonalInfo:React.FC<Props> = ({submit , setFormValues , preValue}) => {
    return (
        <div className = "PersonalInfo_wrapper" >
           <Formik
           initialValues = {preValue}
           onSubmit = {(values:PersonalInfo_type) => {
               submit(1)
               setFormValues(values)
           }}
           validationSchema = {yup.object({
               firstName : yup.string().required("Required").min(5 , "Minimum 5 characters").max(10 , "Maximum 10 characters"),
               lastName :  yup.string().required("Required").min(5 , "Minimum 5 characters").max(10 , "Maximum 10 characters"),
               fatherName : yup.string().required("Required").min(5 , "Minimum 5 characters").max(10 , "Maximum 10 characters"),
               cnic : yup.string().required("Required").min(13 , "Minimum characters 13").max(13 , "Maximum characters 13"),
               age : yup.number().required("Required").min(18 , "Minimum age 18").max(50 , "Maximum age 50")
           })}
           
           >
            {(formik) => {
              return (
                <Form className = "PersonalForm_form" autoComplete = "off" >
                <Field name = "firstName" as = {TextField} color = "primary" variant = "outlined" label = "FirstName"   />
                <ErrorMessage name = "firstName" render = {(msg) => {return (
                        <p>{msg}</p> 
                )}} />

                <Field name = "lastName" as = {TextField} color = "primary" variant = "outlined"  label = "LastName" />
                <ErrorMessage name = "lastName" render = {(msg) => {return (
                    <div>
                        <p>{msg}</p>
                        
                    </div>
                )}} />

                <Field name = "fatherName" as = {TextField} color = "primary" variant = "outlined"  label = "Father Name" />
                <ErrorMessage name = "fatherName"  render = {(msg) => {return (
                    <div>
                        <p>{msg}</p>
                        
                    </div>
                )}}/>

                <Field name = "cnic" as = {TextField} color = "primary" variant = "outlined" label = "CNIC"  />
                <ErrorMessage name = "cnic" render = {(msg) => {return (
                    <div>
                        <p>{msg}</p>

                      </div>
                )}} />

                <Field name = "age" as = {TextField} color = "primary" variant = "outlined" label = "Age"  />
                <ErrorMessage name = "age"  render = {(msg) => {return (
                    <div>
                        <p>{msg}</p>
                          
                    </div>
                )}}/>
                
                <Button type = "submit" disabled = {!formik.dirty || !formik.isValid} color = "primary" variant = "outlined" >Submit</Button>
            </Form>
              )
            }}
           </Formik>
        </div>
    )
}

export default PersonalInfo
