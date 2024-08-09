import React from "react";
import { Link } from 'react-router-dom';
import { Button, Text } from '@mantine/core';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/">
              <Text
                size="md"
                variant="gradient"
                gradient={{ from: 'violet', to: 'indigo', deg: 288 }}
                fw={500}
              >Home
              </Text>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <Text
                size="md"
                variant="gradient"
                gradient={{ from: 'violet', to: 'indigo', deg: 288 }}
                fw={500}
              >Projects
              </Text>
            </Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeanmarcos-perez/" target="_blank" rel="noopener noreferrer">
              <Text
                size="md"
                variant="gradient"
                gradient={{ from: 'violet', to: 'indigo', deg: 288 }}
                fw={500}
              >LinkedIn
              </Text>
            </a>
          </li>
          <li>
            <a href="https://github.com/jeanmarcosp" target="_blank" rel="noopener noreferrer">
              <Text
                size="md"
                variant="gradient"
                gradient={{ from: 'violet', to: 'indigo', deg: 288 }}
                fw={500}
                mr="lg"
              >GitHub
              </Text>
            </a>
          </li>
          <li>
            <Button
              variant="gradient"
              gradient={{ from: 'violet', to: 'indigo', deg: 288 }}
              size="sm"
              radius="md"
            >
              <a href="jeanmarcos.me/assets/Jeanmarcos_Perez_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
