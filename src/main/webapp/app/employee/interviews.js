angular.module('plunker', ['ui.bootstrap']);


var InterviewsController = function ($scope, $modal, $log) {

$scope.interviews = [
      {companyName:'Logica a.s.', interviewName: 'Senior Java Developer', interviewStatus: 'Open', enterDate: '29.05.2014',  interviewStartDate: '27.04.2014', interviewEndDate: '27.05.2014', interviewNoOfApplicants: 6},
      {companyName:'IBA CZ s.r.o.', interviewName: 'Junior Java Developer', interviewStatus: 'Closed', enterDate: '29.05.2014', interviewStartDate: '27.04.2014', interviewEndDate: '27.05.2014', interviewNoOfApplicants: 2},
      {companyName:'Adastra a.s.', interviewName: '.NET Developer', interviewStatus: 'Open', enterDate: '29.05.2014', interviewStartDate: '21.04.2014', interviewEndDate: '27.05.2014', interviewNoOfApplicants: 4},
      {companyName:'CoolPeople a.s.', interviewName: 'Oracle Admin', interviewStatus: 'Finished', enterDate: '29.05.2014', interviewStartDate: '07.04.2014', interviewEndDate: '27.05.2014', interviewNoOfApplicants: 6},
      {companyName:'Acamar s.r.o', interviewName: 'Senior Java Developer', interviewStatus: 'Open', enterDate: '29.05.2014', interviewStartDate: '27.04.2014', interviewEndDate: '27.05.2014', interviewNoOfApplicants: 55},
      {companyName:'Logica a.s.', interviewName: 'System Architect', interviewStatus: 'Finished', enterDate: '29.05.2014', interviewStartDate: '27.04.2013', interviewEndDate: '27.05.2013', interviewNoOfApplicants: 17},
      ];
};