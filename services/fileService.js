/**
 * Created By :- Madhu Jha
 * Created Date :- 15--2020 10:18 pm
 * Version :- 1.0
 */

var service = {};
var Q = require('q');
var mongo = require('mongoskin');
var config = require('../config.json')//config
var db = mongo.db(config.connectionString, { native_parser: true });    // mongodb connectivity
db.bind('UploadData');  //add collection in DB

service.uploadFile = uploadFile;
service.downloadFile = downloadFile;
module.exports = service;

// Insert json data in DB
function uploadFile(req,res){
    var deffered = Q.defer();
    var data = req.body;
    
   db.UploadData.insert(data,function(err,res){
       if(err) deffered.reject(err);
       else{
        deffered.resolve(res);
       } 
   })
    return deffered.promise;
}

// Get json data from DB
function downloadFile(req,res){
    var deffered = Q.defer();
   db.UploadData.find({}).toArray(function (err, data) {
    if (err) deffered.reject(err);
    deffered.resolve(data);
  });
    return deffered.promise;
}