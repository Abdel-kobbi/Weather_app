import { Card } from 'react-bootstrap'
import styles from "./Weather.module.scss";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeather from "../Svgs/DefaultWeather";
import Thermometer from "../Svgs/Thermometer";
import Time from "../Svgs/Time";
import Wind from "../Svgs/Wind";
import { useSelector } from 'react-redux';
import Speedometer from '../Svgs/Speedometer';
import Humidity from '../Svgs/Humidity';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Weather() {
    const data = useSelector(state => state.weather);
    return (
        <Card className={`text-center mt-3 ${styles.weather}`}>
            {!data.isLoaded ? <h3 className='text text-center p-3'>Please choose your city</h3> : (
                <>
                    <Card.Body>
                        <div className='d-flex justify-content-center align-items-center gap-2  h5 mb-3 '>
                            <span>{data.name}, {data.sys?.country}</span>
                            <span>
                                <PositionSvg color="rgba(255,255,255,0.8)" />
                            </span>
                        </div>
                        <div className={styles.date}>
                            <span>{days[new Date().getDay()] + ", " + new Date().toLocaleTimeString()} </span>
                            <span><Time color='#fff' /></span>
                        </div>
                        <div><DefaultWeather width={"250px"} height={"250px"} /></div>
                    </Card.Body>
                    <Card.Footer className={styles.footer + " h5"}>
                        <div title='Speed'>
                            <p><Wind color='orange' width='40px' height='40px' /></p>
                            <p>{data.wind.speed} m/s</p>
                        </div>
                        <div title='Temperature'>
                            <p><Thermometer color='orange' width='35px' height='35px' /></p>
                            <p>{data.main.feels_like}° C</p>
                        </div>
                        <div title='Temperature max'>
                            <p><Thermometer color='orange' width='35px' height='35px' /></p>
                            <p>{data.main.temp_max}° C</p>
                        </div>
                        <div title='Temperature min'>
                            <p><Thermometer color='orange' width='35px' height='35px' /></p>
                            <p>{data.main.temp_min}° C</p>
                        </div>
                        <div title='Pressure'>
                            <p><Speedometer color='orange' width='35px' height='35px' /></p>
                            <p>{data.main.pressure}</p>
                        </div>
                        <div title='Humidity'>
                            <p><Humidity color='orange' width='35px' height='35px' /></p>
                            <p>{data.main.humidity}</p>
                        </div>
                    </Card.Footer>
                </>
            )}
        </Card>
    )
}
