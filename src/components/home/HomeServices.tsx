'use client';

function HomeServices() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="mb-4">
        <h2 className="font-semibold text-base">Professional Services</h2>
        <p className="text-sm text-gray-400">As a developer who works full-stack, I offer development for:</p>
      </div>
      <div className="space-y-12 text-grey-200">
        <ul className="list-disc pl-4 space-y-1">
          <li>Single-Page Applications (SPAs)</li>
          <li>Multi-Page (MVC) Applications</li>
          <li>Cross Platform Mobile Applications</li>
          <li>RESTful Web Services / APIs</li>
          <li>SEO-optimized Landing Pages and Marketing Websites</li>
          <li>Custom Content Management Systems (CMS) Solutions</li>
          <li>Web Scraping</li>
          <li>Browser Automation</li>
        </ul>
      </div>
    </section>
  );
}

export default HomeServices;
