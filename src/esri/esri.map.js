'use strict';

/**
* esri.map Module
*
* Description
*/
angular.module('esri.map', [])
    .directive('Map', Map)
    .factory('MapService', MapService)
    .controller('MapCtrl', MapCtrl);

var mapObject = function(){

    this.map = undefined;

}

function MapService(){

    return mapObject;

}

require(['esri/map'], function (Map) {

    mapObject.map = Map;
    mapObject.scope.recreateMap();

});

/**
 * [Map description]
 * @ngInject
 */
function Map(){
    return{

        restrict: 'E',
        link: function($scope, $element, $attr, $ctrl){

            $ctrl.init($element);

        }

    }
}

function MapCtrl($rootScope, $scope, $attrs, MapService){

    var mapDiv;
    $scope.$element;
    $scope.mapService = MapService;
    $scope.mapService.scope = $scope;

    this.init = function (element) {

        if (!$attrs.id) { throw new Error('\'id\' is required for a map.'); }
        $scope.$element = element;

        if(!$scope.mapService.map){
            return;
        }

        $scope.recreateMap();
    };

    $scope.recreateMap = function(){

        createDiv();
        createMap();

    };

    function createDiv(){

        if(mapDiv){
            return;
        }
        mapDiv = document.createElement('div');
        mapDiv.setAttribute('id', $attrs.id);
        $scope.$element.removeAttr('id');
        $scope.$element.append(mapDiv);

    }

    function createMap(){

        if(!$scope.mapService.map){
            return;
        }
        if(!mapDiv){
            return;
        }

        var options = {
            center: $attrs.center ? JSON.parse($attrs.center) : [-56.049, 38.485],
            zoom: $attrs.zoom ? parseInt($attrs.zoom) : 10,
            basemap: $attrs.basemap ? $attrs.basemap : 'streets'
        };

        $scope.map = new $scope.mapService.map($attrs.id, options);

        $scope.map.on('load', function () { $rootScope.$broadcast('map-load'); });
        $scope.map.on('click', function (e) { $rootScope.$broadcast('map-click', e); });

    }

}