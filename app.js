const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('omanko chan!'));
=======
app.get('/', (req, res) => res.send('omanko manko!'));
>>>>>>> 94b1141605cbb46a5e29b16371dc6dfeac84798a

app.listen(port);
console.log(`App running on http://localhost:${port}`);
