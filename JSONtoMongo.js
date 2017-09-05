'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

//Global variables
var listingData;

/* Connect to your database */
var mongoURI = config.db.uri;

mongoose.connect(mongoURI, {useMongoClient: true});
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var rawJSON = fs.readFileSync('listings.json');
listingData = JSON.parse(rawJSON);
console.log("Listing data added w/ " + listingData.entries.length + " entries");

for(var i in listingData.entries){
    var newListing = new Listing(listingData.entries[i]);
    newListing.save(function(err) {
        if (err) {
            console.log("Error: "+err);
            throw err;
        }
    });
}
mongoose.disconnect();

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */