import { useEffect, useState } from "react";

// src/components/Countdown.tsx
const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="glass-container w-[70px] h-[90px] sm:w-[90px] sm:h-[100px] md:w-[122px] md:h-[117px] flex flex-col items-center justify-center rounded-md text-white">
    <span className="text-[20px] sm:text-[35px] lg:text-[48px] leading-10 font-mono font-[700]">{value}</span>
    <span className="lg:text-[20px] font-space capitalize">{label}</span>
  </div>
);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, 7, 18); // August is month 7 (0-indexed)
      
      // If August 8 has already passed this year, set it for next year
      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }

      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / 1000 / 60) % 60);
        const secs = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, mins, secs });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex space-x-4 mt-14">
      <TimeBox value={timeLeft.days.toString().padStart(2, '0')} label="days" />
      <TimeBox value={timeLeft.hours.toString().padStart(2, '0')} label="hours" />
      <TimeBox value={timeLeft.mins.toString().padStart(2, '0')} label="mins" />
      <TimeBox value={timeLeft.secs.toString().padStart(2, '0')} label="secs" />
    </div>
  );
}
