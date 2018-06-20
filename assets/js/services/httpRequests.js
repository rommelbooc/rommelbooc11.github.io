'use strict';
app.service('httpRequestsService', function($http){

	var data = {'username':'testuser2@loanmarket.co.nz', 'password' : 'test302'};
	var baseUrl = 'https://testapi.nzfsg.co.nz';
   
 
   this.POST_Login = function(){
   	return $http.post(baseUrl + '/Login', data);
   }

   this.GET_FamilyListGet = function(letter){
   	return $http.get(baseUrl + '/contacts/FamilyListGet', { params: { byPassFilter:true , startWith : '*' }});
	}

	 this.POST_ContactSet = function(data){
   	return $http.post(baseUrl + '/contacts/ContactSet', [data]);
	}

   this.GET_ContactFamilyInfoGet = function(id){
      return $http.get(baseUrl + '/contacts/ContactFamilyInfoGet', { params:{ familyId: id}});
   }

   this.GET_TaggedList = function(id){
      return $http.get(baseUrl + '/contacts/TaggedList', { params:{ familyId: id}});
   }

    this.GET_ClientInformGet = function(id){
      return $http.get(baseUrl + '/contacts/ClientInformGet', { params:{ familyId: id, clientId: 0}});
   }


    this.GET_ContactRelationshipGet = function(id){
      return $http.get(baseUrl + '/contacts/ContactRelationshipGet', { params:{ familyId: id}});
   }

});