'use strict';

angular.module('esri.service', [])
	.service('EsriService', EsriService)
	.service('EsriBaseMaps', EsriBaseMaps)
	.service('EsriColor', EsriColor)
	.service('EsriConfig', EsriConfig)
	.service('EsriCredential', EsriCredential)
	.service('EsriDomUtils', EsriDomUtils)
	.service('EsriGraphic', EsriGraphic)
	.service('EsriGraphicUtils', EsriGraphicUtils)
	.service('EsriIdentityManager', EsriIdentityManager)
	.service('EsriIdentityManagerBase', EsriIdentityManagerBase)
	.service('EsriInfoTemplate', EsriInfoTemplate)
	.service('EsriInfoWindowBase', EsriInfoWindowBase)
	.service('EsriKernel', EsriKernel)
	.service('EsriLang', EsriLang)
	.service('EsriMap', EsriMap)
	.service('EsriOperationBase', EsriOperationBase)
	.service('EsriRequest', EsriRequest)
	.service('EsriServerInfo', EsriServerInfo)
	.service('EsriSnappingManager', EsriSnappingManager)
	.service('EsriSpatialReference', EsriSpatialReference)
	.service('EsriTimeExtent', EsriTimeExtent)
	.service('EsriUndoManager', EsriUndoManager)
	.service('EsriUnits', EsriUnits)
	.service('EsriUrlUtils', EsriUrlUtils);

/**
 * @ngInject
 * @param EsriBaseMaps
 * @param EsriMap
 * @constructor
 */
function EsriService( EsriBaseMaps, EsriColor, EsriConfig, EsriCredential, EsriDomUtils, EsriGraphic,
	EsriGraphicUtils, EsriIdentityManager, EsriIdentityManagerBase, EsriInfoTemplate, EsriInfoWindowBase,
	EsriKernel, EsriLang, EsriMap, EsriOperationBase, EsriRequest, EsriServerInfo, EsriSnappingManager,
	EsriSpatialReference, EsriTimeExtent, EsriUndoManager, EsriUnits, EsriUrlUtils ){

	var self = this;
	self.service = null;

	self.service.baseMaps = EsriBaseMaps.baseMaps;
	self.service.color = EsriColor.color;
	self.service.config = EsriConfig.config;
	self.service.credential = EsriCredential.credential;
	self.service.domUtils = EsriDomUtils.domUtils;
	self.service.graphic = EsriGraphic.graphic;
	self.service.graphicUtils = EsriGraphicUtils.graphicUtils;
	self.service.identityManager = EsriIdentityManager.identityManager;
	self.service.identityManagerBase = EsriIdentityManagerBase.identityManagerBase;
	self.service.infoTemplate = EsriInfoTemplate.infoTemplate;
	self.service.infoWindowBase = EsriInfoWindowBase.infoWindowBase;
	self.service.kernel = EsriKernel.kernel;
	self.service.lang = EsriLang.lang;
	self.service.map = EsriMap.map;
	self.service.operationBase = EsriOperationBase.operationBase;
	self.service.request = EsriRequest.request;
	self.service.serverInfo = EsriServerInfo.serverInfo;
	self.service.snappingManager = EsriSnappingManager.snappingManager;
	self.service.spatialReference = EsriSpatialReference.spatialReference;
	self.service.timeExtent = EsriTimeExtent.timeExtent;
	self.service.undoManager = EsriUndoManager.undoManager;
	self.service.units = EsriUnits.units;
	self.service.urlUtils = EsriUrlUtils.urlUtils;

}

/**
 * @ngInject
 * @constructor
 */
function EsriColor(){

	var self = this;
	self.color = null;

	require(["esri/Color"], function( color ) {

		self.color = color;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriBaseMaps(){

	var self = this;
	self.baseMaps = null;

	require(["esri/basemaps"], function( baseMaps ) {

		self.baseMaps = baseMaps;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriConfig(){

	var self = this;
	self.config = null;

	require(["esri/config"], function( config ) {

		self.config = config;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriCredential(){

	var self = this;
	self.credential = null;

	require(["esri/Credential"], function( credential ) {

		self.credential = credential;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriDomUtils(){

	var self = this;
	self.domUtils = null;

	require(["esri/domUtils"], function( domUtils ) {

		self.domUtils = domUtils;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriGraphic(){

	var self = this;
	self.graphic = null;

	require(["esri/graphic"], function( graphic ) {

		self.graphic = graphic;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriGraphicUtils(){

	var self = this;
	self.graphicUtils = null;

	require(["esri/graphicsUtils"], function( graphicUtils ) {

		self.graphicUtils = graphicUtils;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriIdentityManager(){

	var self = this;
	self.identityManager = null;

	require(["esri/IdentityManager"], function( identityManager ) {

		self.identityManager = identityManager;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriIdentityManagerBase(){

	var self = this;
	self.identityManagerBase = null;

	require(["esri/IdentityManagerBase"], function( identityManagerBase ) {

		self.identityManagerBase = identityManagerBase;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriInfoTemplate(){

	var self = this;
	self.infoTemplate = null;

	require(["esri/InfoTemplate"], function( infoTemplate ) {

		self.infoTemplate = infoTemplate;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriInfoWindowBase(){

	var self = this;
	self.infoWindowBase = null;

	require(["esri/InfoWindowBase"], function( infoWindowBase ) {

		self.infoWindowBase = infoWindowBase;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriKernel(){

	var self = this;
	self.kernel = null;

	require(["esri/kernel"], function( kernel ) {

		self.kernel = kernel;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriLang(){

	var self = this;
	self.lang = null;

	require(["esri/lang"], function( lang ) {

		self.lang = lang;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriMap(){

	var self = this;
	self.map = null;

	require(["esri/map"], function( map ) {

			self.map = map;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriOperationBase(){

	var self = this;
	self.operationBase = null;

	require(["esri/OperationBase"], function( operationBase ) {

		self.operationBase = operationBase;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriRequest(){

	var self = this;
	self.request = null;

	require(["esri/request"], function( request ) {

		self.request = request;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriServerInfo(){

	var self = this;
	self.serverInfo = null;

	require(["esri/ServerInfo"], function( serverInfo ) {

		self.serverInfo = serverInfo;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriSnappingManager(){

	var self = this;
	self.snappingManager = null;

	require(["esri/SnappingManager"], function( snappingManager ) {

		self.snappingManager = snappingManager;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriSpatialReference(){

	var self = this;
	self.spatialReference = null;

	require(["esri/SpatialReference"], function( spatialReference ) {

		self.spatialReference = spatialReference;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriTimeExtent(){

	var self = this;
	self.timeExtent = null;

	require(["esri/TimeExtent"], function( timeExtent ) {

		self.timeExtent = timeExtent;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriUndoManager(){

	var self = this;
	self.undoManager = null;

	require(["esri/undoManager"], function( undoManager ) {

		self.undoManager = undoManager;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriUnits(){

	var self = this;
	self.units = null;

	require(["esri/units"], function( units ) {

		self.units = units;

	});

}

/**
 * @ngInject
 * @constructor
 */
function EsriUrlUtils(){

	var self = this;
	self.urlUtils = null;

	require(["esri/urlUtils"], function( urlUtils ) {

		self.urlUtils = urlUtils;

	});

}