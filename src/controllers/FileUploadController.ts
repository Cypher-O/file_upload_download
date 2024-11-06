// src/controllers/FileUploadController.ts

import { Request, Response } from 'express';
import FileUploadService from '../services/FileUploadService';
import { generateApiResponse, APIResponse } from '../utils/ApiResponse';

class FileUploadController {
  async uploadFile(req: Request, res: Response): Promise<void> {
    try {
      const filePath = await FileUploadService.uploadFile(req);
      const response: APIResponse = generateApiResponse(0, 'success', 'File uploaded successfully', { filePath });
      res.json(response);
    } catch (error) {
      const response: APIResponse = generateApiResponse(1, 'error', 'File upload failed');
      res.status(500).json(response);
    }
  }
}

export default new FileUploadController();