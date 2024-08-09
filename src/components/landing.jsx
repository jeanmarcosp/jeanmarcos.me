import React from 'react';
import { Text } from '@mantine/core';
import landingData from '../data/landingData';

function Landing() {
  return (
    <div className="home-div">
      <div className="text-div">
        <div className="header-div">
          <Text
            size="xl"
            lh="xs"
            variant="gradient"
            gradient={{ from: 'violet', to: 'indigo', deg: 250 }}
            fw={1000}
          >{landingData.header}
          </Text>
        </div>
        <div className="description-div">
          <Text
            size="md"
            variant="gradient"
            gradient={{ from: 'violet', to: 'indigo', deg: 250 }}
            fw={500}
          >{landingData.blurb}
          </Text>
        </div>
      </div>
      <div className="image-div">
        <img src="/jeanmarcos.me/assets/landing-image.jpg" alt="aerial view of miami" />
      </div>
    </div>
  );
}

export default Landing;
