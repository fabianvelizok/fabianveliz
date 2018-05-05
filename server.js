const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send(`Hi, I am working on the site. Thank you very much for visiting me :D`);
});

app.listen(3000, () => console.log('Server is running on port 3000!'));
