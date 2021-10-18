const express = require('express');
const app = express();

//turns the server on for port 3000
app.listen(3000, () => {
    console.log('serving on port 3000');
})