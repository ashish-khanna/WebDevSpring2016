/**
 * Created by Ashish on 3/24/2016.
 */
'use strict';
(function() {
    angular
        .module("EventApp")
        .factory("EventService", EventService);

    function EventService($q, $http) {
        var api = {
            searchEvent: searchEvent
        };

        return api;


        var sJSONArray = [];

        function searchEvent(event) {
            console.log("in event search function");
            var deferred = $q.defer();
            var sampleJSON = { "eventId" : "", "lat" : "", "lon" : ""};
            $http({
                method: 'GET',
                url: 'https://www.eventbriteapi.com/v3/events/search/',
                async : false,
                params: {
                    q: event,
                    token: 'IVT43S2BSWC525YQGO4S'
                }
            }).success(function (response) {
                var a = response.events;
                console.log(a);
                a.forEach(function (item){
                    console.log(item.venue_id);
                    sampleJSON.eventId = item.id;
                    $http({
                        method: 'GET',
                        url: 'https://www.eventbriteapi.com/v3/venues/'+ item.venue_id + '/',
                        async: false,
                        params: {
                            token: 'IVT43S2BSWC525YQGO4S'
                        }
                    }).success(function (response){
                        console.log(response);
                        sampleJSON.lat = response.latitude;
                        sampleJSON.lon = response.longitude;
                        console.log(sampleJSON);
                        //sJSONArray.push(sampleJSON);
                    })


                })

                console.log(sJSONArray);

                deferred.resolve(response);
            });
            return deferred.promise;
        }
    }
})();