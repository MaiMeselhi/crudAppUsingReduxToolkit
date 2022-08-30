import React, { useState } from "react";
import { addPost } from "../redux/postsSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

export default function Posts() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const posts = useSelector((state) => state.posts.items);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="form">
                <input
                    type="text"
                    placeholder="Enter Your Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Your Desciption"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(
                            addPost({
                                id: 1,
                                title,
                                description,
                            })
                        )
                    }
                >
                    Add Post
                </button>
            </div>
            <div className="posts">
                {posts.length > 0
                    ? posts.map((post) => (
                          <div className="post">
                              <h2>{post.title}</h2>
                              <p>{post.description}</p>
                              <button>add post</button>
                              <button>delete post</button>
                          </div>
                      ))
                    : "there no posts"}
            </div>
        </div>
    );
}
