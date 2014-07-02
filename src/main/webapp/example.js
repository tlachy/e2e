angular.module('plunker', ['ui.bootstrap']);

var TabsDemoCtrl = function ($scope, $modal, $log) {

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

  $scope.options = [
        { label: 'Location', value: 1 },
        { label: 'Skill', value: 2 },
        { label: 'Years of Experience', value: 3 },
        { label: 'Age', value: 4 },
        { label: 'Salary', value: 5 },
        { label: 'MistoVykonuPrace', value: 6 },
        { label: 'DruhVztahu', value: 7 },
        { label: 'Disabled', value: 8 },
        { label: 'Lang', value: 9 },
        { label: 'Availability', value: 9 },
        { label: 'WillingToWorkForBank', value: 9 },
        { label: 'WillingToWorkForTravel', value: 9 },
        { label: 'Religion', value: 9 },
        { label: 'Orientation', value: 9 },
        { label: 'Gendre', value: 9 }
    ];

    // u opacneho hledani klimatizace

  $scope.correctlySelected = $scope.options[1];

  $scope.openConditionDialog = function(x,y,z){
        console.log($scope.searchConditions[x][y]);
        console.log(z);
        var size = 2;

        var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                size: size,
                resolve: {
                  items: function () {
                    return $scope.items;
                  }
                }
              });

              modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
              }, function () {
                $log.info('Modal dismissed at: ' + new Date());
              });
  };

  $scope.items = ['item1', 'item2', 'item3'];
};




// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;

  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};