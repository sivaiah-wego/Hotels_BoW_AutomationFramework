export const testdir = 'tests'
export const timeout = 60000
export const retries = 0
export const reporter = [
  ['html'],
  ['junit', {outputFile: 'results.xml'}],
  ['json', {outputFile: 'results.json'}],
  ['allure-playwright',{outputFolder:'my-allure-results'}]

]
export const projects = [
  {
    name: 'chrome',
    use: {
      browserName: 'chromium',
      channel: 'chrome',
      headless: false,
      viewport: { width: 1720, height: 850 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure'

    }
  },
  {
    name: 'Firefox',
    use: {
      browserName: 'firefox',
      headless: true,
      ignoreHTTPSErrors: true,
      viewport: { width: 1720, height: 850 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
      launchOptions: {
        slowMo: 200
      }
  }
},
{
  name: 'Safari',
    use: {
      browserName: 'webkit',
      viewport: { width: 1720, height: 850 },
      ignoreHTTPSErrors: true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
}
},
{
  name: 'Edge',
    use: {
      browserName: 'chromium',
      channel: 'msedge',
      ignoreHTTPSErrors: true,
      viewport: { width: 1720, height: 850 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
      launchOptions: {
        slowMo: 100
      }
  }
}


]