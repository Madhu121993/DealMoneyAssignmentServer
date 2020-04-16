/**
 * Created By :- Madhu Jha
 * Created Date :- 15--2020 10:11 pm
 * Version :- 1.0
 */

var express = require("express");
var router = express.Router();
var uploadService = require("../services/fileService");

router.post('/uploadFile', uploadFile);
router.get('/downloadFile',downloadFile)
module.exports = router;

/** 
 * @author:Madhu Jha
 * @argument:None
 * @description:Upload data.
 */
function uploadFile(req, res) {
    uploadService.uploadFile(req).then(function(data) {
            res.send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}
/** 
 * @author:Madhu Jha
 * @argument:None
 * @description:Get Download Data.
 */
function downloadFile(req, res) {

    uploadService.downloadFile(req).then(function(data) {
            res.send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}