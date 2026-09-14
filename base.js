import {Browser, Builder, By, until} from 'selenium-webdriver';

class BasePage {
     constructor(){
        this.driver = new Builder().forBrowser(Browser.CHROME).build();
        this.userName = By.name("username");
        this.passWord = By.name("password");
        this.submit = By.xpath("//button[@type='submit']");
     }

    async browserOpen(url){
        await this.driver.get(url);
    }

    async enterUserName(){
        const field = await this.driver.wait(
            until.elementLocated(this.userName),
            10000
        );
        // extra safety: wait until it's actually visible/interactable
        await this.driver.wait(until.elementIsVisible(field), 10000);
        await field.sendKeys("Admin");
    }

    async enterPassword(){
        const field = await this.driver.wait(
            until.elementLocated(this.passWord),
            10000
        );
        await this.driver.wait(until.elementIsVisible(field), 10000);
        await field.sendKeys("admin123");
    }

    async clicksubmit() {
        const button = await this.driver.wait(
            until.elementLocated(this.submit),
            10000
        );
        await this.driver.wait(until.elementIsVisible(button), 10000);
        await button.click();
    }

    async browserClose(){
        await this.driver.quit();
    }
}

const pages = new BasePage();
await pages.browserOpen("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await pages.enterUserName();
await pages.enterPassword();
await pages.clicksubmit();

await pages.browserClose();