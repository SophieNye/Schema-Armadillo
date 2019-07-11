const request = require('supertest');
const path = require('path');
const fs = require('fs');
// const app = require('../client')
const testJsonFile = path.resolve(__dirname, '../server/db/schema-test.json');
const server = 'http://localhost:3000';

describe('Route Integration', () => {
    describe('testing GET against root', () => {
        describe('GET', () => {
            it('responds with 200 status and text/html content-type', () => request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200));
        })
        describe('checking that app entry point exits', () => {
            it('renders an HTML file with an id of root', (done) => request(server)
                .get('/')
                .end(function (err,res) {
                    expect(res.text.includes('<div id="root"></div>')).toBeTruthy();
                    done();
                })
            )
        })
    })
    describe('testing against /auth', () => {
        describe('POST', () => {
            describe('when a user is logged in', () => { 
                it('responds with 200 status and application/json content type', () => request(server)
                    .post('/auth/login')
                    .send('{userid: anyId}')
                    .set('Accept', 'application/json')
                    .expect(function(res) {
                        res.body.id = 'some id';
                    })
                    .end(function (err, res) {
                        if (err) return done(err);
                        done();
                }))
            })
            describe('when a user is created', () => {
                it ('responds with 200 status and application/json content type', () => request(server)
                
                )
            })
        })

    })
    
    


})

