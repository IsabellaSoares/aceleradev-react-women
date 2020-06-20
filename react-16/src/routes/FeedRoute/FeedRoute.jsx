import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch('	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  useEffect(() => {
    fetch('	https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, [users]);

  const getUserById = (userId) => users.find((user) => userId === user.id);

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserById} />
      )}

      {/* <Posts posts={posts} /> */}
    </div>
  );
};

export default FeedRoute;
