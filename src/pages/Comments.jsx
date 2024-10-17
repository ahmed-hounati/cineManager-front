import React from "react";

export default function Comments({ comments, handleDelete, handleUpdate }) {
  const authUserId = JSON.parse(localStorage.getItem("user"))._id;

  return (
    <div className="text-white space-y-4 px-8 pb-2">
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold">
                {comment.user ? comment.user.name : "Anonymous"}
              </span>
            </div>
            <p className="text-gray-300">{comment.text}</p>
            <small className="text-gray-500">
              Posted on: {new Date(comment.createdAt).toLocaleDateString()}
            </small>

            {/* Show Delete and Update buttons only for the comment owner */}
            {comment.user && comment.user._id === authUserId && (
              <div className="flex space-x-4 mt-2">
                <button
                  onClick={() => handleUpdate(comment)}
                  className="text-[#B9F5DB] hover:underline"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(comment)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-400">No comments yet.</p>
      )}
    </div>
  );
}
