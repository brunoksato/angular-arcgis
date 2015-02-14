'use strict';

angular.module('esri.service', [])
	.service('$esriProvider', $esriProvider)
	.service('$esriService', $esriService);

/**
 * @ngInject
 * @returns {{loadDependencies: Function, get: Function}}
 * @constructor
 */
function $esriService( $q, $rootScope, $esriProvider ){

	var service = {};
	var deps = $esriProvider.dependencies;

	function _loadDependecies( next ){

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

	function _getDep(  ){

		var deferred = $q.defer();

		_loadDependecies(function(  ){

			deferred.resolve();
			if (!$rootScope.$$phase) {
				$rootScope.$apply();
			}

		});

		return deferred.promise;

	}

	service.get = _getDep;

	return service;

}

/**
 * @ngInject
 */
function $esriProvider(){

	this.dependencies = [];

}
