import { NextFunction as Next, Request as Req, Response as Res } from "express";

export type Request = Req;
export type Response = Res;
export type NextFunction = Next;