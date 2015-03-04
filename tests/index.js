var camelQueryParams = require('../');
var assert = require("assert");

describe('camelQueryParams', function(){

  describe('When query params is undefined', function(){
    it('should return an error', function(){
      var error = 'Request Query Params is empty object';
      camelQueryParams({},function(err, result){
        assert.equal(err, error);
        assert.equal(result, undefined);
       });
    });
  });

  describe('When query params is an empty object', function(){
    it('should return an error', function(){
      var error = 'queryParams is undefined';
      camelQueryParams(undefined,function(err, result){
        assert.equal(err, error);
        assert.equal(result, undefined);
      });
    });
  });

  describe('When query params is object with FirstName', function(){
    it('should return object with firstName attribute and remove the FirstName attribute', function() {
      camelQueryParams({FirstName: 'Doron Segal'},function(err, result){
        assert.equal(err,  undefined);
        assert.equal(result.firstName, 'Doron Segal');
        assert.equal(result.FirstName, undefined);
      });
    });
  });

  describe('When query params is object with First_Name', function(){
    it('should return object with firstName attribute and remove the First_Name attribute', function() {
      camelQueryParams({FirstName: 'Doron Segal'},function(err, result){
        assert.equal(err,  undefined);
        assert.equal(result.firstName, 'Doron Segal');
        assert.equal(result.FirstName, undefined);
      });
    });
  });

  describe('When query params is object with first_name', function(){
    it('should return object with firstName attribute and remove the first_name attribute', function() {
      camelQueryParams({FirstName: 'Doron Segal'},function(err, result){
        assert.equal(err,  undefined);
        assert.equal(result.firstName, 'Doron Segal');
        assert.equal(result.FirstName, undefined);
      });
    });
  });


  describe('When query params is object with first-name', function(){
    it('should return object with firstName attribute and remove the first-name attribute', function() {
      camelQueryParams({FirstName: 'Doron Segal'},function(err, result){
        assert.equal(err,  undefined);
        assert.equal(result.firstName, 'Doron Segal');
        assert.equal(result.FirstName, undefined);
      });
    });
  });

  describe('When query params is object with First-Name', function(){
    it('should return object with firstName attribute and remove the First-Name attribute', function() {
      camelQueryParams({FirstName: 'Doron Segal'},function(err, result){
        assert.equal(err,  undefined);
        assert.equal(result.firstName, 'Doron Segal');
        assert.equal(result.FirstName, undefined);
      });
    });
  });

  describe('When query params is object with camel case and two attributes', function(){
    it('should return the same object', function() {
      camelQueryParams({firstName: 'Doron', lastName: 'Segal'},function(err, result){
        assert.equal(err,  undefined);
        assert.equal(result.firstName, 'Doron');
        assert.equal(result.lastName, 'Segal');
      });
    });
  });

  describe('When query params is array and NOT an object', function () {

    it('Should return an error', function(){
      var error = 'queryParams is an array use querystring.parse';
      camelQueryParams([{firstName: 'Doron'}, {lastName: 'Segal'}],function(err, result){
        assert.equal(err, error);
      });
    });
  });

});
