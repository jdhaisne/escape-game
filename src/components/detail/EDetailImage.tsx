import './style.scss'



export const EDetailImage : React.FunctionComponent<{image : string}> = ({image}) => 
{
    return <img width={100} className={'img'} src={`${image}`} alt="preview room image" />
}