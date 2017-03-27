var express = require("express");
var app = express();
var exec = require('child_process').exec;

app.get("/", function(req, res) {
var dl = 'curl ' + req.query.q + ' > image.jpg';
    exec(dl, function(error, stdout, stderr) {
        console.log(stderr);
    });

var cmd = 'python \
~/workspace/models/tutorials/image/imagenet/classify_image.py \
--image_file image.jpg';
    exec(cmd, function(error, stdout, stderr) {
        res.end(stdout);
        console.log(stdout);
    });
});

app.listen(process.env.PORT, function() {
    console.log("server runnning");
});