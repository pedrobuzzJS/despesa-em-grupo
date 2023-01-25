import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import Routes from "./routes/index.routes";

const app = express();

app.use(
    cors({
        origin: '*'
    })
);

app.use((request: Request, response: Response, next: NextFunction) => {
    response.header(
        "Access-Control-Allow-Origin",
        "*");
    next();
});

app.use(
    express.json({
        type: ['application/json', 'text/plain'],
        }
    )
);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        return response.json({
            status: response.status(500),
            message: err.message,
        });
    }
);
    
app.use(Routes);

export { app };


export default app;

