'use client';

function HomeSkills() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="mb-4">
        <h2 className="font-semibold text-base">My Tech Stack</h2>
        <p className="text-sm text-gray-400">A snapshot of the tools and technologies I work with:</p>
      </div>
      <div className="about__content text-grey-300 space-y-6">
        <div>
          <h3 className="mb-1.5 font-medium">Front-end:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>JavaScript, TypeScript, ES6+, Vue.js, Nuxt.js, React.js, Next.js</li>
            <li>CSS, SASS, SCSS, CSS Modules</li>
            <li>
              TailwindCSS, WindiCSS, UnoCSS, Material UI, Element UI, Semantic
              UI, Bootstrap, Vuetify, Materialize
            </li>
            <li>Redux, MobX, Vuex, Pinia</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 font-medium">Back-end:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Laravel, Firebase, Node / Express</li>
            <li>Python (Web Scraping, Browser Automation)</li>
            <li>Nginx, Cloudflare</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 font-medium">Testing:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Jest, Puppeteer</li>
            <li>Selenium</li>
            <li>PHPUnit</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 font-medium">Web Design:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Figma, Adobe XD</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 font-medium">Mobile:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>React Native, Ionic Vue</li>
            <li>Progressive Web Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 font-medium">Databases:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              MySQL, MongoDB, Firebase: Realtime Database | Cloud Firestore |
              Storage
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 font-medium">CMS:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Strapi, Contentful</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeSkills;
