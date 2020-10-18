angular.module("planyway",[])
.controller("first", function($scope){
	localStorage.clear();// очистка всего хранилища
	//созданий временной переменной для каждого поля
	$scope.tempcommit = "";
	$scope.temptime = "";
	$scope.tempproject = "";
	//создание хранилища заданий
	$scope.tasksarray = [
	{
		date: "2017-09-08T16:00:00.000Z",
		project: "Planyway",
		commit: "it's was cool work"
	},
	{
		"date": "2017-10-08T16:00:00.000Z",
		"project": "Ruboid",
		"commit": "good game for relax"
	}
	];
	//функция которая переносит данные из переменной в массив
	$scope.addnew = function(){
		if ($scope.tempcommit && $scope.temptime){
		$scope.tasksarray.push($scope.temptime);
		$scope.tasksarray.push($scope.tempproject);
		$scope.tasksarray.push($scope.tempcommit);
		localStorage.setItem("info", $scope.tasksarray); // сохраняем данные в локальное хранилище
		$scope.tempcommit = "";
		$scope.temptime = "";
		$scope.tempproject = "";
	}
		else {
			alert("Input a empy, pls enter data.");
		}
	}
	//функция удаления данных
	$scope.deleteitem = function(item){
			var index = $scope.tasksarray.indexOf(item);
			//console.log(index); //проверка индекса
			$scope.tasksarray.splice(index, 1);
	}
})
