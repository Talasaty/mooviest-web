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
    -webkit-transition: width .3s;
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
    dataResult: object;
    results: object;
}

interface MyValues {
    initialKeyWord?: string;
    initialDataResult?: object;
    initialResults?: object;
}

class Search extends React.Component<MyValues, Values> {

    state = {
        keyWord: "",
        initialKeyWord: "",
        dataResult: {
                        page: 0,
                        results: [],
                        total_pages: 0,
                    },
        results: {
            adult: false,
            backdrop_path: "",
            genre_ids: [],
            id: 0,
            original_language: "",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: "",
            release_date: "",
            title: "",
            video: false,
            vote_average: 0,
            vote_count: 0,
        }
    }


    InnerForm = (props: FormikProps<Values>) => {
        const { touched, errors } = props
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

    MyForm = withFormik<MyValues, Values>({
        mapPropsToValues: props => {
            return {
                keyWord: props.initialKeyWord || '',
                dataResult: props.initialDataResult || {
                                                        page: 0,
                                                        results: [],
                                                        total_pages: 0,
                                                    },
                results: props.initialResults || {
                                                        adult: false,
                                                        backdrop_path: "",
                                                        genre_ids: [],
                                                        id: 0,
                                                        original_language: "",
                                                        original_title: "",
                                                        overview: "",
                                                        popularity: 0,
                                                        poster_path: "",
                                                        release_date: "",
                                                        title: "",
                                                        video: false,
                                                        vote_average: 0,
                                                        vote_count: 0,
                                                }
            }
        },
        handleSubmit: values => {
            console.log('values:', values)
            let keyWords = values.keyWord.replace(" ","+")
            getData(keyWords).then((response) => { this.setState({dataResult: response, results: response.results})})
                     .catch((err) => {console.log('Se ha produccido el error: ',err)})
            
            
        },
    })(this.InnerForm)


    render() {
        console.log('Resutlado de la búsqueda: ',this.state.dataResult)
        console.log('Results: ', this.state.results)
        return(
            <div>
                <this.MyForm/>
            <br/>
            </div>
        )
    }
}

export default Search