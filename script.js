angular.module("planyway", [])
.controller("second", function($scope){
function UserListCtrl($scope) {
	$scope.users = [
		{
			"name": "Homer S.",
			"phone": "(999)321-467",
			"message": "Сообщение на внутренней странице Homer S."
		},
		{
			"name": "Bart S.",
			"phone": "(999)821-568",
			"message": "Сообщение на внутренней странице Bart S."
		},
		{
			"name": "Lisa S.",
			"phone": "(999)865-234",
			"message": "Сообщение на внутренней странице Lisa S."
		},
		{
			"name": "Alex V.",
			"phone": "(999)865-284",
			"message": "Сообщение на внутренней странице Alex V."
		}
	];
	//localStorage.setItem("info", $scope.users);// и тут чего то
	$scope.orderProp = "count";//сортировка модели при открытии страницы
	$scope.ordering = function(Name){// функция сортировки модели 
		$scope.orderProp = Name; //order возвращает отсортированный массив
	};
	$scope.remove = function(item){//удаление объекта из модели
		var index = $scope.users.indexOf(item)
		$scope.users.splice(index, 1)
	};
	$scope.addUser = function(){//добавление элемента в модель
		if ($scope.addName){// if для защиты от пустого поля
		$scope.users.push({
			name:$scope.addName, 
			phone:$scope.addPhone, 
			message:$scope.addMessage
		});}
		else{alert("bad idea");}
		/*if($scope.addName){
		localStorage.setItem("info", $scope.users);
		}// вот тут чето
		else{
			alert("Input a empy, pls enter data.");
		}*/
		$scope.addName = '';// очистка поля имени
		$scope.addPhone = '';//очистка поля телефона
		$scope.addMessage = '';//очистка поля сообщения
	}; 
};	
})