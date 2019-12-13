var request = require('supertest');

var app = require('../index.js');

describe('GET /', function(){
	it('respond with hellow world', function(done) {
		request(app).get('/').expect('hellow orld', done);
	})
})