angular.module('plunker', ['ui.bootstrap']);

var TabsDemoCtrl = function ($scope) {

  $scope.tabs = [
    { title:"Dynamic Title 1", content:"Dynamic content 1" },
    { title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      alert("You've selected the alert tab!");
    });
  };

  $scope.navType = 'pills';




  $scope.searchConditions = [
      [{name:'Jon', age: 30, title: 'Developer'}, {name:'Jon', age: 30, title: 'Developer'}, {name:'Jon', age: 30, title: 'Developer'}],
      [{name:'Mike', age: 37, title: 'Manager'}, {name:'Mike', age: 37, title: 'Manager'}],
      [{name:'Allen', age: 50, title: 'CEO'}]
      ];

  $scope.addRow = function(){
       $scope.searchConditions.push([{name:'new', age: 50, title: 'CEO'}]);
  };

  $scope.removeCondition = function(x,y){

        if($scope.searchConditions[x].length === 1){
           $scope.searchConditions.splice(x,1);
         }else{
           $scope.searchConditions[x].splice(y,1);
         }
  };

  $scope.addCondition = function(rowIndex){
        $scope.searchConditions[rowIndex].push({name:'new', age: 50, title: 'CEO'});
  };


};