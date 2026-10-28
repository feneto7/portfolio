import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app/App';
import '@/styles/globals.css';
import { locale } from '@/i18n/locale';
import { seo } from '@/data/seo';

document.documentElement.lang = locale;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute('content', seo.description);
document
  .querySelector('meta[property="og:locale"]')
  ?.setAttribute('content', locale.replace('-', '_'));
document
  .querySelector('meta[property="og:title"]')
  ?.setAttribute('content', seo.title);
document
  .querySelector('meta[property="og:description"]')
  ?.setAttribute('content', seo.socialDescription);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
