import './style.scss'

export const ERoomTitle : React.FunctionComponent<{title : string}> = ({title}) => 
{
    return <h1 className='ERoom-title'>{title}</h1>
}