import { Form } from "react-bootstrap";
import styles from "./SearchBar.module.scss";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
    const [data, setdata] = useState([]);
    const handleChange = (e) => {
        const { value } = e.target;
        if (value.trim()) {
            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value.trim()}&type=city&format=json&apiKey=c8858f0cd2bd4df7a86c896c07339545`)
                .then(response => response.json())
                .then(data => {
                    const result = data.results?.map(({ lon, lat, city, country, formatted }) => ({ lon, lat, city, country, formatted }))
                    setdata(result);
                })
        } else {
            setdata([]);
        }
    }

    const handleAutoComplete = (event, value) => {
        const { lon, lat } = value;
        if (lon && lat) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=933dca91c49596dbe20aa30c63bc577e`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <Form>
            <Form.Group>
                <Autocomplete
                    onChange={handleAutoComplete}
                    getOptionLabel={(option) => option.formatted} clearOnBlur={false}
                    className={styles.searchInput}
                    options={data}
                    renderInput={(params) => <TextField onChange={handleChange} {...params} label="Enter your city..." />}
                />
            </Form.Group>
        </Form>
    )
}
