import 'reflect-metadata';
import express from 'express';
import { registerUserModule } from './modules/users/user.module';
import { registerRoutes } from './routes';

const app = express();
app.use(express.json());

registerUserModule();
registerRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
