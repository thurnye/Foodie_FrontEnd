// import React, { useEffect, useRef } from 'react';
// import { createRoot } from 'react-dom/client';
// import * as WebTest from '../integratedApps/dist/bundle.js';

// const ErrorBoundary = ({ children }) => {
//     return <React.StrictMode>{children}</React.StrictMode>;
// };


// const Forum = () => {
//     const rootRef = useRef(null);
//     const root = useRef(null);

//     useEffect(() => {
//         if (!root.current) {
//             root.current = createRoot(rootRef.current);
//         }
//         root.current.render(<WebTest />);
//     }, []);

//     return (
//         <div className='ForumPage'>
//             <section className='WeConContainer' ref={rootRef}>
//                 <ErrorBoundary>
//                     {root.current && root.current.render(<WebTest />)}
//                 </ErrorBoundary>
//             </section>
//         </div>
//     );
// };

// export default Forum;


// src/BundleContent.js
import React, { useState, useEffect } from 'react';

function Forum() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    import('../integratedApps/dist/bundle.js')
      .then((module) => {
        // Assuming your bundle file exports a content variable
        setContent(module.default);
      })
      .catch((error) => {
        console.error('Error loading bundle:', error);
      });
  }, []);

  return (
    <div>
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <p>Loading content...</p>
      )}
    </div>
  );
}

export default Forum;

