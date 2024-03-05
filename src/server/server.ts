import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser'
import apiRouter from './routes/api'

import 'dotenv/config'

const app: Express = express();
// enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));
//handle request bodies
app.use(express.json());
//handle cookies
app.use(cookieParser());
//npm start after build - serves index.html:
if (process.env.NODE_ENV === 'production') {
    //statically serve everything in the dist folder on the route '/dist'
    app.use('/dist', express.static(path.join(__dirname, '../dist/')));
    // serve index.html on the route '/'
    app.get('/', (req: Request, res: Response) => {
        return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    })
}

//Routes
app.use('/api', apiRouter)
//Page Not Found
app.use('*', (req: Request, res: Response) => {
    res.status(404).send('Not Found');
})

//Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const defaultErr = {
        log: 'unknown error handler caught in middleware',
        status: 400,
        message: { err: 'An error occured' },
    }
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).send(errorObj.message);
})
//Listening on port 3000
app.listen(3000, () => { console.log('Listening on port 3000...')});
//export app
export default app;