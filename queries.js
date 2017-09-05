/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
    Listing.find({name:'Library West'}, function(err, listing) {
        if(err) throw err;

        console.log(listing);
    })
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
    Listing.find({code: 'CABL'}, function(err, listing) {
        if (err) throw err;

        listing.remove(function(err) {
            if(err) throw err;

            console.log(listing + ' Successfully deleted');
        })
    })
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsMemorial = function() {
    Listing.findOneAndUpdate({code: 'PHL'}, {address: '102 Phelps Lab, Gainesville, FL 32611'}, function(err, listing) {
        if (err) throw err;

        console.log(listing);
    })
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
    Listing.find({}, function(err, listings) {
        if (err) throw err;

        console.log(listings);
    })
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();