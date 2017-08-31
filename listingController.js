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
      //TODO: Fix indexing for newly added listings - they get deleted improperly due to orderBy
      $scope.listings.push(listing);
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.selectedListing = $scope.listings[index];
      $scope.name = $scope.selectedListing.name;
    };
  }
]);