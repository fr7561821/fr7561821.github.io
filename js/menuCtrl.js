/**
 * Created by lenovo on 2017/3/22.
 */
angular.module('menu',[])
.controller('menuCtrl',['$scope',function ($scope) {
    $scope.user = JSON.parse(localStorage.getItem('userInfo'));
    
}])