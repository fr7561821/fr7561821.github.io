angular.module('app',['ui.router','login','dashboard','menu','dashboard','teacher_list','teacher_edit'])
        .config(['$stateProvider',function ($stateProvider) {
            var loginState = {
                name:'login',
                url:'/login',
                templateUrl:'./views/login.html',
                controller:'loginCtrl'
            }
            $stateProvider.state(loginState)

            //menu
            var menuState = {
                name:'menu',
                url:'/menu',
                templateUrl:'./views/menu.html',
                controller:'menuCtrl'
            }
            $stateProvider.state(menuState)
            
            //dashboard
            var dashboardState = {
                name:'menu.dashboard',
                url:'/dashboard',
                templateUrl:'./views/dashboard.html',
                controller:'dashboardCtrl'
            };
            $stateProvider.state(dashboardState)

            //讲师列表
            var teacher_listState = {
                name:'menu.teacher_list',
                url:'/teacher_list',
                templateUrl:'./views/teacher_list.html',
                controller:'teacher_listCtrl'
            }
            $stateProvider.state(teacher_listState)

           //编辑讲师
            var teacher_editState = {
                name:'menu.teacher_editState',
                url:'/teacher_edit/:tc_id',
                templateUrl:'./views/teacher_edit.html',
                controller:'teacher_editCtrl'
            }
            $stateProvider.state(teacher_editState)
        }])





















































