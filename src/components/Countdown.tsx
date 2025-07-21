// src/components/Countdown.tsx
const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="glass-container w-[90px] h-[100px] md:w-[122px] md:h-[117px] flex flex-col items-center justify-center rounded-md text-white">
    <span className="text-[35px] lg:text-[48px] leading-10 font-mono font-[700]">{value}</span>
    <span className="lg:text-[20px] font-space capitalize">{label}</span>
  </div>
);

export default function Countdown() {
  return (
    <div className="flex space-x-4 mt-14">
      <TimeBox value="12" label="days" />
      <TimeBox value="8" label="hours" />
      <TimeBox value="30" label="mins" />
      <TimeBox value="56" label="secs" />
    </div>
  );
}
