// 리덕스 모듈 만들기

// 1. Action
const GET_COMMENTS = 'comments/GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'comments/GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'comments/GET_COMMENTS_ERROR';

// 2. Create Action
export const getComments = () => ({ type: GET_COMMENTS });

export const initialState = {};
