import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
      }

      html {
        max-width: 992px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 2rem;
      }

      button,
      input,
      select {
        margin: 0;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      img,
      video {
        height: auto;
        max-width: 100%;
      }

      blockquote {
        padding: 12px 24px;
        border-left: 5px solid #78c0a8;
        line-height: 1.6;
        background: #ededed;
        margin: 0;
      }

      blockquote p {
        color: #333333;
        margin: 0;
      }
    `}
  />
);
