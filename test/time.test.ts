import * as T from '../src/data/time';

test('Test time convert:', () => {
    expect(T.formatTime(0)).toBe('子时一刻');
    expect(T.formatTime(1)).toBe('子时三刻');
    expect(T.formatTime(2)).toBe('子时五刻');
    expect(T.formatTime(3)).toBe('子时七刻');
    expect(T.formatTime(4)).toBe('丑时一刻');
    expect(T.formatTime(7)).toBe('丑时七刻');
});