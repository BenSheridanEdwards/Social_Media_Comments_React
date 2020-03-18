import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 1:00pm" content="Hello everyone!" />
      <CommentDetail author="Alex" timeAgo="Yesterday at 8:00pm" content="Wonderful" />
      <CommentDetail author="Jane" timeAgo="Monday at 2:00pm" content="I'm learning React" />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));