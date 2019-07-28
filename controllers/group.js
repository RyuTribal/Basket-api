var Group = require("../models/group");
var uuid = require("uuid");
var base64ToFile = require("base64-to-file");
var image2base64 = require("image-to-base64");
var mongoose = require("mongoose");
exports.groupPost = function(req, res) {
  var id = uuid.v4();
  base64ToFile.convert(
    req.body.thumbnail,
    "upload/",
    ["jpg", "jpeg", "png"],
    function(filePath) {
      var group = new Group({
        title: req.body.title,
        thumbnail: filePath,
        level: req.body.level,
        id: id
      });

      group.save(function(error) {
        //obs hantera error
        if (error) {
          return next(error);
        }
        res.send("Group created");
      });
    }
  );
};

exports.groupAmmount = function(req, res) {
  Group.find({}, function(err, groups) {
    res.send({length: groups.length});
  });
};

exports.groupGet = function(req, res) {
  var itteration = req.body.itteration;
  console.log(req.body.itteration)
  Group.find({}, function(err, groups) {
    image2base64(groups[itteration].thumbnail) // you can also to use url
      .then(response => {
        groups[itteration].thumbnail = response;
        res.send(groups[itteration])
      })
      .catch(error => {
        console.log(error); //Exepection error....
      });
  });
};
