const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const shortid = require('shortid'); // For generating short IDs

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'asdfg12345', 
  database: 'urlshortener', 
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;

  const shortUrl = shortid.generate();

  const sql = 'INSERT INTO urls (shortUrl, longUrl) VALUES (?, ?)';
  db.query(sql, [shortUrl, longUrl], (err, result) => {
    if (err) {
      console.error('Error inserting URL into database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ shortUrl: `http://localhost:3000/${shortUrl}` });
  });
});

app.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params;

  const sql = 'SELECT longUrl FROM urls WHERE shortUrl = ?';
  db.query(sql, [shortUrl], (err, result) => {

    if (err) {
      console.error('Error fetching URL from database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const r = result[0].longUrl;
    if (r.length === 0) {
      res.status(404).send('Short URL not found');
    } else {
      console.log(r);

      res.redirect(result[0].longUrl);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
