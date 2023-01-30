import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileImg}>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                <img className={s.avatar} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
                <div className={s.description}>description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;