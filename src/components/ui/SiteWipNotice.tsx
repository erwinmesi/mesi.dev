import React from 'react';

function SiteWipNotice() {
  return (
    <div className="bg-gray-500 text-gray-100 text-sm text-center p-4">
      🚧 I am currently developing a new version of this website 🚧
      <br />
      Go to{' '}
      <a href="https://v2.mesi.dev" className="underline font-medium">
        v2.mesi.dev
      </a>{' '}
      to view its current state.
    </div>
  );
}

export default SiteWipNotice;
