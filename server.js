var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
const path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/files')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage }).single('file')

app.use(cors({ origin: 'http://localhost:3001' }));

app.post('/upload', function (req, res) {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

});

const directoryPath = path.join(__dirname, '/src/files');
//passsing directoryPath and callback function



app.get('/getAll', function (req, res) {
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        /* files.forEach(function (file) {
            // Do whatever you want to do with the file
            res.sendFile(file)
        }); */
        console.log(files);
        res.send(files);
    });
})

app.listen(8000, function () {

    console.log('App running on port 8000');

});