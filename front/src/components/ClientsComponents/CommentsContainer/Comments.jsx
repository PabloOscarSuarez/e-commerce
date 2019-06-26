import React from "react"

export default ({ comments }) => {
    // console.log(comments, 'soy comments')
    return (
        <div className="mb-2">
            {comments && comments.map(user => {
                return (
                    <div key={user.id} className="card mb-2 ">
                        <div className="card-header">
                            {user.name}
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <i>{user.comment.createdAt.split('T')[0]}</i>
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{user.comment.description}</p>
                            </blockquote>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
