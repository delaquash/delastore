interface AppError extends Error {
  status?: number;
}

const errorHandler = (message: string, status: number) => {
  const err = new Error(message) as AppError;
  err.status = status;
  return err;
};

export default errorHandler;
