const connection = require('../data/db')

const index = (req , res) =>{
    const sql = 'SELECT * FROM movies'

    connection.query(sql , (err , results) =>{
        if (err) return res.status(500).json({ error: 'Errore del server' });
        res.json(results);
    })
}

const show = (req , res) => {
    const { id } = req.params;
    const movieSql = 'SELECT * FROM movies WHERE id = ?'

    connection.query(reviewsSql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: 'Errore nel recupero recensioni' });
            
            movie.reviews = reviewResults;
            res.json(movie);
        });

    

}