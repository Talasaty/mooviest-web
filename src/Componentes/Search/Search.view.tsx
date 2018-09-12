import * as React from 'react';
import { withFormik, FormikProps, Form, Field } from 'formik';
import styled from 'styled-components';
import getData from './Search.presenter';

const FieldStyled = styled(Field)<{word: string}>`
    background-color: #ece5dd;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: solid 2px;
    border-right: none;
    border-color: #075e54;
    font-size: 25px;
    padding: 5px;
    width: 20px;
    outline: none;
    -webkit-transition: width .2s;
    min-width: 20px;
    width: ${p => p.word === "true" ? '200px' : '20px'};

    &:hover {
        width: 200px;
    }

`

const Button = styled.button`
    border: solid 2px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: none;
    padding: 5px;
    font-size: 25px;
    color: #075e54;
    border-color: #075e54;
    background-color: #ece5dd;
    outline: none;
`

interface Values {
    keyWord: string;
}

const InnerForm = (props: FormikProps<Values>) => {
    const { touched, errors } = props
    console.log(props.values)
    
    return(
        <Form>
            <FieldStyled type="keyWord" name="keyWord" word={props.values.keyWord !== "" ? "true" : "false"}/>
            { touched.keyWord && errors.keyWord && <div>{errors.keyWord}</div> }
            <Button type="submit">
            >
            </Button>
        </Form>
    )
}

interface MyValues {
    initialKeyWord?: string;
}

const MyForm = withFormik<MyValues, Values>({
    mapPropsToValues: props => {
        return {
            keyWord: props.initialKeyWord || '',
        }
    },
    handleSubmit: values => {
        console.log('values:', values)
        console.log(getData)
    },
})(InnerForm)
    

const Search = () => {
    return (
        <div>
            <MyForm/>
        </div>
    )
}

export default Search