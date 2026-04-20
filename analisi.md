### NOME PROGETTO : webapp-express (movies)
 
## COSTRUZIONE DATABASE

# TABELLA 1: Movies
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `release_year` year DEFAULT NULL,
  `abstract` text,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)

# TABELLA 2 : Rewievs
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `vote` tinyint NOT NULL,
  `text` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_movie` (`movie_id`),



## COLLEGAMENTO TRA DB E EXPRESS

 -creazione di un server.js (responsabile per l'avvio del server)
 -creazione cartelle data routers middleware controllers
 -installazione express aggiungendo i vari script 
 -gestione sistema CRUD
 -installazione mysql2
 -connect con il server al database username : root 
 -inserimento delle query all' interno dei controllers

 BONUS : creazione cartella public per gestione .png
 

 