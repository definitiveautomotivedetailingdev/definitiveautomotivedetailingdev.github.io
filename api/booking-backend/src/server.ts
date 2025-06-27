import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import calendarRoutes from './routes/calendarRoutes';

console.log('Starting server...');
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Add logging middleware for debugging
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

// Routes
app.use('/api/calendar', calendarRoutes);

// Health check
app.get('/health', (req, res) => {
  console.log('Health check requested');
  res.status(200).json({ status: 'OK' });
});

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

console.log('Server setup complete');

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default app;