import express from 'express';
import connectToDatabase from './helper.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
await connectToDatabase();
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }
);
