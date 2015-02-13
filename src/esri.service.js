'use strict';

angular.module('esri.service', [])
	.service('$esriService', $esriService);

/**
 * @ngInject
 * @returns {{loadDependencies: Function, get: Function}}
 * @constructor
 */
function $esriService(){

	var service = {};

	function _loadDependecies( deps, next ){

		var reqArr = _.values(deps),
				keysArr = _.keys(deps);

		require(reqArr, function () {
			var args = arguments;

			_.each(keysArr, function (name, idx) {
				service[name] = args[idx];
			});

			next();
		});

	}

	return {
		loadDependencies: function ( deps, next ) {
			_loadDependecies( deps, next );
		},

		get: function () {
			return service;
		}

	};

}
