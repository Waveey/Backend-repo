const express = require('express');

const app = express();

const port = 3001;

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const subject = 
    ({
        "name":"Precious Okwu",
        "CreditCard":"xxxxx-xxxxx-xxxx-0897"
    });

    res.status(201).json(subject);
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});