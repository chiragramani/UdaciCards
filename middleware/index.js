import { applyMiddleware } from "redux";
import Logger from "./logger";

export default applyMiddleware(Logger);
