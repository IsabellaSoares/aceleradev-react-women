import React, { useState } from 'react';

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const findStoryById = (storyId) =>
    stories.find((story) => storyId === story.id);

  const handleClick = (story) => {
    const foundStory = findStoryById(story.id);
    const profile = getUserHandler(story.userId);

    setSelectedHistory(foundStory);
    setSelectedProfile(profile);
    toggleShowStory(!showStory);
  };

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">
          {stories.map((story, index) => {
            const profile = getUserHandler(story.userId);

            return (
              <button
                className={`user__thumb ${
                  index === 0 && 'user__thumb--hasNew'
                }`}
                onClick={() => handleClick(story)}
              >
                <div className="user__thumb__wrapper">
                  <img src={profile.avatar} alt={profile.name} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => toggleShowStory(!showStory)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
