import cors from 'cors';
import express from 'express';
import routes from './src/routers';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
