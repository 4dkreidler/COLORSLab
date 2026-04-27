const axios = require('axios');

const BASE_URL = 'http://localhost:8000';

test('POST /AddColor.php returns valid JSON', async () => {
  const res = await axios.post(
    `${BASE_URL}/AddColor.php`,
    {
      color: 'green',
      userId: '1'
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );

  expect(res.status).toBe(200);
  expect(res.data).toHaveProperty('error');
});