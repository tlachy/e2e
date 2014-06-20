angular.module('plunker', ['ui.bootstrap']);

var interviewControler = function ($scope, $modal, $log) {
    $scope.interview = {interviewId:5,
                     interviewName:'Java Developer',
                     interviewDesc:'We are looking for senior java dev with spring and wicket',
                     phases:['application','CV review', 'Java test', 'Skype interview', 'Face-to-Face interview', 'Job offer', 'Offer accepted'],
                     startDate: "14.6.2014",
                     endDate: "29.6.2014",
                     status: "In Progress",
                     createdBy: "personID or The person object?"};

    $scope.positionOfGroupInPhase = {};

    var a1 = {interviewId:5,personId:1,interviewPhase:6};
    var a2 = {interviewId:5,personId:2,interviewPhase:6};
    var a3 = {interviewId:5,personId:3,interviewPhase:6};
    var a4 = {interviewId:5,personId:4,interviewPhase:6};
    var a5 = {interviewId:5,personId:5,interviewPhase:5};
    var a6 = {interviewId:5,personId:6,interviewPhase:4};
    var a7 = {interviewId:5,personId:7,interviewPhase:3};
    var a8 = {interviewId:5,personId:8,interviewPhase:2};
    var a9 = {interviewId:5,personId:9,interviewPhase:1};

    var applicants = [];
    applicants.push(a1);
    applicants.push(a2);
    applicants.push(a3);
    applicants.push(a4);
    applicants.push(a5);
    applicants.push(a6);
    applicants.push(a7);
    applicants.push(a8);

    $scope.applicantGroups = createApplicantGroups(applicants, 3, $scope.positionOfGroupInPhase);
    $scope.phases = $scope.interview.phases;

    $scope.showApplicantsGroup = function(group){
        console.log(group);
        $scope.selectedApplicants = group;
    }
    $scope.selectedApplicants = applicants;

    $scope.mark = function(group){
        for(var i = 0; i < $scope.applicantGroups.length; i++){

            if(i === x){
                //highlight
                var x = document.getElementById("applicantGroup"+i.toString());

            } else {
                //unhighlight
                var x = document.getElementById("applicantGroup"+i.toString());

            }
        }
    };

    $scope.getPosition = function(groupIndex){
            //var phaseElement = document.getElementById("phase"+groupIndex);
            var interviewPhase = $scope.applicantGroups[groupIndex][0].interviewPhase;
            //var width = phaseElement.getBoundingClientRect().getBoundingClientRect().width;
            //var distanceFromLeft = phaseElement.getBoundingClientRect().getBoundingClientRect().left;

            var positionOfGroupInPhase = $scope.positionOfGroupInPhase[groupIndex];
            (250 * interviewPhase)
            return (250 * interviewPhase)+"px";
    };

};

var createApplicantGroups = function(applicants, limitOfApplicantsInOnePhase, positionOfGroupInPhase){

    var groupedByInterviewPhase = {};

    angular.forEach(applicants, function(applicant) {

           if( Object.keys(groupedByInterviewPhase).indexOf(applicant.interviewPhase.toString()) === -1 ){
                groupedByInterviewPhase[applicant.interviewPhase] = [applicant];
           } else{
                groupedByInterviewPhase[applicant.interviewPhase].push(applicant);
           }
         });


    var applicantGroups = [];

    angular.forEach(groupedByInterviewPhase, function(group, interviewPhase) {

        if( group.length <= limitOfApplicantsInOnePhase ){
            var position = 0;
            angular.forEach(group, function(applicant){
                var newSize = applicantGroups.push([applicant]);
                positionOfGroupInPhase[newSize - 1] = position++;
            });

        } else{
            var newSize = applicantGroups.push(group);
            positionOfGroupInPhase[newSize - 1] = 0;
        }
    });

    return applicantGroups;
}