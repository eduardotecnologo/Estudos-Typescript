import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();
app.use(cors());
app.use(router);

// function getUsername() {
//   return 'EduardoDeveloper';
// }

// const username = getUsername();

app.listen(3000);
