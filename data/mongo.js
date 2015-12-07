/**
 * Created by cwklausing on 12/6/15.
 */
var mongodb = require('mongodb');

module.exports.init = function(callback) {
    //create mongo server
    var server = new mongodb.Server('localhost', 27017);
    //this will access the database 'applicantLibrary'
    var db = new mongodb.Db('applicantLibrary', server);
    db.open(function(error, db) {
        module.exports.db = db;
        //export the applicant collection
        module.exports.applicants = db.collection('applicants');
        callback(error);
    });
};