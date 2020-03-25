const express = require("express");

const app = express();

app.get('/',(request,response) => {
    return response.json({ a: 1,b: 2})
})

app.listen(3333);

