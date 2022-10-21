import { css, Global, Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  html,
  body {
    margin: 0;
    padding: 0;
    color: ${theme.fontColor};
    background-color: ${theme.bgColor};
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
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

  .utterances {
    max-width: 100% !important;
  }
`;

export const GlobalStyles = <Global styles={style} />;
