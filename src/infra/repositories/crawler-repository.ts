
import { CrawlerHandleRepository } from '@/data/contracts'
import puppeteer, { Browser, Page } from 'puppeteer'
import { SitesCrawler, tuplaEnumsBusines } from '@/infra/enum'

export class CrawlerRepository implements CrawlerHandleRepository {
  async handle (url: string): Promise<CrawlerHandleRepository.CrawlerModel> {
    const config = await createConfig()
    await crowler(url,config)

    // const busine = await getBusineForURL(url)
    // const tagBusines = await verifyBusines(busine)

    const price = await login('[data-testid="stereo-login_menu-unsigned_user_state-container"]', config)
    await new Promise(resolve => setTimeout(resolve, 1000))
    // const price = await getPriceAndTitle(tagBusines.Price, config)
    // await new Promise(resolve => setTimeout(resolve, 1000))
    
    // const title = await getPriceAndTitle(tagBusines.Title, config)
    // await new Promise(resolve => setTimeout(resolve, 1000))
    
    // const description = await getDescription(tagBusines.Description, config)
    // const img = await getImage(tagBusines.IMG ,config)
    await config.browser.close()

    return null
  }
}

const verifyBusines = async (busine: string): Promise<any> => {
  const enumsBusines = await tuplaEnumsBusines()
  const [CasasBahia, Magazineluiza, pontofrio, amaro, natura] = enumsBusines
  switch (busine) {
    case SitesCrawler.CasasBahia:
      return CasasBahia.CasasBahia
    case SitesCrawler.Magazineluiza:
      return Magazineluiza.Magazineluiza
    case SitesCrawler.PontoFrio:
      return pontofrio.PontoFrio
    case SitesCrawler.Amaro:
      return amaro.Amaro
    case SitesCrawler.Natura:
      return natura.Natura
    default:
  }
}

const crowler = async (url: string,config: ConfigCrawl): Promise<string> => {
  await config.page.goto(url)
  return await config.page.evaluate(() => document.body.innerHTML)
}

const createConfig = async (): Promise<ConfigCrawl> => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 10, ignoreHTTPSErrors: true ,args: ['--proxy-auto-detect', '--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0)
  await page.setViewport({ width: 0, height: 0, deviceScaleFactor: 1 })
  return { browser, page }
}

const login = async (tagBusine: string, config: ConfigCrawl): Promise<any> => {
  const { page } = config

  const accessButton = await page.$(tagBusine);
  await accessButton.click();
  const login = 'input[name=login]'

  // Aguarde a página de login carregar
  console.log("antes do awayt")
  await page.waitForSelector('#LoginBox-form')

  console.log("Passouuuuu")
  await page.$eval(login, el => el.value = 'Adenosine triphosphate');
  // Preencha o campo de usuário
  await page.type(login, 'seu_usuario');

  // // Preencha o campo de senha
  // await page.type('#j_password', 'sua_senha');

  // Clique no botão de login
  // const loginButton = await page.$('#login-button');
  // await loginButton.click();

  // Aguarde o redirecionamento para a página inicial
  await page.waitForNavigation();

  // await page.type(tagBusine, 'Headless Chrome');
  // await page.click(tagBusine);
  // await new Promise(resolve => setTimeout(resolve, 1000))
  // const tagBusine2 = "class='FormGroup-inputGroup FormGroup-inputGroup--long' > name='login'"
  // await page.waitForSelector(tagBusine2)
  
  // const links = await page.evaluate(tagBusine2 => {
  //   const anchor = document.querySelector(tagBusine2)
  //   anchor.ariaValueNow = "marcos"
  //   return anchor.textContent.split('|')[0].trim()
  // }, tagBusine2)
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  return null
}
const getDescription = async (tagBusine: string, config: ConfigCrawl): Promise<any> => {
  const { page } = config

  await page.waitForSelector(tagBusine)
  
  const links = await page.evaluate(tagBusine => {
    const anchor = document.querySelector(tagBusine)
    return anchor.textContent.split('|')[0].trim()
  }, tagBusine)

  return links
}
const getPriceAndTitle = async (tagBusine: string, config: ConfigCrawl): Promise<any> => {
  const { page } = config

  await page.waitForSelector(tagBusine)

  const links = await page.evaluate(tagBusine => {
    const anchor = document.querySelector(tagBusine)
    return anchor.textContent.split('|')[0].trim()
  }, tagBusine)

  return links
}

const getImage = async (tagBusine: string, config: ConfigCrawl): Promise<any> => {
  const { page } = config
  await page.waitForSelector(tagBusine)
  const links = await page.evaluate(tagBusine => {
    const anchor = document.querySelector(tagBusine)
    return anchor.getAttribute('src')
  }, tagBusine)
  return links
}
const getBusineForURL = async (url: string): Promise<string> => {
  const indexofFinal = url.indexOf('.com')
  let indexofTexto = url.indexOf('www.')

  indexofTexto = indexofTexto === -1 ? (url.indexOf('//') + 2) : (indexofTexto + 4)
  
  return url.substring(indexofTexto,indexofFinal)
}

type ConfigCrawl = {
  browser: Browser
  page: Page
}
