import app from './app.js';
import { PORT } from './config/env.config.js';
import connectDB from './config/db.config.js';

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });
