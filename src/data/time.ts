/**
 * 子时一刻-子时三刻-子时五刻-子时七刻-午时一刻...
 * 接受负数时返回特殊代码
 * @param t 时间数字
 * @returns 
 */
export const formatTime = (t: number) => convertTime(t, 1, 1);
export function convertTime(t: number, offset: number, skip: number): string {
    if (t < 0) {
        switch (t) {
            case -1: return 'ERROR!';
            case -2: return '锟斤拷�';
            default: return 'NONE';
        }
    }
    // 0 -> 子时; 1 -> 子时一刻
    const num = t * (skip + 1) + offset;
    const h = Math.floor(num / 8);
    const k = num % 8;
    return sc(dizhi[h], time[k]);
}

const sc = (h: string, k: string) => `${h}时${k}刻`;

const DAY_EACH_YEAR = 12;
export function convertDays(d: number, offset = 0): string {
    const d1 = (d % DAY_EACH_YEAR + offset) % 10;
    const d10 = Math.floor((d % DAY_EACH_YEAR + offset) / 10);
    const y1 = Math.floor(d / DAY_EACH_YEAR) % 10;
    return `${time[y1]}年${d10 > 0 ? tens[d10 - 1] : ''}${time[d1]}日`;
}

const dizhi = "子丑寅卯辰巳午未申酉戌亥"; // 地支
const time = "〇一二三四五六七八九"; // 刻、日期
const tens = "十廿卅"; // 满十位
