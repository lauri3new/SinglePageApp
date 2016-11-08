
var chai = require("chai");
var expect = chai.expect;
import usersReducer from '../reducers/users.js';
import commentsReducer from '../reducers/comments.js';
import postsReducer from '../reducers/posts.js';
import errorReducer from '../reducers/error.js';
import isLoadingReducer from '../reducers/loading.js';

describe('usersReducer', () => {
  it('returns an empty array as default state', () => {
    // set example action with type no case
    let action = { type: 'unknown' };

    // execute Reducer(example action)
    let newState = usersReducer(undefined, { type: 'unknown' });

    // verify reducers output
    expect(newState).to.deep.equal([]);
  });

  it('returns action.payload as new state', () => {
    let action = {
      type: "GET_USERS_SUCESS",
      payload: [{ responseKey: 'responseVal' }]
    };
    let newState = usersReducer(undefined, action);
    expect(newState).to.deep.equal(action.payload);
  });
});

describe('commentsReducer', () => {
  it('returns an empty array as default state', () => {
    let action = { type: 'unknown' };
    let newState = commentsReducer(undefined, { type: 'unknown' });
    expect(newState).to.deep.equal([]);
  });

  it('returns action.payload as new state', () => {
    let action = {
      type: "GET_COMMENTS_SUCESS",
      payload: [{ responseKey: 'responseVal' }]
    };
    let newState = commentsReducer(undefined, action);
    expect(newState).to.deep.equal(action.payload);
  });
});

describe('postsReducer', () => {
  it('returns an empty array as default state', () => {
    let action = { type: 'unknown' };
    let newState = postsReducer(undefined, { type: 'unknown' });
    expect(newState).to.deep.equal([]);
  });

  it('returns action.payload as new state', () => {
    let action = {
      type: "GET_POSTS_SUCESS",
      payload: [{ responseKey: 'responseVal' }]
    };
    let newState = postsReducer(undefined, action);
    expect(newState).to.deep.equal(action.payload);
  });
});

describe('errorReducer', () => {
  let initialState = {
    isError: false,
    errMsg: ""
  };
  it('returns false as default state', () => {
    let action = {
      type: "unknown"
    }
    let newState = errorReducer(undefined, action);
    expect(newState).to.deep.equal(initialState);
  });

  it('returns true when error action dispatched', () => {
    let action = {
      type: "GET_REQUEST_FAILURE",
      payload: "Something went wrong"
    };
    let newState = errorReducer(undefined, action);
    expect(newState).to.deep.equal({
      isError: true,
      errMsg: action.payload
    });
  });

  it('returns false when clearErr action dispatched', () => {
    let action = {
      type: "GET_REQUEST"
    };
    let newState = errorReducer(undefined, action);
    expect(newState).to.deep.equal(initialState);
  });

  it('returns false when clearErr action dispatched', () => {
    let action = {
      type: "RELOAD"
    };
    let newState = errorReducer(undefined, action);
    expect(newState).to.deep.equal(initialState);
  });
});

describe('isLoadingReducer', () => {
  let initialState = false;

  it('returns an empty array as default state', () => {
    let action = { type: 'unknown' };
    let newState = isLoadingReducer(undefined, { type: 'unknown' });
    expect(newState).to.deep.equal(initialState);
  });

  it('returns action.payload as new state', () => {
    let action = {
      type: "GET_REQUEST"
    };
    let newState = isLoadingReducer(undefined, action);
    expect(newState).to.deep.equal(true);
  });
});
