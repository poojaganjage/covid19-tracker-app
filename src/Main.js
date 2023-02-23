import React, {useState, useEffect} from 'react';

function Main() {
  const [active, setActive] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [deltaconfirmed, setDeltaconfirmed] = useState(null);
  const [deltadeaths, setDeltadeaths] = useState(null);
  const [deltarecovered, setDeltarecovered] = useState(null);
  const [time, setTime] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const getCovidData = async() => {
    try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const data = await res.json(); // Return promises/data.
        setActive(data.statewise[0].active);
        setConfirmed(data.statewise[0].confirmed);
        setDeaths(data.statewise[0].deaths);
        setDeltaconfirmed(data.statewise[0].deltaconfirmed);
        setDeltadeaths(data.statewise[0].deltadeaths);
        setDeltarecovered(data.statewise[0].deltarecovered);
        setTime(data.statewise[0].lastupdatedtime);
        setRecovered(data.statewise[0].recovered);
    } catch(error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className='main'>
        <div className='active'>
            <h1>Total Active Cases</h1>
            <h1>{active}</h1>
        </div>
        <div className='confirmed'>
            <h1>Total Confirmed Cases</h1>
            <h1>{confirmed}</h1>
        </div>
        <div className='deaths'>
            <h1>Total Deaths Cases</h1>
            <h1>{deaths}</h1>
        </div>
        <div className='deltaconfirmed'>
            <h1>Total Delta Confirmed Cases</h1>
            <h1>{deltaconfirmed}</h1>
        </div>
        <div className='deltadeaths'>
            <h1>Total Delta Deaths Cases</h1>
            <h1>{deltadeaths}</h1>
        </div>
        <div className='deltarecovered'>
            <h1>Total Delta Recovered Cases</h1>
            <h1>{deltarecovered}</h1>
        </div>
        <div className='time'>
            <h1>Last Updated Time</h1>
            <h1>{time}</h1>
        </div>
        <div className='recovered'>
            <h1>Recovered Cases</h1>
            <h1>{recovered}</h1>
        </div>
    </div>
  );
}
export default Main;
