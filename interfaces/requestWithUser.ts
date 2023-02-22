import { Request } from "express";
import User from "../entity/user";
// import URLParams from "./urlparams.interface";

export default interface RequestWithUser extends Request {
  // user: User;
  user: any;
  startTime?: number;
  userAgent?: {[key: string]: any};
  // searchParams?: URLParams; // TODO: perhaps change to Dto and add validation
}
