import style from './style.module.scss'


export const ERoomImage = () => 
{
    return (
        <div className={`container ${style.img_wrapper}`}>
            <img width={100} className={style.img} src='https://images.rtl.fr/~c/795v350/rtl/www/1342307-escape-game.jpg' alt="preview room image" />
        </div>
    )
}