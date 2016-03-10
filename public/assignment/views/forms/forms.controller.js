/**
 * Created by Ashish on 3/3/2016.
 */

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController)

    function FormsController($scope, $rootScope, FormService){
        console.log("this is FormsController");

        $scope.selectedFormIndex = null;
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        function init() {
            getFormsForUser($rootScope.currentUser._id);
        }
        init();

        function getFormsForUser(userId){
            FormService.findAllFormsForUser(userId,
                function(response){
                    var userForms = response;
                    $scope.forms = userForms;
                }
            )
        };

        function addForm (form){
            FormService.createFormForUser($rootScope.user._id,form,
                function(response){
                    var newForm = response;
                    $scope.forms.push(newForm);
                    $scope.selectedFormIndex = null;
                    $scope.newForm = {};
                }
            )
        };

        function updateForm (form){
            FormService.updateFormById($scope.forms[$scope.selectedFormIndex]._id, form,
                function(response){
                    var updatedForm = response;
                    $scope.forms[$scope.selectedFormIndex] = updatedForm;
                    $scope.selectedFormIndex = null;
                    $scope.newForm = {};
                }
            )
        };
        function deleteForm(index){
            FormService.deleteFormById($scope.forms[index]._id,
                function(response){
                    $scope.forms.splice(index,1);
                })
        };

        function selectForm(index){
            $scope.selectedFormIndex = index;
            $scope.newForm = {
                "_id" : $scope.forms[index]._id,
                "title" : $scope.forms[index].title,
                "userId" : $scope.forms[index].userId
            };
        }
    }
})();