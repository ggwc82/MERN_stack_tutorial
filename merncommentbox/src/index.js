import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import style from './style';

ReactDOM.render(
 <CommentBox
 url='http://localhost:3001/api/comments'
 pollInterval={2000} />,
 document.getElementById('root')
);
