import { useConfigStore } from '@/store/Config';

const config = useConfigStore.getState();

const content = {
  list: [
    {
      id: 6,
      role: 'Full-Stack Web and Cross-Platform Mobile Developer',
      company: 'Upwork',
      companyURL: config.upwork_url,
      description: 'Full-time freelancing (3rd time)',
      dates: [
        'Sep 2022 - Present',
        'Feb 2018 - Jan 2019',
        'Oct 2017 - Dec 2017',
      ],
      tools: [
        'Vue.js',
        'Nuxt.js',
        'React.js',
        'Next.js',
        'Bootstrap',
        'Tailwind',
        'Flask',
        'Django',
        'Laravel',
        'Strapi',
        'Node',
      ],
    },
    {
      id: 3,
      role: 'Senior Web Developer',
      company: 'i-Cube Digital Solutions, Inc.',
      companyURL: 'https://i-cube-digitalsolutions.com/',
      description:
        'Handled projects using various front-end and back-end tools.<br><br>Also did Project Management tasks — talking to clients, handling Scrum meetings, setting up sprints and handling project requirements and documentations.',
      dates: ['Jan 2019 - Sep 2022'],
      tools: [
        'Vue.js',
        'Nuxt.js',
        'React.js',
        'Python',
        'Laravel',
        'Jira',
        'Confluence',
      ],
    },
    {
      id: 2,
      role: 'Associate Software Engineer',
      company: 'Accenture',
      companyURL: 'https://www.accenture.com/ph-en/',
      description:
        'I applied to be a Coder but was assigned as a SAP Consultant.<br><br>I resigned to follow my passion — Coding.',
      dates: ['Dec 2017 - Feb 2018'],
      tools: ['SAP HCM', 'SAP MM'],
    },
    {
      id: 1,
      role: 'Software Development Engineer',
      company: 'Solution Resource Inc.',
      companyURL: 'https://solutionsresource.com/',
      description: null,
      dates: ['Apr - Oct 2017'],
      tools: ['Angular JS', 'jQuery', 'Java Spring', 'Laravel', 'Code Igniter'],
    },
  ],
};

export default content;
