import express from 'express';

const app = express();

app.listen(8000, () => {
  console.log('server started at http://localhost:8000');
});