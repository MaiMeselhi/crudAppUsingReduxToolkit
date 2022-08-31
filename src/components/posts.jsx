import React, { useState } from "react";
import { addPost, deletePost } from "../redux/postsSlice";
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
                    value={title}
                    placeholder="Enter Your Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    placeholder="Enter Your Desciption"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    onClick={() => {
                        dispatch(
                            addPost({
                                id: posts.length + 1,
                                title,
                                description,
                            })
                        );
                        setTitle("");
                        setDescription("");
                    }}
                >
                    Add Post
                </button>
            </div>
            <div className="posts">
                {posts.length > 0
                    ? posts.map((post) => (
                          <div className="post" key={post.id}>
                              <h2>{post.title}</h2>
                              <p>{post.description}</p>
                              <button>add post</button>
                              <button
                                  onClick={() => {
                                      dispatch(deletePost({ id: post.id }));
                                  }}
                              >
                                  delete post
                              </button>
                          </div>
                      ))
                    : "there no posts"}
            </div>
        </div>
    );
}
