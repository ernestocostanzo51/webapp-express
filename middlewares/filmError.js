function notFound(req, res, next) {
    res.status(404).json({
        error: 'Not Found',
        message: 'La risorsa che stai cercando non esiste.'
    });
};



function errorsHandler(err, req, res, next) {
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message // Ti mostra l'errore specifico nel JSON
    });
};

module.exports = {errorsHandler,notFound }