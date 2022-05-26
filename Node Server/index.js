const express = require('express');
const cors = require('cors');
const app = express();
const myPort = 9999;

app.use(cors());
app.use(express.json());

const subScribers = {}
app.get('/long-messages', (request, response) => {
    const ID = Math.ceil(Math.random() * 1000);
    subScribers[ID] = response;
})

app.post('/long-messages', (request, response) => {
    const { body } = request;
    console.log(body);
    Object.entries(subScribers).forEach(([ID, res]) => {
        res.json(body);
        delete subScribers[ID]
    });
    response.sendStatus(204);
})

app.listen(process.env.PORT || myPort, () => {
    console.log(`App is run :  http://localhost:${myPort}`);
})