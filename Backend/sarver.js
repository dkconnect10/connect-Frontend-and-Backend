const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
        id : 1,
        title : 'First Jock',
        content :" This is my first jock"
    },
    {
        id : 2,
        title : 'Second Jock',
        content :" This is my Second jock"
    },
     {
        id : 3,
        title : 'Third Jock',
        content :" This is my Third jock"
    },
    {
        id : 4,
        title : 'Forth Jock',
        content :" This is my Forth jock"
    },
    {
        id : 5,
        title : 'fifth Jock',
        content :" This is my fifth jock"
    },

  ]
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})