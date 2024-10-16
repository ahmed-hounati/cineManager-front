import React from "react";

export default function Comments({ comments }) {
  return (
    <div className="text-white space-y-4">
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold">
                {comment.user ? comment.user.name : "Anonymous"}
              </span>
            </div>
            <p className="text-gray-300">{comment.text}</p>{" "}
            {/* Assuming comment has a 'content' field */}
            <small className="text-gray-500">
              Posted on: {new Date(comment.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No comments yet.</p>
      )}
    </div>
  );
}
