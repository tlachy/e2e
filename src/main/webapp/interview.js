angular.module('plunker', ['ui.bootstrap']);

var interviewControler = function ($scope, $modal, $log) {
    var interview = {interviewId:5,
                     interviewName:'Java Developer',
                     interviewDesc:'We are looking for senior java dev with spring and wicket',
                     phases:['application','CV review', 'Java test', 'Skype interview', 'Face-to-Face interview', 'Job offer', 'Offer accepted']};


    //drawInterviewLine(interview.phases.length);

    var applicantOne =   {interviewId:5,personId:1,interviewPhase:3};
    var applicantTwo =   {interviewId:5,personId:2,interviewPhase:2};
    var applicantThree = {interviewId:5,personId:3,interviewPhase:2};

    var applicants = [];
    applicants.push(applicantOne);
    applicants.push(applicantTwo);
    applicants.push(applicantThree);

    $scope.applicantGroups = ["neco","necodelsi","nejdelsizevseho"];
    $scope.phases = interview.phases;
};