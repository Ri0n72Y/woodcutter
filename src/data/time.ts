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
    const h = Math.round(num / 8);
    const k = num % 8;
    return sc(dizhi[h], time[k]);
}

const sc = (h: string, k: string) => `${h}时${k}刻`;

export function convertDays(d: number, offset?: number): string {
    return "";
}

const dizhi = "子丑寅卯辰巳午未申酉戌亥"; // 地支
const time = "〇一二三四五六七八九"; // 刻、日期
const tens = "十廿卅"; // 满十位
