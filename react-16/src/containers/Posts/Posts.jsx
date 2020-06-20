import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div data-testid="posts" className="container">
    <section className="feed">
      {posts.map((post, index) => {
        const profile = getUserHandler(post.userId);

        return <Post key={index} userInfo={profile} postInfo={post} />;
      })}
    </section>
  </div>
);

export default Posts;
