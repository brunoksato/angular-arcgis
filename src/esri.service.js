'use strict';

angular.module('esri.service', [])
	.provider('$esriProvider', $esriProvider)
	.service('$esriService', $esriService);

/**
 * @ngInject
 * @returns {{loadDependencies: Function, get: Function}}
 * @constructor
 */
function $esriService( $q, $rootScope ){

	var service = {},
			factory = {};
	//var deps = $esriProvider.dependencies;

	function _loadDependecies( deps, next ){

		var reqArr = _.values(deps),
				keysArr = _.keys(deps);

		require(reqArr, function () {

			// xhr.get({

			// 	sync: true,
			// 	load: function(){

			// 		var args = arguments;

			// 		_.each(keysArr, function( name, idx ){

			// 			service[name] = args[idx];

			// 		});

			// 	}


			// })

			var args = arguments;

			_.each(keysArr, function( name, idx ){

				service[name] = args[idx];

			});



			next();

		});

	}

	function _getDep(  ){

		var deferred = $q.defer();
		var deps = {
			// sync: "dojo/_base/xhr",
			map: 'esri/map',
            FeatureLayer: 'esri/layers/FeatureLayer',
            InfoTemplate: 'esri/InfoTemplate',
            SimpleFillSymbol: 'esri/symbols/SimpleFillSymbol',
            SimpleRenderer: 'esri/renderers/SimpleRenderer',
            SimpleMarkerSymbol: 'esri/symbols/SimpleMarkerSymbol',
            ScaleDependentRenderer: 'esri/renderers/ScaleDependentRenderer',
            Color: 'dojo/_base/Color'
		};

		_loadDependecies( deps, function(  ){

			deferred.resolve(service);
			if (!$rootScope.$$phase) {
				$rootScope.$apply();
			}

		});

		return deferred.promise;

	}

	factory.get = _getDep;

	return factory;

}

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
