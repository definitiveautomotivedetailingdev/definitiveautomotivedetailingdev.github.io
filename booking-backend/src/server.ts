import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import calendarRoutes from './routes/calendarRoutes';

console.log('Starting server...');
dotenv.config();
// console.log('Environment variables loaded:', process.env.NODE_ENV);

const app = express();

app.use(cors());
app.use(express.json());

// Add logging middleware for debugging
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

app.use('/api/calendar', calendarRoutes);

app.get('/api/health', (req, res) => {
  console.log('Health check requested');
  res.status(200).json({ status: 'OK' });
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

console.log('Server setup complete');

// // Start server locally for development
// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 3001;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

export default app;