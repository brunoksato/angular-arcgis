'use strict';

angular.module('esri.service', ['esri.core'])
	.service('$esriService', $esriService);

/**
 * @ngInject
 * @returns {{loadDependencies: Function, get: Function}}
 * @constructor
 */
function $esriService( $q, $rootScope, $esriCore ){

	var service = {};

	function _loadDependecies( deps, next ){

		var reqArr = $esriCore.values(deps),
				keysArr = $esriCore.keys(deps);

		require(reqArr, function () {
			var args = arguments;

			_.each(keysArr, function (name, idx) {
				service[name] = args[idx];
			});

			next();
		});

	}

	function _getDependecies(  ){

		var deferred = $q.defer(),
				deps = {

					BASE_MAPS : 'esri/basemaps',
					MAP: 'esri/map'

				};

		_loadDependecies( deps, function(  ){

			deferred.resolve();
			if (!$rootScope.$$phase) {
				$rootScope.$apply();
			}

		});

		return deferred.promise;

	}

	return {

		getDependencies: _getDependecies

	}

}
