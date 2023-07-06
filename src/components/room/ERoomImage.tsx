import './style.scss'


export const ERoomImage : React.FunctionComponent<{image : string}> = ({image}) => 
{
    return (
        <div className={`room-detail-container img_wrapper`}>
            <img width={100} className={'img'} src={`${image}`} alt="preview room image" />
        </div>
    )
}