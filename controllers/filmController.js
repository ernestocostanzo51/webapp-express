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

   connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: 'Errore del server' });
        if (movieResults.length === 0) return res.status(404).json({ error: 'Film non trovato' });

        const movie = movieResults[0];

        
        const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?';
        
        connection.query(reviewsSql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: 'Errore nel recupero recensioni' });
            
            
            movie.reviews = reviewResults;
            res.json(movie);
        });
    });

}

module.exports = { index, show };