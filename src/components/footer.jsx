import React from 'react';
import { Text } from '@mantine/core';

function Footer() {
  return (
    <nav className="foot">
      <Text
        size="md"
        variant="gradient"
        gradient={{ from: 'violet', to: 'indigo', deg: 288 }}
        fw={500}
      >{new Date().getFullYear()} Jeanmarcos Perez. All rights reserved.
      </Text>
    </nav>
  );
}

export default Footer;
