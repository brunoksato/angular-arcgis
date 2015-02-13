describe('Test Module Esri', function(){

	beforeEach(angular.mock.module('esri'));

	it('have EsriBaseMaps service', function(  ){

		expect('esri').toBeDefined();

	});

});