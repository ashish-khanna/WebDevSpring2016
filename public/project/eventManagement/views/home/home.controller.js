/**
 * Created by Ashish on 3/24/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("HomeController", HomeController)

    function HomeController($rootScope, $scope, $location) {
        console.log("HomeController");
        var vm = this;

        $scope.getCurrentPosition = getCurrentPosition;


        function getCurrentPosition(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(success, error);
            }
            else{
                console.log("Browser does not support geo");
            }

            function success(position) {
                $scope.lat = position.coords.latitude;
                $scope.lon = position.coords.longitude;
                console.log($scope.lat);
                console.log($scope.lon);

                var loc = {
                    lat: $scope.lat,
                    lon: $scope.lon,
                    city: 'Boston'
                }
                createMarker(loc);
            }

            function error(err) {
                console.log(err.code);
            }

            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

        }

        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(42.364506, -71.038887),
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info) {
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city,
                animation: "Animation.BOUNCE",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/92/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Home_%E2%80%93_People_%E2%80%93_Default.png"
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }

        var cities = [
            {
                city: 'Boston',
                desc: 'This is the best city in the world!',
                lat: 42.364506,
                long: -71.038887
            },
            {
                city: 'Toronto',
                desc: 'This is the best city in the world!',
                lat: 43.7000,
                long: -79.4000
            },
            {
                city: 'New York',
                desc: 'This city is aiiiiite!',
                lat: 40.6700,
                long: -73.9400
            },
            {
                city: 'Chicago',
                desc: 'This is the second best city in the world!',
                lat: 41.8819,
                long: -87.6278
            },
            {
                city: 'Los Angeles',
                desc: 'This city is live!',
                lat: 34.0500,
                long: -118.2500
            },
            {
                city: 'Las Vegas',
                desc: 'Sin City...\'nuff said!',
                lat: 36.0800,
                long: -115.1522
            }
        ];

        for (i = 0; i < cities.length; i++) {
            createMarker(cities[i]);
        }

        $scope.openInfoWindow = function (e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    }
})();