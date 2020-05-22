const timeout = process.env.JEST_TEST_TIMEOUT

describe(
  'Basic Navigation',
  () => {

    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.setViewport( { 'width' : 1024, 'height' : 768 } );
      await page.goto(process.env.MAP_URL)
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      await page.waitFor(2000)
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('Map demos')
    })

    it('open leaflet-vector1.html', async () => {
      await page.screenshot({ path: "/app/screenshots/1.jpg" })
      await clickByText(page, "leaflet-vector1.html")

      await page.waitForSelector('.leaflet-control-zoom-in')
      await page.screenshot({ path: "/app/screenshots/2.jpg" })
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('contributors')
    })

    it('navigate map', async () => {
      await page.waitForSelector('.leaflet-control-zoom-in')
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(200)
      await page.click('.leaflet-control-zoom-in')
      await page.waitFor(1000)
      await page.screenshot({ path: "/app/screenshots/3.jpg" })
    })

  },
  timeout
)

const clickByText = async function(page, text, element) {
  element = element || 'a';
  const splitedQuotes = text.replace(/'/g, `', "'", '`);
  escapedText = `concat('${splitedQuotes}', '')`;
  xpath = `//*[text()[contains(., ${escapedText})]]`;
  const elements = await page.$x(xpath);
  if(elements.length > 0) {
      for(i in elements) {
          e = elements[i];
          if(await e.isIntersectingViewport()) {
              await e.click();
              return;
          }
      }
  }
  else {
      console.log(xpath);
  }
  throw new Error(`Link not found: ${text}`);
};

