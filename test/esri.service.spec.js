describe('Test Module Esri Service', function(){

	beforeEach(angular.mock.module('esri.service'));

	beforeEach(inject( function( EsriBaseMaps ){

		baseMaps = EsriBaseMaps;

	}));

	it('have modulo service', function(  ){

		expect('esri.service').toBeDefined();

	});

	it('Test EsriBaseMaps exist', function(  ){

		expect(baseMaps).toBeDefined();

	});
});