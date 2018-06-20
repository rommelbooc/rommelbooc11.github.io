'use strict';

app.controller('ContactInfoCtrl', function ($scope, httpRequestsService, $uibModal, $stateParams, $state) {

  $scope.person = {
    id : $stateParams.params.id, 
    firstname : $stateParams.params.firstname,
    lastname : $stateParams.params.lastname
  };
  console.log($stateParams);
  $scope.now;
  $scope.contantSummary = {};
  $scope.existingBenefits =[ {benefit : 'Trauma Cover', excess : '$68,000', insurerImg : 'assets/images/your-logo-here.png'},
                             {benefit : 'Car Accident', excess : '$55,000 Annually', insurerImg : 'assets/images/your-logo-here.png'},
                             {benefit : 'Disability', excess : '$68,000', insurerImg : 'assets/images/your-logo-here.png'}];
  $scope.loans = [ {amount : '$120,000', from : $scope.person.firstname, to : 'Wespac', submittedTo: 'Lender'},
                  {amount : '$120,000', from : $scope.person.firstname, to : 'Wespac', submittedTo: 'Lender'}
                  ];

  $scope.activeTasks= [{ name: 'Meeting', description : 'Meeting for Insurance Application', incharge : 'Claurence Marketer', dueToday : true},
  { name: 'Submit Report', description : 'Send Details for Loan Market', incharge : 'Claurence Marketer', dueToday : true}]
  
  $scope.recentActivities = [{name : 'Follow up email sent', description : 'Email sent to c.adams@gmail.com', day: 'Aug 1', icon: 'assets/images/crm_icons_svg/new_email_violet.svg'},
  {name : 'Print Queue', description : 'This is sample task', day: 'Sept 12', icon: 'assets/images/crm_icons_svg/print_violet.svg'}]

  $scope.notes = [{
    name: 'NOTE HEADING SAMPLE', description : 'This is a sample text fot the note header'
  }]

    $scope.getContactInfo = function(){
     httpRequestsService.getContactInfo($scope.person.id).then(function(response){
       $scope.now = moment.parseZone(response.data.DateModified).format('LLL');
       $scope.contantSummary = response;
       console.log(response.data.DateModified);
       console.log(response);
     });
   }

   $scope.getContactInfo();




 });