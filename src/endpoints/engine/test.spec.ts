import { Application } from "express";
import { SuperAgentTest } from "supertest";

const appData = require('../../app');

const app       = appData.app as Application;
const server    = appData.server;
const supertest = require('supertest');
const request   = supertest(app) as SuperAgentTest;

describe('Engine Module', () => {
  afterAll(() => server.close());

  it('Has a get', async () => {
    const response = await request.get('/engine');
    expect(response.status).toBe(200);
  });

  it('Response is "Requested a GET on the engine controller"', async () => {
    const response = await request.get('/engine');
    expect(response.text).toEqual("Requested a GET on the engine controller");
  });
});
