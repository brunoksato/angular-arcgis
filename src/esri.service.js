'use strict';

angular.module('esri.service', [])
	.service('$esriService', $esriService);

/**
 * @ngInject
 * @returns {{loadDependencies: Function, get: Function}}
 * @constructor
 */
function $esriService( $q, $rootScope ){

	var service = {};

	function _loadDependecies( deps, next ){

		var reqArr = _.values(deps),
				keysArr = _.keys(deps);

		require(reqArr, function () {

			var args = arguments;

			angular.forEach(keysArr, function( name, idx ){

				service[name] = args[idx];

			});

			next();

		});

	}

	function _getDependecies(  ){

		var deferred = $q.defer(),
				deps = {

					Map: 'esri/map'

				};

		_loadDependecies( deps, function(  ){

			deferred.resolve();
			if (!$rootScope.$$phase) {
				$rootScope.$apply();
			}

		});

		return deferred.promise;

	}

	service.get = _getDependecies;

	return service;

}

/**
 * @njInject
 * @param deps
 */
function $esriProvider( deps ){

	this.dependencies = [];

	angular.forEach( deps, function( name, idx ){



	});

}
