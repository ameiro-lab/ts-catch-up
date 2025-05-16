import express from 'express';
import cors from 'cors';
import contactRouter from './routes/contact';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
