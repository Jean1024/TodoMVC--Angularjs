(function (angular) {
  'use strict';
  // 1. 创建模块
  // 2. 基于模块创建控制器
  // 3. 将模块和控制器作用到具体的HTML元素上
  // 4. 基于视图业务划分不同的控制器，设计你的数据模型
  angular.module('TodoApp', [])
    .controller('MainController', function ($scope) {
      $scope.title = "任务列表"
      $scope.todoText = ""
      $scope.toggleAll = false;
      $scope.left = 0;
     	$scope.todoFilter={}
      $scope.todos = [{
        id: 1,
        title: "吃饭",
        completed: true,
        show: true
      }, {
        id: 2,
        title: "睡觉",
        completed: false,
        show: true
      }, {
        id: 3,
        title: "打豆豆",
        completed: true,
        show: true
      }];
      $scope.todos.forEach(function (todo) {

          if (todo.completed == false) {
            $scope.left += 1;
          }
        })
        //添加任务
      $scope.addTodo = function () {
          var id = $scope.todos.length == 0 ? 0 : $scope.todos[$scope.todos.length - 1].id;
          $scope.todos.push({
            id: id + 1,
            title: $scope.todoText,
            completed: false,
            show: true
          })
          $scope.todoText = ""
          $scope.ctrolToggle();
        }
        //全选或者否


      $scope.toggle = function () {
          $scope.todos.forEach(function (todo) {
            todo.completed = $scope.toggleAll
          })
        }
        //每次点击验证
      $scope.ctrolToggle = function () {
        //是否全选
        for (var i = 0; i < $scope.todos.length; i++) {
          if ($scope.todos[i].completed === false) {
            $scope.toggleAll = false
            break;
          }
          $scope.toggleAll = true
        }
        //剩余事件
        $scope.left = 0;
        $scope.todos.forEach(function (todo) {
          if (todo.completed == false) {
            $scope.left += 1;
          }
        })
      }

      //删除操作
      $scope.deleteSelf = function (id) {
          $scope.todos.forEach(function (todo, index) {
            if (todo.id == id) {
              $scope.todos.splice(index, 1)
            }
          })
        }
        //全部显示
      // $scope.all = function () {
      //   $scope.todos.forEach(function (todo) {
      //     todo.show = true;
      //   })
      // }
      //   //完成显示
      // $scope.completed = function () {
      //   $scope.todos.forEach(function (todo) {
      //     if (todo.completed==true) {
      //     		todo.show=true
      //     }else{
      //     	todo.show=false
      //     }
      //   })
      // }
      // $scope.uncompleted = function () {
      //   $scope.todos.forEach(function (todo) {
      //     if (todo.completed==true) {
      //     		todo.show=false
      //     }else{
      //     	todo.show=true
      //     }
      //   })
      // }
      //清除已完成
      $scope.clear = function () {
      	var todos=$scope.todos;
        for (var i = 0; i < todos.length; i++) {
        	if (todos[i].completed==true) {
        		todos.splice(i,1)
        		i--;
        	}
        }
      }

    })



})(window.angular);
