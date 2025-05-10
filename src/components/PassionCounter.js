import React, { useState, useEffect } from "react";

function PassionCounter({ startDate }) {
  const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate);
      const now = new Date();
      const diffTime = Math.abs(now - start);

      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
      const diffMinutes = Math.floor((diffTime / (1000 * 60)) % 60);

      setTimePassed({ days: diffDays, hours: diffHours, minutes: diffMinutes });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000 * 60); // Update every minute
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="passion-counter">
      <h1>❤️ {timePassed.days} dias, {timePassed.hours} horas e {timePassed.minutes} minutos de paixão ❤️</h1>
    </div>
  );
}

export default PassionCounter;