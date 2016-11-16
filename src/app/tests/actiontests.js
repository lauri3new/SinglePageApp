import chai from 'chai';
import nock from 'nock';
var expect = chai.expect;
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';
import * as actions from "../actions/actions.js";
import sinon from 'sinon';


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('clearErr', () => {
  it('dispatches clear error action', () => {
    let store = mockStore({});
    let expectedActions = [{
      type: "RELOAD"
    }]

    store.dispatch(actions.clearErr());
    expect(store.getActions()).to.deep.equal(expectedActions);
  })
});

describe('getData', () => {
  afterEach(() => {
    nock.cleanAll()
  })
    it('dispatches getRequest action then fetches data and if fetch is successful dispatches data to store', () => {
      nock('https://jsonplaceholder.typicode.com')
      .get('/users')
      .reply(200, {
            id: 1,
            name: "Leanne Graham"});

    const store = mockStore({users: []});
            const expectedActions = [
            { type: "GET_REQUEST" },
            { type: "GET_USERS_SUCCESS",
              payload: {   id: 1, name: "Leanne Graham"}  }];

          return store.dispatch(actions.getUsers())
             .then(() => { // return of async actions
               expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })
    it('dispatches getRequest action then fetches data and if fetch fails dispatch error to store', () => {
      nock('https://jsonplaceholder.typicode.com')
      .get('/users')
      .reply(404);

    const store = mockStore({users: []});
            const expectedActions = [
            { type: "GET_REQUEST" },
            { type: "GET_REQUEST_FAILURE",
              payload: "404 Not Found" }];

          return store.dispatch(actions.getUsers())
             .then(() => { // return of async actions
               expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })
})
