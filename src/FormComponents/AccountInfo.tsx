import React, { useState } from 'react'
import {Formik , Form, Field, ErrorMessage} from "formik";
import * as yup from "yup" 
import {Button, Container , TextField , Input} from "@material-ui/core"
import {AccountInfo_type} from '../interface/PersonalInfo_interface';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

interface Props {
    submit : React.Dispatch<React.SetStateAction<number>>
    setFormValues : React.Dispatch<React.SetStateAction<{}>>
    preValue : any
}


const AccountInfo:React.FC<Props> = ({submit , setFormValues , preValue }) => {
    const [password , setPassword] = useState<boolean>(false);
    const togglePassword = () => {
        setPassword(!password )
    }
    console.log(password)

   
    return (
        <Container maxWidth = "lg" >
            <div className="AccountInfo_wrapper">
                <Formik autoComplete = "off"
                initialValues  = {preValue}
                onSubmit = {(values:AccountInfo_type) => {  
                    submit(2)
                    setFormValues(values)
                    
                }}
                validationSchema = {yup.object({
                    userName : yup.string().required("Required").min(5, "Minimum characters 5").max(15 , "Maximum characters 15"),
                    email : yup.string().email().required("Required"),
                    password : yup.string().required("Required").min(8 , "Minimum characters 5").max(14 , "Maximum characters 14")
                })}
                >
                {(formik) => (
                    <Form  autoComplete = "off" >
                        <div className = "AccountInfo_fieldcontainer">
                            <Field className = "field" as = {TextField} variant = "outlined" name = "userName"  label = "Username" />
                            <ErrorMessage  name = "userName"  render = {(msg) => (
                                    <p >{msg}</p>
                            )} />

                            <Field  as = {TextField} variant = "outlined" name = "email" label = "Email"  />
                            <ErrorMessage  name = "email"  render = {(msg) => (
                                <p>{msg}</p>
                            )} />

                            <Field className = "password_field" type = {password ? "text" : "password"} as = {Input} variant = "outlined" name = "password" label = "password" endAdornment = {
                                <InputAdornment position = "end" >
                                   <IconButton onClick = {togglePassword} >
                                        {password ? <Visibility/> : <VisibilityOff/>}
                                   </IconButton>
                                </InputAdornment>
                            }  />
                            <ErrorMessage  name = "password"  render = {(msg) => (
                                <p>{msg}</p>
                            )} />
                    
                        </div>
                        <div className = "AccountInfo_button" >
                            <Button onClick = {() => submit(0)}  color = "primary" variant = "outlined"  >Back</Button>
                            <Button disabled = {!formik.dirty || !formik.isValid} type = "submit" color = "primary" variant = "outlined"  >Submit</Button>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </Container>
    )
}

export default AccountInfo
