import React, { useContext } from 'react';
import ThemeContext from '@/contexts/ThemeContext';

const Comments = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      ref={(elem) => {
        if (!elem) return;
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', 'ctdlog/next-blog-comments');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute(
          'theme',
          `${isDark ? 'photon-dark' : 'github-light'}`
        );
        script.setAttribute('label', 'blog-comment');
        script.crossOrigin = 'anonymous';
        elem.appendChild(script);
      }}
    ></div>
  );
};

export default Comments;
