const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const shortUrls = {}; 
// Custom hashing function
function generateHash(input) {
  let hash = 0;
  if (input.length === 0)
  return hash;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    // hash = ((hash << 5) - hash) + char;
    hash = (hash * 31) + char;
    hash = hash & hash; 
  }
  return Math.abs(hash).toString(36).slice(0, 6); 
}

app.post('/shorten', (req, res) => {
  const { url } = req.body;

  // Generate short code using the custom hashing function
  const shortCode = generateHash(url);

  shortUrls[shortCode] = url;

  res.json({ shortUrl: `http://localhost:3000/${shortCode}` });
});

app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const originalUrl = shortUrls[shortCode];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
