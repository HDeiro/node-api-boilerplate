import { Application } from "express";
import { SuperAgentTest } from "supertest";

const app       = require('../app').app as Application;
const server    = require('../app').server;
const supertest = require('supertest');
const request   = supertest(app) as SuperAgentTest;

describe('Engine Module', () => {
  afterAll(() => server.close());

  it('has a get', async done => {
    const response = await request.get('/engine');
    expect(response.status).toBe(200);
    done();
  });
});
