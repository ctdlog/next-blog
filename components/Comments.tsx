import React from 'react';

const Comments = () => {
  return (
    <div
      ref={(elem) => {
        if (!elem) return;
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', 'ctdlog/next-blog-comments');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('theme', 'github-light');
        script.setAttribute('label', 'blog-comment');
        script.crossOrigin = 'anonymous';
        elem.appendChild(script);
      }}
    ></div>
  );
};

export default Comments;
