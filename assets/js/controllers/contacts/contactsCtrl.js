'use strict';

app.controller('ContactsCtrl', function ($scope, httpRequestsService, $http, $uibModal) {

    $scope.contacts = [];
    $scope.checkedContacts = { ids : []};
    $scope.bulkCheckFlag = false;
    $scope.alphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    $scope.selectedLetter = $scope.alphabet[0];
    $scope.now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $scope.showModal = false;
    $scope.deleteBtnSvg = 'delete_grey.svg';
    $scope.editBtnSvg = 'edit_grey.svg';
    $scope.summaryBtnSvg = 'summary_grey.svg';
    $scope.filterTable = 'ClientLastName';
    $scope.searchTable = '';

    httpRequestsService.POST_Login().then(function(response){
     $http.defaults.headers.common.Authorization = 'Bearer ' + response.data;
     $scope.GET_FamilyListGet($scope.selectedLetter);
 });

    $scope.GET_FamilyListGet = function(letter){
       $scope.selectedLetter = letter;
       httpRequestsService.GET_FamilyListGet(letter).then(function(response){
        $scope.contacts = response.data.FamilyList;
        console.log(response);
    });
   }

   $scope.bulkCheck = function() {
    $scope.bulkCheckFlag = $scope.bulkCheckFlag ? false : true;
    console.log($scope.bulkCheckFlag);

    if($scope.bulkCheckFlag){
        $scope.checkedContacts.ids = $scope.contacts.map(function(item) { return item.FamilyID; });
    }else{
        $scope.checkedContacts.ids = [];
    }
};

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'assets/views/contacts/add_contact.html',
      controller: 'AddContactCtrl',
      backdropClass: 'custom-modal-backdrop',
      size: 'xl'
    });
  };


});