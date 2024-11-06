// apiResponse.ts

interface APIResponse {
    code: number;
    status: string;
    message: string;
    data: any;
  }
  
  function generateApiResponse(code: number, status: string, message: string, data: any = {}): APIResponse {
    return {
      code,
      status,
      message,
      data
    };
  }
  
  export { generateApiResponse, APIResponse };