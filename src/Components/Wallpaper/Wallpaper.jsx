import wallpaper from "../../assets/Images/wallpaper.jpg";
import "./wallpaper.scss";
const Wallpaper = () => {
    return (
        <div className="position-fixed top-0 bottom-0 end-0 start-0 wallpaper-container ">
            <img className="wallpaper-img" src={wallpaper} alt="wallpaper" />
        </div>
    )
}

export default Wallpaper
