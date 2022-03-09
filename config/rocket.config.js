import { rocketLaunch } from '@rocket/launch';
// import { rocketBlog } from '@rocket/blog';
// import { rocketSearch } from '@rocket/search';
// import { absoluteBaseUrlNetlify } from '@rocket/core/helpers';
// import { adjustPluginOptions } from 'plugins-manager';
// import { mdjsSetupCode } from '@mdjs/core';
// TODO: preset needs to be updated to use the new plugin manager
// import { codeTabs } from 'rocket-preset-code-tabs';
// import { customElementsManifest } from 'rocket-preset-custom-elements-manifest';

/**
 * Extracts the current applicable absoluteBaseUrl from Netlify system variables
 *
 * @param {string} fallback
 */
 export function absoluteBaseUrlNetlify(fallback) {
  let absoluteBaseUrl = fallback;

  switch (process.env.CONTEXT) {
    case 'production':
      absoluteBaseUrl = process.env.URL ?? '';
      break;
    case 'deploy-preview':
      absoluteBaseUrl = process.env.DEPLOY_URL ?? '';
      break;
    case 'branch-deploy':
      absoluteBaseUrl = process.env.DEPLOY_PRIME_URL ?? '';
      break;
    /* no default */
  }
  return absoluteBaseUrl;
}

/** @type {import('@rocket/cli/types/main').RocketCliOptions} */
export default {
  absoluteBaseUrl: absoluteBaseUrlNetlify('http://localhost:8080'),

  presets: [
    rocketLaunch(),
    // rocketBlog(),
    // rocketSearch(),
    // codeTabs({
    //   collections: {
    //     packageManagers: {
    //       npm: { label: 'NPM', iconHref: '/_merged_assets/_static/logos/npm.svg' },
    //       yarn: { label: 'Yarn', iconHref: '/_merged_assets/_static/logos/yarn.svg' },
    //       pnpm: { label: 'PNPM', iconHref: '/_merged_assets/_static/logos/pnpm.svg' },
    //     },
    //   },
    // }),
    // customElementsManifest(),
  ],

  // eleventy(eleventyConfig) {
  //   eleventyConfig.addTransform('fix-noscript', content =>
  //     content
  //       .replace(/&#x26;#x3C;(link|style)/g, '<$1')
  //       .replace(/&#x26;(link|style)/g, '<$1')
  //       .replace(/&#x3C;(link|style)/g, '<$1'),
  //   );
  // },

  // serviceWorkerName: 'sw.js',
  // pathPrefix: '/_site/',

  // emptyOutputDir: false,
};
