import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || "Something went wrong.",
    },
  });
};

export default errorHandler;
