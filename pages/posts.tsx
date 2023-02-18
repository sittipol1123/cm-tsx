import { useRouter } from "next/router";
import React from "react";

const PostPage: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <div>
      <h1>Post {postId ?? "not found"}</h1>
      <p>This is the post page.</p>
    </div>
  );
};

export default PostPage;