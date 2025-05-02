import React, { useState, useEffect } from "react";

function PassionCounter({ startDate }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const start = new Date(startDate);
      const today = new Date();
      const diffTime = Math.abs(today - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60 * 24); // Update daily
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="passion-counter">
      <h1>❤️ {days} dias de paixão ❤️</h1>
      <p>Desde o início do nosso amor!</p>
    </div>
  );
}

export default PassionCounter;