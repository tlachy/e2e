angular.module('plunker', ['ui.bootstrap', 'ngAnimate']);

var ProfileController = function ($scope, $modal, $log) {


};


var TestsController = function ($scope, $modal, $log) {


};

var SearchController = function ($scope, $modal, $log) {

$scope.searchConditions = [
      [{ name: 'Jon', age: 30, title: 'Developer', label: 'Skill', value: '.Net C#' }, { name: 'Jon', age: 30, title: 'Developer', label: 'Skill', value: 'JAVA' }, { name: 'Jon', age: 30, title: 'Developer', label: 'Skill', value: 'PHP' }, { name: 'Jon', age: 30, title: 'Developer', label: 'Skill', value: 'C++' }],
      [{ name: 'Mike', age: 37, title: 'Manager', label: 'Skill', value: 'Corel Draw' }, { name: 'Mike', age: 37, title: 'Manager', label: 'Skill', value: 'Adobe Photoshop' }],
      [{ name: 'Jon', age: 30, title: 'Developer', label: 'Location', value: 'Zlín' }, { name: 'Jon', age: 30, title: 'Developer', label: 'Location', value: 'Slušovice' }, { name: 'Jon', age: 30, title: 'Developer', label: 'Location', value: 'Praha' }, { name: 'Jon', age: 30, title: 'Developer', label: 'Location', value: 'Brno' }, { name: 'Jon', age: 30, title: 'Developer', label: 'Location', value: 'Olomouc' }],
       [{ name: 'Jon', age: 30, title: 'Developer', label: 'Lang', value: 'English' }]
      ];

  $scope.addRow = function(){
      $scope.searchConditions.push([{ name: 'new', age: 50, title: 'CEO', label: 'Availability', value: 'August 2014' }]);
  };

  $scope.removeCondition = function(x,y){

        if($scope.searchConditions[x].length === 1){
           $scope.searchConditions.splice(x,1);
         }else{
           $scope.searchConditions[x].splice(y,1);
         }
  };

  $scope.addCondition = function(rowIndex){
      $scope.searchConditions[rowIndex].push({ name: 'new', age: 50, title: 'CEO', label: 'Gendre', value: 'Male' });
  };

  $scope.options = [
        { label: 'Location', value: 1 },
        { label: 'Skill', value: 2 },
        { label: 'YearsOfExp', value: 3 },
        { label: 'Age', value: 4 },
        { label: 'Salary', value: 5 },
        { label: 'MistVykoPrace', value: 6 },
        { label: 'DruhVztahu', value: 7 },
        { label: 'Disabled', value: 8 },
        { label: 'Lang', value: 9 },
        { label: 'Availability', value: 9 },
        { label: 'WorkForBank', value: 9 },
        { label: 'WillingToTravel', value: 9 },
        { label: 'Religion', value: 9 },
        { label: 'Orientation', value: 9 },
        { label: 'Gendre', value: 9 }
    ];

    // u opacneho hledani klimatizace

  $scope.correctlySelected = $scope.options[1];

  $scope.openConditionDialog = function (x, y, z) {
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


  $scope.criteria = {};
  $scope.criteria.showHideClass = "hide-show state-showed";

  $scope.changeShowHideClass = function (block) {
      if (block.showHideClass === "hide-show state-showed")
          block.showHideClass = "hide-show state-hidden";
      else
          block.showHideClass = "hide-show state-showed";
  };

};

var InterviewsController = function ($scope, $modal, $log) {
    $scope.interview = {
        interviewId: 5,
        interviewName: 'Java Developer',
        interviewDesc: 'We are looking for senior java dev with spring and wicket',
        phases: [{ name: 'application', status: 'done' }, { name: 'CV review', status: 'active' }, { name: 'Java test', status: 'active' }, { name: 'Skype interview', status: 'active' }, { name: 'Face-to-Face interview', status: 'active' }, { name: 'Job offer', status: 'unactive' }, { name: 'Offer accepted', status: 'unactive' }],
        startDate: "14.6.2014",
        endDate: "29.6.2014",
        postDate: "12.6.2014",
        finishDate: "---",
        status: "In Progress",
        createdBy: "personID or The person object?"
    };

    $scope.positionOfGroupInPhase = {};

    var a1 = { name: "Radek Kopecký", interviewId: 5, personId: 1, interviewPhase: 5 };
    var a2 = { name: "Tomáš Šmíd", interviewId: 5, personId: 2, interviewPhase:5 };
    var a3 = { name: "Jan Stehlík", interviewId: 5, personId: 3, interviewPhase: 5 };
    var a4 = { name: "Tomáš Malý", interviewId: 5, personId: 4, interviewPhase: 5 };
    var a5 = { name: "František Horáček", interviewId: 5, personId: 5, interviewPhase: 5 };
    var a6 = { name: "Natálie Levá", interviewId: 5, personId: 6, interviewPhase: 4 };
    var a7 = { name: "Helena Vlachová", interviewId: 5, personId: 7, interviewPhase: 2 };
    var a8 = { name: "Ondřej Rohlík", interviewId: 5, personId: 8, interviewPhase: 2 };
    var a9 = { name: "Vlasta Handlová", interviewId: 5, personId: 9, interviewPhase: 2 };

    var applicants = [];
    applicants.push(a1);
    applicants.push(a2);
    applicants.push(a3);
    applicants.push(a4);
    applicants.push(a5);
    applicants.push(a6);
    applicants.push(a7);
    applicants.push(a8);
    applicants.push(a9);

    $scope.applicantGroups = createApplicantGroups(applicants, 3, $scope.positionOfGroupInPhase);
    $scope.phases = $scope.interview.phases;

    $scope.showApplicantsGroup = function (group) {
        $scope.selectedApplicants = group;
    }
    $scope.applicants = applicants;
    $scope.selectedApplicants = applicants;




    $scope.mark = function (groupindex) {
        for (var i = 0; i < Object.keys($scope.applicantGroups).length; i++) {;
            if (i === groupindex) {
                //highlight
                var x = document.getElementById("applicantGroup" + i.toString());

            } else {
                //unhighlight
                var x = document.getElementById("applicantGroup" + i.toString());

            }
        }
    };

    //    $scope.getPosition = function(groupIndex){
    //            //var phaseElement = document.getElementById("phase"+groupIndex);
    //            var interviewPhase = $scope.applicantGroups[groupIndex][0].interviewPhase;
    //            //var width = phaseElement.getBoundingClientRect().getBoundingClientRect().width;
    //            //var distanceFromLeft = phaseElement.getBoundingClientRect().getBoundingClientRect().left;
    //
    //            var positionOfGroupInPhase = $scope.positionOfGroupInPhase[groupIndex];
    //            (250 * interviewPhase)
    //            return (250 * interviewPhase)+"px";
    //    };

    $scope.listAllApplicants = function () {
        $scope.selectedApplicants = applicants;
    };

    $scope.highlightApplicantGroup = function (applicant) {

        angular.forEach($scope.applicantGroups, function (applicantGroup, index) {

            if (applicantGroup.contains(applicant)) {
                //document.getElementById("applicantGroup" + index).style.color = blue;
            }

        });

    };

    $scope.$on('$viewContentLoaded', function () {
        alert("blah");
    });

    $scope.description = {};
    $scope.description.showHideClass = "hide-show state-showed";


    $scope.changeShowHideClass = function (block) {
        if (block.showHideClass === "hide-show state-showed")
            block.showHideClass = "hide-show state-hidden";
        else
            block.showHideClass = "hide-show state-showed";
    };



};



var createApplicantGroups = function (applicants, limitOfApplicantsInOnePhase, positionOfGroupInPhase) {

    var groupedByInterviewPhase = {};

    angular.forEach(applicants, function (applicant) {

        if (Object.keys(groupedByInterviewPhase).indexOf(applicant.interviewPhase.toString()) === -1) {
            groupedByInterviewPhase[applicant.interviewPhase] = [applicant];
        } else {
            groupedByInterviewPhase[applicant.interviewPhase].push(applicant);
        }
    });

    var applicantGroups = {};

    angular.forEach(groupedByInterviewPhase, function (group, interviewPhase) {

        applicantGroups[interviewPhase] = {};
        applicantGroups[interviewPhase].group = [];
        if (group.length <= limitOfApplicantsInOnePhase) {
            var position = 0;
            applicantGroups[interviewPhase].type = "single";
            angular.forEach(group, function (applicant) {
                var newSize = applicantGroups[interviewPhase].group.push([applicant]);
                positionOfGroupInPhase[newSize - 1] = position++;
            });

        } else {
            applicantGroups[interviewPhase].type = "multi";
            var newSize = applicantGroups[interviewPhase].group.push(group);
            positionOfGroupInPhase[newSize - 1] = 0;
        }
    });

    return applicantGroups;
}


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