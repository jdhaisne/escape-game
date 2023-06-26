import axios from "axios"

export  const getUsers = async (): Promise<any> =>{
    const URL = `http://localhost:3000/users`;

return await axios(URL, { headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },}).then ( (response) => {
    console.log(response)
    return {
        status: response.status,
        data: response.data
    }
}).catch((error) =>{
    console.log(error)
    return {
        status: error.status,
        data: error.response
    }
})
}