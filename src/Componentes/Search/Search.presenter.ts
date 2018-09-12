import axios from 'axios'



const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data
        return persons
      })
}

export default getData

