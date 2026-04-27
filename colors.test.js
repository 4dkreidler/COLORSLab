// colors.test.js
const addColor = require('./colors-lamp/public/js/colors');

test('formats color correctly', () => {
  expect(addColor('  RED ')).toBe('red');
});