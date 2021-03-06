var app = angular.module("planyWay", []);
	app.filter("startFrom", function(){
		return function(input, start){
			start =+ start;
			return input.slice(start);
		}
	})/*
	-1) разбить скрипт по файлам
	2) доработать интерфейс
	3) доделать фильтры и сортировки
	4) добавить редактирование записей
	5)  доделать кроссбраузерность
	*/
.controller("UserListCtrl", function ($scope) { //controller
	$scope.users = [];
	var local = JSON.parse(localStorage.getItem("info"));
	if(local){
		$scope.users = local;
	}
	else(alert("localStorage is empty"));
	$scope.orderProp = "count";//сортировка модели по порядку при открытии страницы
	$scope.currentPage = 0;
	$scope.pageSize = 5;
	$scope.numberOfPages = function(){
		let numbPages = Math.ceil($scope.users.length/$scope.pageSize)==0 ? 1 : Math.ceil($scope.users.length/$scope.pageSize);//ceil округляет значение в скобках ближе к большему целому
		return numbPages;
	}
	$scope.ordering = function(Project){// функция сортировки модели 
		$scope.orderProp = Project; //orderProp возвращает отсортированный массив
	};
	$scope.remove = function(item){//удаление объекта из модели
		var index = $scope.users.indexOf(item)
		$scope.users.splice(index, 1)
		localStorage.setItem("info", JSON.stringify($scope.users));// перезапись хранилища, без удаленного поля
	};
	$scope.addUser = function(){//добавление элемента в модель
		if ($scope.addDate && $scope.addCommit && $scope.addProject){
		$scope.users.push({
			commit:$scope.addCommit,
			date:$scope.addDate,
			project:$scope.addProject
		});
			localStorage.setItem("info", JSON.stringify($scope.users));// преобразование массива в строку json и запись в хранилище
			var restoredSession = JSON.parse(localStorage.getItem("info"));// парсинг обратно в object
			console.log(restoredSession);
	}
		else{alert("bad idea, enter info")}
		$scope.addName = '';// очистка полей после добавления
		$scope.addPhone = '';
		$scope.addCommit = '';
		$scope.addDate = '';
	}; 
});

function startFrom(){
		return function(input, start){
			start =+ start;
			return input.slice(start);
		}
	} 