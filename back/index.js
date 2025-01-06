const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
