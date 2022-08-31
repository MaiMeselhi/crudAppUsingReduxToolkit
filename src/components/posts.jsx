import React, { useState } from "react";
import { addPost, deletePost, editPost } from "../redux/postsSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

export default function Posts() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
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
                              <button
                                  onClick={() => {
                                      setEdit(true);
                                      setId(post.id);
                                  }}
                              >
                                  Edit{" "}
                              </button>
                              <button
                                  onClick={() => {
                                      dispatch(deletePost({ id: post.id }));
                                  }}
                              >
                                  Delete
                              </button>
                              <br />
                              {edit && id == post.id && (
                                  <>
                                      <input
                                          type="text"
                                          placeholder="edit title"
                                          onChange={(e) =>
                                              setEditTitle(e.target.value)
                                          }
                                      />
                                      <input
                                          type="text"
                                          placeholder="edit description"
                                          onChange={(e) =>
                                              setEditDescription(e.target.value)
                                          }
                                      />
                                      <button
                                          onClick={() => {
                                              dispatch(
                                                  editPost({
                                                      id: post.id,
                                                      title: editTitle,
                                                      description:
                                                          editDescription,
                                                  })
                                              );
                                              setEdit(false);
                                          }}
                                      >
                                          Edit
                                      </button>
                                  </>
                              )}
                          </div>
                      ))
                    : "there no posts"}
            </div>
        </div>
    );
}
