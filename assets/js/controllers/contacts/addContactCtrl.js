app.controller('AddContactCtrl', function ($uibModalInstance, $scope, httpRequestsService) {


  $scope.newContact = { Title:'',
                        Role:'', 
                        Gender : 'Male', 
                        SmokerStatus: 'Yes', 
                        Phone : [
                          {Type : 'Home',  Number : ''},
                          {Type : 'Business',  Number : ''},
                          {Type : 'Mobile',  Number : ''}
                        ],
                        DBOReminder : false,
                        Deceased: false,
                        FamilyId : 0
                      };
  $scope.titles = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr'];
  $scope.roles = ['Adult', 'Child', 'Other', 'Guarantor', 'Policy Owner'];
  $scope.classes = [1, 2,  3, 4, 5];
  
  $scope.POST_ContactSet = function(){
       httpRequestsService.POST_ContactSet($scope.newContact).then(function(response){
        console.log(response);
         $uibModalInstance.close();
    });
   }

});
