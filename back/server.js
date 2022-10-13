const express = require('express');
const cors = require('cors');
const app = express();
const musics = require('./musics');
const serverPort = 8000;

app.use(express.json())

app.get("/", cors(), (req, res) => {
    res.send('Api Ok');
  });

app.get("/musics", cors(), (req, res) => {
    res.json(musics);
  });

  app.get("/musics/:genre", cors(), (req,res) => {
    const parsedMusicsGenre = req.params.genre;
    const music = musics.find((music) => music.genre == String(parsedMusicsGenre));
    if (music) {
        res.json(music);
    } else {
        res.sendStatus(404);
    }
  });  

app.get("/musics/:id", cors(), (req,res) => {
    const parsedMusicsId = parseInt(req.params.id);
    const music = musics.find((music) => music.id === parsedMusicsId);
    if (music) {
        res.json(music);
    } else {
        res.sendStatus(404);
    }
});



app.listen(serverPort, () => console.log(`Express server is running ${serverPort}`));