import * as T from '../src/data/time';

test('Test time convert:', () => {
    expect(T.formatTime(0)).toBe('子时一刻');
});