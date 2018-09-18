import * as React from 'react';
import { Formik } from 'formik';
import getData from './Search.presenter';
import styled from 'styled-components';

const Contenedor = styled.div<{resultado: boolean}>`
    padding: 0% 0% 0% 0%;
    margin: 30px 5% 10px 5%;
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    
`

const Cards = styled.div<{img: string}>`
    border-radius: 4px;
    margin: 1px;
    height: 200px;
    width: 200px;
    background-image: url(${p => p.img});
    background-size: 200px 200px;
    
`
const InfoContainer = styled.div`
    text-align: center;
    vertical-align: middle;
    color: black;
    height:200px;
    width: 200px;
    padding: 2px 0% 0% 0%;
    margin: 0;
    opacity: 0.0;
    &:hover{
        background-color: white;
        opacity: 0.7;
        color: black;
    }

`

const Input = styled.input`
    color: #075e54;
    padding: 10px;
    outline: none;
    margin-top: 30px;
    margin-left: 50px;
    background-color:rgba(0, 0, 0, 0.0);
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: none;
    font-size: 30px;
    width: 65%;
`
const Button = styled.button`
    margin-right: 5%;
    padding: 10px;  
    outline: none;
    background-color:rgba(0, 0, 0, 0.0);
    color: rgba(0, 0, 0, 0.2);
    border: none;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: none;
    border-top-right-radius: 10px;
    border-top-left-radius: none;
    font-size: 30px;
`

export default class Search extends React.Component<any> {
  state = {
    dataResults: {results: []},
  }

  handleChange = (event: any) => {
    
    // let keyWords = this.props.values.wordsInputs !== undefined ? this.props.values.wordsInputs.replace(" ","+") : ""
    getData(event.target.value.replace(" ","+") !== "" ? event.target.value.replace(" ","+") : " ").then((response) => {this.setState({dataResults: response})})
    
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
                placeholder="'The lord of the ring '"
              />
              <Button onClick={handleSubmit} type={"submit"}>
              {isSubmitting ? '>' : '>'}
              </Button>
        </div>
      )

  }
  render(){
    //console.log(this.state.dataResults.results)
    const results = this.state.dataResults.results
    const imgBackground = "https://image.tmdb.org/t/p/w500/"
    //console.log(this.state.dataResults.results[0].title)
    // const pages = this.state.dataResults.total_pages
    // const totalResult = this.state.dataResults.total_results
    console.log(results)
    return (
        <div>
            <Formik
                initialValues={""}
                onSubmit={(values: any) => console.log('values: ',values)}
                render={this.SignUpForm}
            />
            <div>
                <Contenedor resultado={results.length > 0 ? true : false}>
                     {results.map((result: any ) =>
                     <Cards key={result.id} img={imgBackground + result.poster_path}>
                        <InfoContainer>
                        <h3>{result.title}</h3>
                        <h5>Popularity: {result.popularity}</h5>
                        <h5>Age: {result.release_date} </h5> 
                        <h5>overview:{result.overview.substr(0,70)} ...</h5>
                        </InfoContainer>
                        

                     </Cards>
                    )}
                </Contenedor>
                
            </div>
      </div>

    )
  }
}