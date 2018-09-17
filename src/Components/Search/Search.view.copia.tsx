import * as React from 'react';
import { Formik } from 'formik';
import getData from './Search.presenter';
import styled from 'styled-components';



const Input = styled.input`
    padding: 10px;
    width: 200px;
    outline: none;
    margin-top: 30px;
    margin-left: 40%;
    background-color:rgba(220, 248, 198, 0.5);
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: none;
    font-size: 30px;
`
const Button = styled.button`
    padding: 10px;  
    outline: none;
    background-color:rgba(220, 248, 198, 0.5);
    color: rgba(220, 248, 198, 1);
    border: none;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: none;
    border-top-right-radius: 10px;
    border-top-left-radius: none;
    font-size: 30px;
`

export default class Search extends React.Component<any> {
  state = {
    dataResults: []
  }

  handleChange = (event: any) => {
    // let keyWords = this.props.values.wordsInputs !== undefined ? this.props.values.wordsInputs.replace(" ","+") : ""
    getData(event.target.value.replace(" ","+")).then((response) => {this.setState({dataResults: response})})
  }

  SignUpForm =  (props:any) => {
    const {
      isSubmitting,
      handleSubmit,
    } = props
    return (
        <div>
              <Input
                name="wordsInputs"
                type="wordsInputs"
                onChange={this.handleChange}
              />
              <Button onClick={handleSubmit} type={"submit"}>
              {isSubmitting ? '>' : '>'}
              </Button>
        </div>
      )

  }
  render(){
    console.log(this.state.dataResults)
    return (
      <Formik
        initialValues={""}
        onSubmit={(values: any) => console.log('values: ',values)}
        render={this.SignUpForm}
      />
    )
  }
}

