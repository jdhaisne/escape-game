import { useState } from "react"

export const ELogin : React.FunctionComponent = () => 
{
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => 
    {
        setName(e.currentTarget.value);
    }

    const handleChangePassword = async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        console.log(name, password)
    }   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeName} type="text"  placeholder="name" value={name}/>
                <input onChange={handleChangePassword} type="text" placeholder="password" value={password}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}