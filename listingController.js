angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
      $scope.searchListings = function(item) {
          return (!$scope.searchQuery || (item.name.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) != -1) ||
          (item.code.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) != -1) )
      };
    $scope.addListing = function(listing) {
      $scope.listings.push(listing);
      $scope.listings.sort(compare);
      $scope.listing = null;
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.selectedListing = $scope.listings[index];
      $scope.name = $scope.selectedListing.name;
    };
    function compare(a,b) {
        if (a.code < b.code)
            return -1;
        if (a.code > b.code)
            return 1;
        return 0;
    }
  }
]);