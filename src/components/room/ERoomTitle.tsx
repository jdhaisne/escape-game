import style from './style.module.scss'

export const ERoomTitle : React.FunctionComponent = () => 
{
    return (
        <div className={style.container}>
            <h1>Titre de la room</h1>
        </div>
    )
}