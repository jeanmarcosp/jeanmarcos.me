export interface Project {
  id: number;
  language: string;
  title: string;
  description: string;
  link: string;
}

const projectData: Project[] = [
  {id:10,
    language: 'TypeScript',
    link: 'https://github.com/jeanmarcosp/guided',
    title: 'Guided Maps',
    description: 'Used Claude Code to build and ship a curated map-based guide iOS app, using React Native and TypeScript with a Supabase backend for the database, authentication, real-time sync, and cloud storage.'
  },
  {
    id: 6,
    language: 'JavaScript',
    title: 'Literary Hub',
    description:
      'Literary Hub is a Spotify x Tik Tok take on poetry that lets you read public domain poetry, learn about it, and curate your own collections of your favorite poems.',
    link: 'https://github.com/jeanmarcosp/literary-hub',
  },
  {
    id: 9,
    language: 'JavaScript',
    title: 'Biblio',
    description:
      'A community book exchange whose main goals are to help users save money, encourage reading, reduce overconsumption, and build community',
    link: 'https://github.com/jeanmarcosp/biblio-frontend',
  },
  {
    id: 3,
    language: 'TypeScript',
    title: 'Personal Website',
    description:
      'Used Claude Code to create a personal website to showcase my projects and resume. Coded using TypeScript and React.',
    link: 'https://github.com/jeanmarcosp/jeanmarcos.me',
  },
  {
    id: 1,
    language: 'C',
    title: 'Tiny Search Engine',
    description:
      'Developed a web crawler that retrieves and store webpages recursively, an indexes web document, and a handles search queries.',
    link: 'https://github.com/jeanmarcosp/tiny-search-engine',
  },
  {
    id: 2,
    language: 'Python',
    title: 'Blog Database',
    description:
      'Created a blog engine using a MongoDB database cluster, PyMongo, and Python. Kept track of posts, comments, delete and show functions.',
    link: 'https://github.com/jeanmarcosp/blog-database',
  },
  {
    id: 4,
    language: 'Java',
    title: 'Part of Speech Tagger',
    description:
      'Leveraged a hidden Markov model and the Viterbi algorithm to assign parts of speech to individual words with maximum likelihood',
    link: 'https://github.com/jeanmarcosp/part-of-speech-tagger',
  },
  {
    id: 5,
    language: 'Python',
    title: 'Seamless Copy & Paste',
    description:
      'Used least squares and gradients to seamlessly blend an object or texture from a source image onto a target image.',
    link: 'https://github.com/jeanmarcosp/seamless-copy-paste',
  },
  {
    id: 7,
    language: 'Python',
    title: 'Computational Photography',
    description:
      'Course work including an image processing pipeline, an hdr imaging pipeline, lightfield and depth from focus, and photometric stereo.',
    link: 'https://github.com/jeanmarcosp/computational-photography',
  },
  {
    id: 8,
    language: 'Python',
    title: 'Machine Learning & Data Analysis',
    description:
      'Course work including gradient descent, regression, naïve bayes, binary classfication and sentiment analysis.',
    link: 'https://github.com/jeanmarcosp/machine-learning-data-analysis',
  },

];

export default projectData;
