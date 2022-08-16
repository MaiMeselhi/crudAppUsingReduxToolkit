import React from "react";

export default function Posts() {
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="Enter Your Title" />
                <input type="text" placeholder="Enter Your Desciption" />
                <button>Add Post</button>
            </div>
            <div className="post">
                <h2>post title</h2>
                <p>post description</p>
                <button>add post</button>
                <button>delete post</button>
            </div>
        </div>
    );
}
