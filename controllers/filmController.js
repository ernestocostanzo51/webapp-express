const connection = require('../data/db')

const index = (req , res) =>{
    const sql = `
        SELECT movies.*, ROUND(AVG(reviews.vote), 1) AS avg_vote
        FROM movies
        LEFT JOIN reviews ON movies.id = reviews.movie_id
        GROUP BY movies.id
    `;

    
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

 const storeReview = (req, res) => {
    const { movie_id } = req.params;
    const { name, vote, text } = req.body;

    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)';
    
    connection.query(sql, [movie_id, name, vote, text], (err, result) => {
        if (err) return res.status(500).json({ error: 'Errore nel salvataggio della recensione' });
        res.status(201).json({ message: 'Recensione aggiunta con successo', id: result.insertId });
    });
};

module.exports = { index, show , storeReview};