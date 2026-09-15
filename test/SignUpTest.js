import { SignUpPage } from "../page/SignUpPage.js";

const pages = new SignUpPage();
await pages.browserOpen("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await pages.enterUserName();
await pages.enterPassword();
await pages.clicksubmit();

//await pages.browserClose();