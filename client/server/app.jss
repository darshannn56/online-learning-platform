
js
Copy
Edit
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/client', express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/api/courses', (req, res) => {
  res.json([
    { id: 1, title: "Intro to HTML", video: "/video1.mp4" }
  ]);
});

app.listen(PORT, () => {
  console.log(Server is running at http://localhost:${PORT});
});
5️⃣ Terminal Setup
Run this inside the server folder:

bash
Copy
Edit
npm init -y
npm install express
