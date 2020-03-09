// @ts-ignore
import express from 'express';

const app = express();
app.post('./', (request, response, next) => {

});
const port = 3000;
app.get('/xxx', (req, res) => res.send('fucking world'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));