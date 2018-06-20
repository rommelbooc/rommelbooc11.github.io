'use strict';
app.service('httpRequestsService', function($http){

	var data = {'username':'testuser2@loanmarket.co.nz', 'password' : 'test302'};
	var baseUrl = 'https://testapi.nzfsg.co.nz';
   
 
   this.login = function(){
   	return $http.post(baseUrl + '/Login', data);
   }

   this.getContactList = function(letter){
   	return $http.get(baseUrl + '/contacts/FamilyListGet', { params: { byPassFilter:true , startWith : '*' }});
	}

	 this.addNewContact = function(data){
   	return $http.post(baseUrl + '/contacts/ContactSet', [data]);
	}

   this.getContactInfo = function(id){
      return $http.get(baseUrl + '/contacts/ContactFamilyInfoGet', { params:{ familyId: id}});
   }

});