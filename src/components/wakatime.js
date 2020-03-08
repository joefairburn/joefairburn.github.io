import React from "react"
import { useState, useEffect } from 'react';

import * as  axios from 'axios';

const WakaTime = () => {
    const [time, setTime] = useState(null);
    const apiKey = "0c75d00e-e2f6-44d1-b6ea-1183eaa39116";
    const url = "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=0c75d00e-e2f6-44d1-b6ea-1183eaa39116";

    const headers = {
            'Authorization': 'Basic ' + apiKey,
    }

    useEffect(() => {
        async function getTime() {
          if(typeof window !== null) {
            const time = await axios.get(url);
            setTime(time.data.data.human_readable_total);
          }
        }
        getTime();
     }, [])

  return (
    <div className="wakatime-weekly">
      {time != null && <p><span className="time-text">{time}</span> spent coding this week</p>}
    </div>
  )
}

export default WakaTime
