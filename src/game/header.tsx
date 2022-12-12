import { IDate } from "./models.typed";
import { convertDays, formatTime } from "./timeFormatter";

interface Props {
  time: number;
  step: number;
  moment: number;
  momentOverlay?: string;
  days: IDate;
  daysOverlay?: string;
}

function Header({
  time, step,
  moment, momentOverlay, days, daysOverlay
}: Props) {
  return (<div className="w-full
   px-8 py-2
   flex justify-between
   border border-solid
  ">
    <span>{daysOverlay ?? convertDays(days)}</span>
    <span>{momentOverlay ?? formatTime(moment)}</span>
    <span>{formatHMS(time)}</span>
  </div>)
}

function formatHMS(t: number) {
  const s = t % 60;
  const m = Math.floor(t % 3600 / 60);
  const h = Math.floor(t / 3600);
  return `${h > 0 ? h + ':' : ''}${m}:${s}`;
}

export default Header;