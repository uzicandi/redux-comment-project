import React from 'react';
import styled from 'styled-components';

const Comment = styled.div`
  width: 100%;
  height: 100vh;
`;
const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;
function CommentList({ data }) {
  return (
    <Comment>
      <CreatedAt>123</CreatedAt>
    </Comment>
  );
}

export default CommentList;
