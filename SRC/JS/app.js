/**
 * Created by Balkishan on 18-07-2016.
 */
var myapp = angular.module('myApp',['ngMaterial']);

//************Controller Functions*************************
function MainCtrl($scope){
    $scope.title="Stage One";

    $scope.languages = ["JAVA","C","C#","CUDA","PYTHON","PHP"];
    $scope.oss = ["Windows","Linux"];
}
//-------------controller definations----------------------
myapp.controller("MainCtrl",MainCtrl);
//_________________________________________________________