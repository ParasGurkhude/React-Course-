import React, { useState, useEffect } from 'react';

const DocumentTitleUpdater = () => {
  const [title, setTitle] = useState('Default Title');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <h1>Document Title Updater</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new title"
      />
    </div>
  );
};

export default DocumentTitleUpdater;
