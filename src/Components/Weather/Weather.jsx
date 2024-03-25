import { Card } from 'react-bootstrap'
import styles from "./Weather.module.scss";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeather from "../Svgs/DefaultWeather";
import Thermometer from "../Svgs/Thermometer";
import Time from "../Svgs/Time";
import Wind from "../Svgs/Wind";

export default function Weather() {
    return (
        <Card className={`text-center mt-3 ${styles.weather}`}>
            <Card.Body>
                <div className='d-flex justify-content-center align-items-center gap-2  h5 mb-3 '>
                    <span>Casablanca, Ma</span>
                    <span>
                        <PositionSvg color="rgba(255,255,255,0.8)" />
                    </span>
                </div>
                <div className={styles.date}>
                    <span>{new Date().toLocaleTimeString()} </span>
                    <span><Time color='#fff' /></span>
                </div>
                <div><DefaultWeather width={"250px"} height={"250px"} /></div>
            </Card.Body>
            <Card.Footer className={styles.footer + " h5"}>
                <div>
                    <p><Wind color='orange' width='35px' height='35px' /></p>
                    <p>35° C</p>
                </div>
                <div>
                    <p><Thermometer color='orange' width='35px' height='35px' /></p>
                    <p>35° C</p>
                </div>
                <div>
                    <p><DefaultWeather width='35px' height='35px' /></p>
                    <p>35° C</p>
                </div>

            </Card.Footer>
        </Card>
    )
}
