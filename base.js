import {Browser, Builder} from 'selenium-webdriver';

class BasePage {
     constructor(){
        this.driver = new Builder().forBrowser(Browser.CHROME).build();
     }
    async browserOpen(url){
        await this.driver.get(url);
    }

      async browserClose(){
        await this.driver.quit();
    }
}

const pages = new BasePage();
pages.browserOpen("https://www.pornhub.com/view_video.php?viewkey=669811be30dce");
pages.browserClose();