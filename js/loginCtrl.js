/**
 * Created by lenovo on 2017/3/22.
 */
angular.module('login',[])
    .controller('loginCtrl',['$scope','$http','$stateParams',function ($scope,$http,$stateParams) {
        $scope.username = '';
        $scope.password = '';
        console.log(location.hash);
        $scope.login= function () {
            $http.jsonp({
                url:'http://api.botue.com/login',
                method:'post',
                data:'tc_name='+$scope.username+'&tc_pass='+$scope.password,
                headers:{
                    'Content-type':'application/x-www-form-urlencoded'
                }
            })
                .then(function (res) {
                    if(200 === res.data.code){
                        //localStorage里面只能存储字符串
                        localStorage.setItem("userInfo",JSON.stringify(res.data.result))
                        location.href = '/index.html?#!/menu/dashboard'
                    }
                })
        }
    }])


