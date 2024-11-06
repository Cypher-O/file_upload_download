// src/server.ts

import express from 'express';
import FileUploadRoutes from './routes/FileUploadRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/file', FileUploadRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});