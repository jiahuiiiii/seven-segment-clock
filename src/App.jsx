import React, { useState, useEffect } from "react";
import moment from "moment";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full h-screen bg-amber-100 flex justify-center items-center">
      <div className="text-9xl font-bold italic">
        {moment(time).format("HH:mm:ss")}
      </div>
    </div>
  );
}

export default App;
