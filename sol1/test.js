var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var main = require('./index.js');

var User = function(name){
    this.name = name;
};
describe("Checking if the user is created correctly", function(){
    it("should create the user with the correct name", function(){
        debugger
        var tom = new User("tom");
        tom.name.should.be.equal("tom");
    });
    it("should say hello", function(){
        debugger
        var hello = main();
    
        hello.should.be.equal("Hello world");
    });
});