function HomeAbout() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="mb-3 font-semibold">About</h2>
      <div className="about__content text-grey-300 space-y-6">
        <p>
          Erwin, a Full-Stack Web and Hybrid Mobile Developer with vast
          experience in coding different Web Frameworks.
        </p>

        <p>I handle both ends of the development from the ground up.</p>

        <div>
          <h3 className="mb-2">Have already worked with:</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Single and Multi-Page Applications</li>
            <li>Progressive Web Apps</li>
            <li>Mobile-Responsive WebApps</li>
            <li>Hybrid Mobile Apps</li>
            <li>RESTful Web Services</li>
            <li>Web Scraping</li>
            <li>Browser Automation</li>
          </ul>
        </div>
      </div>

      <h2 className="mb-3 font-semibold mt-12">My Tech Stack</h2>
      <div className="about__content text-grey-300 space-y-6">
        <div>
          <h4 className="mb-1.5 font-medium">Front-end:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>JavaScript, TypeScript, ES6+, Vue, Nuxt, React, Next</li>
            <li>CSS, SASS, SCSS, CSS Modules</li>
            <li>
              TailwindCSS, WindiCSS, UnoCSS, Material UI, Element UI, Semantic
              UI, Bootstrap, Vuetify, Materialize
            </li>
            <li>Redux, MobX, Vuex, Pinia</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 font-medium">Back-end:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>Laravel, Firebase, Node / Express</li>
            <li>Python (Web Scraping, Browser Automation)</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 font-medium">Testing:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>Jest, Puppeteer</li>
            <li>Selenium</li>
            <li>PHPUnit</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 font-medium">Web Design:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>Figma, Adobe XD</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 font-medium">Mobile:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>React Native, Ionic Vue</li>
            <li>Progressive Web Apps</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 font-medium">Databases:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              MySQL, MongoDB, Firebase: Realtime Database | Cloud Firestore |
              Storage
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 font-medium">CMS:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>Strapi, Contentful</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;