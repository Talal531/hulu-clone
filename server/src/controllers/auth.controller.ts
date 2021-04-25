import { Request, Response, NextFunction } from "express";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw Error();
    }

    res.json(req.body);
  } catch (error) {
    return next({
      status: 400,
      message: "Invalid Email or Password",
    });
  }
};

export const signup = (req: Request, res: Response, next: NextFunction) => {
  res.send("signUp");
};
