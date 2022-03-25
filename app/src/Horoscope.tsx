import React, {useState} from 'react';
import './App.css';
import TextBox from './TextBox';
// @ts-ignore
import {AwesomeButton} from 'react-awesome-button';
import axios from 'axios';

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    //HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [data, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(response => {
                console.log(response.data);
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            }).catch(error => {
            console.log(error);
        });
    }


    return (
        <div className="Horoscope">
            <h2 className="Horoscope-header">
                Horoscope
            </h2>
            <TextBox label={"Enter Sun Sign \xa0\xa0\xa0"} change={setSun}/>
            <TextBox label={"Enter Moon Sign"} change={setMoon}/>
            <TextBox label={"Enter Rising Sign"} change={setRising}/>
            <AwesomeButton onPress={requestHoroscope}>Submit</AwesomeButton>
            {data.map(output => <div>{output}</div>)}
        </div>
    );
}

export default Horoscope;
