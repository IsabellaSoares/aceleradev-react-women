import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser }) => {
  const { avatar, name, username } = infoUser;

  return (
    <article data-testid="user" className="post">
      <header className="post__header"></header>
    </article>
  );
};

export default User;
