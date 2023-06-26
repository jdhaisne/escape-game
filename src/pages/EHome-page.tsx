import { useEffect } from "react"
import { getUsers } from "../services/ESUsers"



export const EHomePage : React.FunctionComponent = () =>
{

useEffect(() => 
{
  getUsers().then((v) => 
  {
    console.log(v.name);
    console.log(v.password);
  })
}, [])

return (
    <>
      <h1>PAGE FROM HOME !</h1>
    </>
    )
}