import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('List users');

    //JSON
    response.json([
        'Ana',
        'Bheatriz',
        'Chacon'
    ]);
});

app.listen(3333);
