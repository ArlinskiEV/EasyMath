import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
	public navigateTo(): any { // tslint:disable-line
		return browser.get('/');
	}

	public getParagraphText(): any { // tslint:disable-line
		return element(by.css('app-root h1')).getText();
	}
}
