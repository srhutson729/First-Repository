import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4> Warning!</h4>
                    Are you sure you want to continue?</div> 
            </ApprovalCard>
           <ApprovalCard>
            <CommentDetail 
           author="Sam" 
           timeAgo="Today at 4:45PM" 
           commentText="Nice Blog Post" 
           avatar={faker.image.avatar()}
            />
           </ApprovalCard>
           <ApprovalCard>
            <CommentDetail 
           author="Jake"
           timeAgo="Today at 2:00AM" 
           commentText="I strongly disagree"
           avatar={faker.image.avatar()}
           />
           </ApprovalCard>
           <ApprovalCard>
            <CommentDetail 
           author="Karen" 
           timeAgo="Yesterday at 5:00PM" 
           commentText="I want to speak with a manager"
           avatar={faker.image.avatar()}
           />
           </ApprovalCard>
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector ('#root'))



