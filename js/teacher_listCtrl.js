/**
 * Created by lenovo on 2017/3/22.
 */
angular.module('teacher_list',[])
.controller('teacher_listCtrl',['$scope','$http',function ($scope,$http) {
    $http({
        url:'/api/teacher',
        method:'get',
        headrs:{
            'Content-type':'application/json'
        }
    })
        .then(function (res) {
            if (200 === res.data.code){
                $scope.list = res.data.result;
            }
        })
    
    //查看讲师信息 模态框
    $scope.getDetail = function (id) {
        $http({
            url:'/api/teacher/view',
            method:'get',
            params:{tc_id:id}
        })
            .then(function (res) {
                    console.log(res.data.result);
                if(200 === res.data.code){
                    $scope.tea = res.data.result;
                $("#teacherModal").modal();
                }
            })
    }
}])