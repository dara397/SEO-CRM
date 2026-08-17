import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Server entry used only at build time by scripts/prerender.mjs.
 * Returns the fully rendered markup for a single route.
 */
export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>,
  );
}

export { PRERENDER_ROUTES } from './seo';
