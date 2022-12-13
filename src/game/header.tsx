import { IDate } from "./models.typed";
import { convertDays, formatTime } from "./timeFormatter";

interface Props {
  time: number;
  step: number;
  moment: number;
  momentOverlay?: string;
  days: IDate;
  daysOverlay?: string;
  pause: boolean;
  toggle(): void;
}

function Header(props: Props) {
  const {
    time, step,
    moment, momentOverlay, days, daysOverlay,
    pause, toggle
  } = props;
  return (<div className="w-full
   px-8 py-2
   flex justify-between
   border border-solid
  ">
    <span>{daysOverlay ?? convertDays(days)}</span>
    <span>{momentOverlay ?? formatTime(moment)}</span>
    <span>
      {formatHMS(time)}
      <button className="cursor-pointer ml-2"
        onClick={toggle}>{pause ? '🔄' : '⏸'}
      </button>
    </span>
  </div>)
}

function formatHMS(t: number) {
  const s = t % 60;
  const m = Math.floor(t % 3600 / 60);
  const h = Math.floor(t / 3600);
  return `${h > 0 ? h + ':' : ''}${m}:${s.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  })}`;
}

export default Header;