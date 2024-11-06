// src/routes/fileUploadRoutes.ts

import { Router } from 'express';
import FileUploadController from '../controllers/FileUploadController';
import upload from '../middlewares/FileUploadMiddleware';

const router = Router();

router.post('/upload', upload, FileUploadController.uploadFile);

export default router;