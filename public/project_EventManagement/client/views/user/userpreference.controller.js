/**
 * Created by Ashish on 4/7/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("UserPreferenceController", UserPreferenceController)

    function UserPreferenceController($rootScope, $scope, $location, UserService){

        $scope.savePreference = savePreference;
        $scope.getPreferences = getPreferences;

        var cu = $rootScope.currentUser;

        $scope.music = [ {
            name : 'Pop',
            value : 3007
        }, {
            name : 'Rock',
            value : 3011
        }, {
            name : 'Metal',
            value : 3012
        }, {
            name : 'Folk',
            value : 3013
        }, {
            name : 'Opera',
            value : 3017
        } ];

        $scope.travel = [ {
            name : 'Hiking',
            value : 9001
        }, {
            name : 'Rafting',
            value : 9002
        }, {
            name : 'Kayaking',
            value : 9003
        }, {
            name : 'Canoeing',
            value : 9004
        }, {
            name : 'Climbing',
            value : 9005
        } ];

        $scope.food = [ {
            name : 'Beer',
            value : 10001
        }, {
            name : 'Wine',
            value : 10002
        }, {
            name : 'Food',
            value : 10003
        }, {
            name : 'Spirits',
            value : 10004
        }, {
            name : 'Other',
            value : 10099
        } ];

        $scope.science = [ {
            name : 'Medicine',
            value : 2001
        }, {
            name : 'Biotech',
            value : 2003
        }, {
            name : 'Mobile',
            value : 2005
        }, {
            name : 'Robotics',
            value : 2007
        }, {
            name : 'Science',
            value : 2002
        } ];

        $scope.holiday = [ {
            name : 'Easter',
            value : 16002
        }, {
            name : 'Halloween/Haunt',
            value : 16004
        }, {
            name : 'Thanksgiving',
            value : 16005
        }, {
            name : 'Christmas',
            value : 16006
        }, {
            name : 'Channukah',
            value : 16007
        } ];

        $scope.selection = [];

        $scope.toggleSelection = function toggleSelection(subCategoryId) {
            var idx = $scope.selection.indexOf(subCategoryId);
            if (idx > -1) {
                $scope.selection.splice(idx, 1);
            } else {
                $scope.selection.push(subCategoryId);
            }
        };

        function savePreference(){
            console.log("This is save preference click");
            cu.preference = $scope.selection;
            UserService.savePreference(cu)
                .then(
                    function(response){
                        console.log("Success in save preference");
                        $rootScope.currentUser = response.config.data;
                        $location.url("/");
                    }
                )
        }

        function getPreferences() {
            if($rootScope.currentUser.preference != null){
                $scope.selection = $rootScope.currentUser.preference;
            }
        };

    }
})();