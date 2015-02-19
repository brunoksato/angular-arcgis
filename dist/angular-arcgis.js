'use strict';

angular.module ( 'esri.core', [] );
	//.service ( '$esriCore', $esriCore );

//function $esriCore(){
//
//	/**
//	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
//	 * Build: `lodash modern modularize exports="npm" -o ./`
//	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
//	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
//	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//	 * Available under MIT license <https://lodash.com/license>
//	 */
//	var argsTag = '[object Arguments]';
//	var arrayTag = '[object Array]';
//	var funcTag = '[object Function]';
//	var reHostCtor = /^\[object .+?Constructor\]$/;
//	var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
//			reHasRegExpChars = RegExp ( reRegExpChars.source );
//	var objectProto = Object.prototype;
//	var objToString = objectProto.toString;
//	var MAX_SAFE_INTEGER = Math.pow ( 2, 53 ) - 1;
//	var fnToString = Function.prototype.toString;
//	var hasOwnProperty = objectProto.hasOwnProperty;
//	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
//	var nativeKeys = isNative ( nativeKeys = Object.keys ) && nativeKeys;
//	var support = {};
//
//	function isObjectLike( value ){
//		return (value && typeof value == 'object') || false;
//	}
//
//	function isLength( value ){
//		return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
//	}
//
//	function isArguments( value ){
//		var length = isObjectLike ( value ) ? value.length : undefined;
//		return (isLength ( length ) && objToString.call ( value ) == argsTag) || false;
//	}
//
//	function baseToString( value ){
//		if ( typeof value == 'string' ){
//			return value;
//		}
//		return value == null ? '' : (value + '');
//	}
//
//	var reNative = RegExp ( '^' +
//		escapeRegExp ( objToString )
//			.replace ( /toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?' ) + '$'
//	);
//
//	var nativeIsArray = isNative ( nativeIsArray = Array.isArray ) && nativeIsArray;
//
//	var isArray = nativeIsArray || function( value ){
//			return (isObjectLike ( value ) && isLength ( value.length ) && objToString.call ( value ) == arrayTag) || false;
//		};
//
//	function isNative( value ){
//		if ( value == null ){
//			return false;
//		}
//		if ( objToString.call ( value ) == funcTag ){
//			return reNative.test ( fnToString.call ( value ) );
//		}
//		return (isObjectLike ( value ) && reHostCtor.test ( value )) || false;
//	}
//
//	function escapeRegExp( string ){
//		string = baseToString ( string );
//		return (string && reHasRegExpChars.test ( string ))
//			? string.replace ( reRegExpChars, '\\$&' )
//			: string;
//	}
//
//	(function( x ){
//
//		try{
//			support.nonEnumArgs = !propertyIsEnumerable.call ( arguments, 1 );
//		} catch ( e ) {
//			support.nonEnumArgs = true;
//		}
//	} ( 0, 0 ));
//
//	function isIndex( value, length ){
//		value = +value;
//		length = length == null ? MAX_SAFE_INTEGER : length;
//		return value > -1 && value % 1 == 0 && value < length;
//	}
//
//	function shimKeys( object ){
//		var props = keysIn ( object ),
//				propsLength = props.length,
//				length = propsLength && object.length;
//
//		var allowIndexes = length && isLength ( length ) &&
//			(isArray ( object ) || (support.nonEnumArgs && isArguments ( object )));
//
//		var index = -1,
//				result = [];
//
//		while ( ++index < propsLength ){
//			var key = props[ index ];
//			if ( (allowIndexes && isIndex ( key, length )) || hasOwnProperty.call ( object, key ) ){
//				result.push ( key );
//			}
//		}
//		return result;
//	}
//
//	function isObject( value ){
//		var type = typeof value;
//		return type == 'function' || (value && type == 'object') || false;
//	}
//
//	this.keys = !nativeKeys ? shimKeys : function( object ){
//		if ( object ){
//			var Ctor = object.constructor,
//					length = object.length;
//		}
//		if ( (typeof Ctor == 'function' && Ctor.prototype === object) ||
//			(typeof object != 'function' && (length && isLength ( length ))) ){
//			return shimKeys ( object );
//		}
//		return isObject ( object ) ? nativeKeys ( object ) : [];
//	};
//
//
//	function keysIn( object ){
//		if ( object == null ){
//			return [];
//		}
//		if ( !isObject ( object ) ){
//			object = Object ( object );
//		}
//		var length = object.length;
//		length = (length && isLength ( length ) &&
//		(isArray ( object ) || (support.nonEnumArgs && isArguments ( object ))) && length) || 0;
//
//		var Ctor = object.constructor,
//				index = -1,
//				isProto = typeof Ctor == 'function' && Ctor.prototype === object,
//				result = Array ( length ),
//				skipIndexes = length > 0;
//
//		while ( ++index < length ){
//			result[ index ] = (index + '');
//		}
//		for ( var key in object ){
//			if ( !(skipIndexes && isIndex ( key, length )) && !(key == 'constructor' && (isProto || !hasOwnProperty.call ( object, key ))) ){
//				result.push ( key );
//			}
//		}
//		return result;
//	}
//
//	this.values = function( object ){
//		var index = -1,
//				props = keys ( object ),
//				length = props.length,
//				result = Array ( length );
//
//		while ( ++index < length ){
//			result[ index ] = object[ props[ index ] ];
//		}
//		return result;
//	}
//
//}

/**
 * Initial module
 */
angular.module('esri',[

	'esri.core',
	'esri.service',
	'esri.map'

]);
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
$esriService.$inject = ["$q", "$rootScope"];

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

'use strict';

/**
* esri.map Module
*
* Description
*/
angular.module('esri.map', []);
    /*.directive('Map', Map)
    .factory('MapService', MapService)
    .controller('MapCtrl', MapCtrl);

var mapObject = function(){

    this.map = undefined;

};

function MapService(){

    return mapObject;

}

require(['esri/map'], function (Map) {

    mapObject.map = Map;
    mapObject.scope.recreateMap();

});

*//**
 * [Map description]
 * @ngInject
 *//*
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

}*/