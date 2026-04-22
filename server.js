const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path');
const port = 3000
const filmRouter = require('./routers/filmRouter')
const error = require('./middlewares/filmError')

app.use(cors({
  origin: 'http://localhost:5173' 
}));
app.use(express.static('public'));


app.use(express.json());
app.use('/movies', filmRouter);

app.get('/' , (req , res) => {
    res.send('bevenuto in pagina')
})



app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
})

