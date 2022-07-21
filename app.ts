import express, { Express, Request, Response } from 'express';

import bodyParser from 'body-parser';

import films from './app/controllers/filmController';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/films', films);

app.get('/', (req:Request, res: Response) => {
    res.send('Hello world express')
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});

