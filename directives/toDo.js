angular.module('app').directive('toDo', ToDo);

function ToDo() {
  return {
    restrict: 'E',
    templateUrl: 'views/toDo.html'
  };
}
