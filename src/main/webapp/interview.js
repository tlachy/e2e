angular.module('plunker', ['ui.bootstrap']);

var interviewControler = function ($scope, $modal, $log) {
    var interview = {interviewId:5,
                     interviewName:'Java Developer',
                     interviewDesc:'We are looking for senior java dev with spring and wicket',
                     phases:['application','CV review', 'Java test', 'Skype interview', 'Face-to-Face interview', 'Job offer', 'Offer accepted'],
                     startDate: "neco",
                     endDate: "neco",
                     status: "closed",
                     createdBy: "personID or The person object?"};

    var a1 = {interviewId:5,personId:1,interviewPhase:6};
    var a2 = {interviewId:5,personId:2,interviewPhase:6};
    var a3 = {interviewId:5,personId:3,interviewPhase:6};
    var a4 = {interviewId:5,personId:3,interviewPhase:6};
    var a5 = {interviewId:5,personId:3,interviewPhase:5};
    var a6 = {interviewId:5,personId:3,interviewPhase:4};
    var a7 = {interviewId:5,personId:3,interviewPhase:3};
    var a8 = {interviewId:5,personId:3,interviewPhase:2};
    var a9 = {interviewId:5,personId:3,interviewPhase:1};

    var applicants = [];
    applicants.push(a1);
    applicants.push(a2);
    applicants.push(a3);
    applicants.push(a4);
    applicants.push(a5);
    applicants.push(a6);
    applicants.push(a7);
    applicants.push(a8);

    $scope.applicantGroups = createApplicantGroups(applicants, 3);
    $scope.phases = interview.phases;

    $scope.showApplicantsGroup = function(group){
        console.log(group);
    }

};

var createApplicantGroups = function(applicants, limitOfApplicantsInOnePhase){

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
            angular.forEach(group, function(applicant){   applicantGroups.push([applicant]);   });
        } else{
            applicantGroups.push(group);
        }
    });



    return applicantGroups;
}