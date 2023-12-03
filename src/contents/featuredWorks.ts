const content = {
  list: [
    // {
    //   id: 1,
    //   name: 'Cayman Yacht Charter',
    //   description: 'For booking yacht charters to explore the Cayman Islands.',
    //   date: '2023',
    //   role: 'Full-Stack Developer',
    //   type: 'Booking Website',
    //   archi: 'MVC',
    //   url: undefined,
    //   tools: ['Tailwind CSS', 'Vue.js', 'Python', 'Flask']
    // },
    // {
    //   id: 2,
    //   name: 'Humble Nature',
    //   description: 'For selling designer furnitures.',
    //   date: '2023',
    //   role: 'Front-end Developer',
    //   type: 'E-commerce Website',
    //   archi: 'MVC',
    //   url: 'https://humblenature.com',
    //   tools: ['Tailwind CSS', 'Vue.js']
    // },
    // {
    //   id: 3,
    //   name: 'AI-Powered Website for Generating SEO Articles',
    //   description: 'A blogging website that integrates with any existing website, offering a dedicated "blogs" page to enhance SEO with informative AI-generated articles.',
    //   date: '2023',
    //   role: 'Front-end Developer',
    //   archi: 'MVC',
    //   type: 'Blogging Website',
    //   tools: ['Vue.js', 'Tailwind']
    // },
    {
      id: 4,
      name: 'KotApp Website',
      description: 'Marketing Website for KotApp Web App',
      date: '2023',
      role: 'Front-end Developer',
      type: 'Marketing Website',
      archi: 'SSG',
      url: 'https://kotapp.io',
      tools: ['Nuxt.js', 'Tailwind']
    },
    // {
    //   id: 5,
    //   name: 'Soumission Rapide — Next.js revamp',
    //   description: 'Migrated the Wix website to Next.js version.',
    //   date: '2022',
    //   role: 'Front-end Developer',
    //   type: 'Marketing Website',
    //   archi: 'SSG',
    //   url: 'https://www.soumissionrapide.com',
    //   tools: ['Next.js', 'Tailwind', 'GraphQL']
    // },
    {
      id: 6,
      name: 'Google Adwords Client Portal',
      description: 'Client Portal for a Google Adwords Advertising Agency.',
      date: '2022',
      role: 'Front-end Developer',
      type: 'Web Application',
      archi: 'SPA',
      url: undefined,
      tools: ['Vue.js', 'Tailwind', 'Pinia']
    },
    {
      id: 7,
      name: 'NodeLife.io',
      description: 'Free crypto node & staking investment tracker.',
      date: '2022',
      role: 'Front-end Developer',
      type: 'Web Application',
      archi: 'SPA',
      url: 'https://twitter.com/NodeLife_io',
      tools: ['Vue.js', 'Tailwind', 'Pinia', 'Apex Charts']
    },
    {
      id: 8,
      name: 'Enably',
      description: 'A Multi-Organization CRM Software.',
      date: '2021',
      role: 'Front-end Developer',
      type: 'Web Application',
      archi: 'SPA',
      url: 'https://www.enably.no',
      tools: ['Vue.js', 'Bootstrap', 'Vuex']
    },
    {
      id: 9,
      name: 'Word Feud Rules',
      description: undefined,
      date: '2021',
      role: 'Full-Stack Developer',
      type: 'Online Tool',
      archi: 'MVC',
      url: 'https://wordfeudrules.com',
      tools: ['Tailwind', 'Laravel', 'MySQL']
    },
    {
      id: 10,
      name: 'Socialays Website (SEO Improvements)',
      description: 'Marketing Website for the Socialays Web App',
      date: '2021',
      role: 'Front-end Developer',
      type: 'Marketing Website',
      archi: 'SSR',
      url: 'https://socialays.com',
      tools: ['Nuxt.js', 'Bootstrap']
    },
    {
      id: 11,
      name: 'Socialays Web App (Front-end optimizations)',
      description: 'An AI-Based Social Media Assistant.',
      date: '2021',
      role: 'Front-end Developer',
      type: 'Web Application',
      archi: 'SPA',
      url: 'https://app.socialays.com',
      tools: ['Vue.js', 'Bootstrap', 'Vuex']
    },
    {
      id: 12,
      name: 'Sunnyside Ad Banner',
      description: 'Ad Banner for Sunnyside: A Medical & Recreational Cannabis Dispensaries',
      date: '2021',
      role: 'Front-end Web Developer',
      type: 'HTML Ad Banner',
      archi: undefined,
      url: undefined,
      tools: ['HTML', 'CSS', 'JS', 'GSAP']
    },
    {
      id: 13,
      name: 'Proscreen',
      description: 'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
      date: '2020',
      role: 'Front-end Developer',
      type: 'Web Application',
      archi: 'SPA',
      url: 'https://proscreen.com',
      tools: ['Vue.js', 'Tailwind', 'Vuex']
    },
    {
      id: 14,
      name: 'KotApp Web App',
      description: 'Web-based CRM for KotApp Mobile App.',
      date: '2020',
      role: 'Front-end Developer',
      type: 'Web Application',
      archi: 'SPA',
      url: 'https://kotapp.io',
      tools: ['Nuxt.js', 'Tailwind', 'Vuex']
    },
    {
      id: 15,
      name: 'Dutch Assets Group Web Portal',
      description: 'Corporate financing services for companies and private entrepreneurs.',
      date: '2019',
      role: 'Full-Stack Developer',
      type: 'Web Application',
      archi: 'MVC',
      url: 'https://portal.dag-assetscan.nl',
      tools: ['Laravel', 'Vue.js', 'Bootstrap', 'Digital Ocean Spaces']
    },
    {
      id: 16,
      name: 'Sharepoint Web Parts',
      description: 'Created Web Parts for a Sharepoint Intranet Web App',
      date: '2019',
      role: 'Front-end Developer',
      type: 'Sharepoint Web Parts',
      archi: 'SPA',
      url: undefined,
      tools: ['React', 'MobX', 'Material UI']
    },
    {
      id: 17,
      name: 'Google Ads Web Scraper',
      description: 'A lead-generation web app that collects information on small and medium enterprises engaged in Google Ads.',
      date: '2019',
      role: 'Full-Stack Developer',
      type: 'Web Application',
      archi: 'SPA + RESTful Web Service',
      url: undefined,
      tools: ['Nuxt.js', 'Element UI', 'Laravel', 'Python Web Scraping Script using Beautiful Soup']
    },
    // {
    //   id: 18,
    // name: undefined,
    //   description: undefined,
    //   date: undefined,
    //   role: undefined,
    //   type: undefined,
    //   archi: undefined,
    //   url: undefined,
    //   tools: undefined
    // },
  ]
}

export default content
