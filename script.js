var mainApp = angular.module("mainApp", []);

mainApp.controller('laptopController', function($scope) {
   $scope.laptop = {
      brand: "Apple",
      model: "Macbook Pro",
      price: "$1599",
      specifications:[
         {feature:'Screen_size',value:'15.4 inches'},
		 {feature:'Resolution',value:'1440 X 900'},
		 {feature:'Processor',value:'Intel Core i7 2.3GHz'},
		 {feature:'Operating System',value:'MAC OS X 10.8 Mountain Lion'},
		 {feature:'Battery runtime',value:'7 hours'},
		 {feature:'RAM',value:'8 GB'},
		 {feature:'Storage',value:'500 GB'},
		 {feature:'Graphics',value:'1 GB Nvidia GeForce GT 650M'},
		 
      ],
      
   };
});
