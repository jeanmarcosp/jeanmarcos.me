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
            c="white"
            ta="center"
            fw={1000}
          >{landingData.header}
          </Text>
        </div>
        <div className="description-div">
          <Text
            size="md"
            c="white"
            ta="center"
            fw={500}
          >{landingData.blurb}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Landing;
