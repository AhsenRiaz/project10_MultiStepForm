import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { Typography, Container, Button } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Review_type } from "../interface/PersonalInfo_interface"
import * as yup from "yup"


const initialValue: Review_type = {
    accept: false
}

interface Props {
    submit : React.Dispatch<React.SetStateAction<number>>
}

const Review:React.FC<Props> = ({submit})  => {

    return (
        <Formik
            initialValues={initialValue}
            onSubmit={(values: Review_type) => {

                return new Promise<void>(res => {
                    setTimeout(() => {
                        res()
                        alert("Successfully Submitted")
                    }, 1000)
                })

            }}
            validationSchema={yup.object({
                accept: yup.bool().required("Check the box").oneOf([true])
            })}
        >
            {(formik) => {
                return (

                    <Container maxWidth="md" >

                        <div className="review">

                            <div className="tac">
                                <div className="review_heading">
                                    <h4>Terms and Conditions</h4>
                                </div>
                                <Typography> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti facere laudantium officia blanditiis, placeat veniam, tempora harum beatae assumenda incidunt accusamus eaque laboriosam quae quibusdam eveniet dolore laborum odit reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam non ea, ipsum vitae quos autem rerum, accusamus voluptatibus cupiditate porro nobis deserunt alias sint dignissimos ipsam atque fuga, earum maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur magni dolor doloremque distinctio! Vel obcaecati delectus doloribus corporis atque. Dolor sit a ad quos quas sequi omnis cumque odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero id delectus magnam quaerat perferendis minus illum voluptatibus aut. Eos, mollitia cum id aspernatur sit officia! Illum corrupti assumenda itaque similique? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis atque minus voluptate est. </Typography>
                                < Form >
                                    <div>
                                        <Field as={Checkbox} name="accept" />
                                        <ErrorMessage name="accept" render={(msg) => (
                                            <p>{msg}</p>
                                        )} />
                                    </div>
                                    <div className="review_button">
                                        <Button color = "primary" variant = "outlined" type="submit" disabled={!formik.dirty || !formik.isValid || formik.isSubmitting} >Submit</Button>
                                        <Button onClick = {() => submit(1)} color = "primary" variant = "outlined"  >Back</Button>
                                    </div>
                                </Form >
                            </div>

                        </div>
                    </Container>

                )
            }

            }
        </Formik>
    )
}

export default Review

