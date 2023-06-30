import { useState } from "react"


import style from './style.module.scss'
import { InputComponent } from "../input/EInput-component"

export const ELogin: React.FunctionComponent = () => {
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const handleChangePassword = async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, password)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={`${style.container} g-container`}>
                <div className={`${style.onglet}`}>
                    <button className={`${style.btnC}`}>Connexion</button>
                    <button className={`${style.btnI}`}>Inscription</button>
                </div>
                <InputComponent handleChange={handleChangeName} type="text" placeholder="name" value={name} />
                <InputComponent handleChange={handleChangePassword} type="text" placeholder="password" value={password} />
                <button type="submit">Login</button>
            </form>

        </>
    )
}