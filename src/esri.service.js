'use strict';

angular.module('esri.service', [])
	.provider('$esriLoad', $esriLoad)
	.run($esriRun);
	//.service('$esriService', $esriService);

/**
 * @ngInject
 * @returns {{loadDependencies: Function, get: Function}}
 * @constructor
 */
// function $esriService( $q, $rootScope ){

// 	var service = {},
// 			factory = {};
// 	//var deps = $esriProvider.dependencies;

// 	function _loadDependecies( deps, next ){

// 		var reqArr = _.values(deps),
// 			keysArr = _.keys(deps);

// 		require(reqArr, function () {

// 			var args = arguments;

// 			_.each(keysArr, function( name, idx ){

// 				service[name] = args[idx];

// 			});



// 			next();

// 		});

// 	}

// 	function _getDep(  ){

// 		var deferred = $q.defer();
// 		var deps = {
// 			map: 'esri/map',
//             FeatureLayer: 'esri/layers/FeatureLayer',
//             InfoTemplate: 'esri/InfoTemplate',
//             SimpleFillSymbol: 'esri/symbols/SimpleFillSymbol',
//             SimpleRenderer: 'esri/renderers/SimpleRenderer',
//             SimpleMarkerSymbol: 'esri/symbols/SimpleMarkerSymbol',
//             ScaleDependentRenderer: 'esri/renderers/ScaleDependentRenderer',
//             Color: 'dojo/_base/Color'
// 		};

// 		$rootScope.$broadcast('')

// 		_loadDependecies( deps, function(  ){

// 			require(reqArr, function () {

// 			var args = arguments;

// 			_.each(keysArr, function( name, idx ){

// 				service[name] = args[idx];

// 			});



// 			next();

// 		});

// 			// deferred.resolve(service);
// 			// if (!$rootScope.$$phase) {
// 			// 	$rootScope.$apply();
// 			// }

// 		});

// 		return deferred.promise;

// 	}

// 	factory.get = _getDep;

// 	return factory;

// }

/**
 * @ngInject
 */
function $esriProvider(){

	var defaults = this.defaults = {
		map: 'esri/map'
	};

	this.$get = function(  ){

		function ProviderFactory( config ){

			var $dep = angular.extend({}, defaults, config);

			return $dep;

		}

		return ProviderFactory;

	};

}

/**
 * @ngInject
 * [$esriLoad description]
 * @return {[type]} [description]
 */
function $esriLoad(){

	var defaults = this.defaults = {
		map: 'esri/map'
	};

	var service = {};

	this.$get = function($rootScope, $q, $window){

		var $esri = $q.defer();

		$rootScope.$on('esri.load', function( e, service ){

			try{
				var map = service.map ( 'map', {
		           center  : [ -118, 34.5 ],
		             zoom    : 8,
		             basemap : "topo"
		         });
				$esri.resolve(service);
			}catch(e){
				$esri.init();
			}

		});


		$esri.config = function(){

			function ProviderFactory( config ){

				var $dep = angular.extend({}, defaults, config);

				return $dep;

			}

			return ProviderFactory;

		}

		$esri.init = function(){

			var reqArr = _.values(defaults),
				keysArr = _.keys(defaults);

			require(reqArr, function () {

				var args = arguments;

				_.each(keysArr, function( name, idx ){

					service[name] = args[idx];

				});

				$rootScope.$broadcast("esri.load", service);

			});

		}

		return $esri;

	}

}

/**
 * @ngInject
 * @param  {[type]} $rootScope [description]
 * @param  {[type]} $esriLoad  [description]
 * @return {[type]}            [description]
 */
function $esriRun($window, $rootScope, $esriLoad){

	$window.onload = function(){

		$esriLoad.init();
		if (!$rootScope.$$phase) {
          $rootScope.$apply() ;
        }

	}

}