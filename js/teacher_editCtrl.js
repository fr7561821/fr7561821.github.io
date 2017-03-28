/**
 * Created by lenovo on 2017/3/23.
 */
angular.module('teacher_edit',[])
.controller('teacher_editCtrl',['$scope','$http','$stateParams',function ($scope, $http,$stateParams) {
    $scope.search = ''

    $http({
        url:'/api/teacher/edit',
        method:'get',
        params:{tc_id:$stateParams.tc_id},
    })
        .then(function (res) {
            if(200 === res.data.code){
                console.log(res.data.result);
                $scope.info = res.data.result;
                $scope.tc_edit="编辑讲师";
            }
        })

    //保存编辑的内容
    $scope.edit = function () {
        $http({
            url:'/api/teacher/update',
            method:'post',
            data:parsetoFormdata($scope.info),
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            }
        })
            .then(function (res) {
                console.log(res);
                if(200 === res.data.code){
alert(1)
                }
            })
    function parsetoFormdata(obj) {
        var arr = [];
        for(var key in obj){
            arr.push(key+ "=" + obj[key]);
        }
        return arr.join('&');
    }
    }
}])