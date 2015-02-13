angular.module('esri',[
	'esri.service',
	'esri.map'
])
.run(LoadEsri);

/**
 * @njInject
 * @constructor
 */
function LoadEsri( $q, $rootScope, $esriService ){

	var deferred = $q.defer(),
			deps = {

				baseMaps: 'esri/basemaps',
				map: 'esri/map'

			};

	$esriService.loadDependencies( deps, function(  ){

		deferred.resolve();
		if (!$rootScope.$$phase) {
			$rootScope.$apply();
		}

	});

	return deferred.promise;

}