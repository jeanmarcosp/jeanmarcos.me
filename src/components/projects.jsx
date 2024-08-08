import React from 'react';
import {
  Badge,
  Button,
  Group,
  Text,
  Card,
} from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import projectData from '../data/projectData';

function Projects() {
  return (
    <div className="project-card-holder">
      {projectData.map((project) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder>

          <Group justify="space-between" mb="xs">
            <Text fw={500}>{project.title}</Text>
            <Badge color="violet">{project.langauge}</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {project.description}
          </Text>

          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button
              leftSection={<IconBrandGithub size={18} />}
              variant="gradient"
              gradient={{ from: 'violet', to: 'indigo', deg: 288 }}
              fullWidth
              mt="md"
              radius="md"
            >
              View on GitHub
            </Button>
          </a>

        </Card>
      ))}
    </div>
  );
}

export default Projects;
