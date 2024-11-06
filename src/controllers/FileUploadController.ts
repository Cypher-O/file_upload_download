// src/controllers/FileUploadController.ts

import { Request, Response } from 'express';
import FileUploadService from '../services/FileUploadService';

class FileUploadController {
  async uploadFile(req: Request, res: Response): Promise<void> {
    try {
      const filePath = await FileUploadService.uploadFile(req);
      res.json({ filePath });
    } catch (error) {
      res.status(500).json({ message: 'File upload failed' });
    }
  }
}

export default new FileUploadController();