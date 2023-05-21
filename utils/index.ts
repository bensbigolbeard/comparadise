import { baseExists, compareScreenshots, onAfterScreenshot } from './screenshots';

export function setupVisualTests(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
  on('after:screenshot', onAfterScreenshot);
  on('task', {
    baseExists,
    compareScreenshots,
    log: (message: string) => {
      console.log(message);
      return null;
    }
  });

  return config;
}

export { matchScreenshot } from './match-screenshot';
