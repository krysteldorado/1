
bank.controller('Depo', ['$scope', function($scope){
		$scope.init = 50000; 
        $scope.add = function( num1,num2){
        				
                        $scope.txtsum = 'Your New Balance is : ';
                        $scope.sum = parseInt(num1) + parseInt(num2);
        }

         $scope.subtract = function( num1,num2){
        				
                        $scope.txtminus = 'Your New Balance is : ';
                        $scope.diff = parseInt(num1) - parseInt(num2);
}
}]);