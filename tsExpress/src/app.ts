import express = require('express');
const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

app.get('/test', (req: express.Request, res: express.Response) => {
    res.send('Test World!!!');
});

app.listen(9900, () => console.log('Running on port 9900'));
