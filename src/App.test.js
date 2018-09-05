import { add } from './App';

test('add', () => {
    const value = add(1, 2);
    const value2 = add(5, 7);
    expect(value).toBe(3);
    expect(value2).toBe(12);
});