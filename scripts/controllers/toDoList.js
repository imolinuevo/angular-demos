angular.module('app').controller("ToDoList", ToDoList);

function ToDoList() {

	var vm = this;

  vm.myList = [{'text': 'foo', 'done': true}];
  vm.addTask = function () {
    vm.myList.push({'text': vm.inputText, 'done': false});
    vm.inputText = '';
  };

  vm.removeTask = function(item) {
    vm.myList.splice(vm.myList.indexOf(item), 1);
  };

  vm.updateTask = function(item, editInputText) {
    item.text = angular.copy(editInputText);
  };

}
