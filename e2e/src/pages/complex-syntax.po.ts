import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {ComplexSyntaxElementId} from '../../../src/app/core/components/element-ids';
import {AppRoutePrefixes} from '../../../src/app/router-links';
import {promise as wdpromise} from 'selenium-webdriver';

export class ComplexSyntaxPage {

  getAddToListBtn(): ElementFinder {
    return element(by.id(ComplexSyntaxElementId.LIST_ADD_BTN));
  }

  getButtonWithText(text: string): ElementFinder {
    return element(by.buttonText(text));
  }

  getDropdown(): ElementFinder {
    return element(by.id(ComplexSyntaxElementId.DROPDOWN));
  }

  getDropdownOptionByText(text: string): ElementFinder {
    return element(by.cssContainingText('option', text));
  }

  getDropdownOptions(): ElementArrayFinder {
    return element(by.id(ComplexSyntaxElementId.DROPDOWN)).all(by.tagName('option'));
  }

  getDropdownValueBelow(): ElementFinder {
    return element(by.id(ComplexSyntaxElementId.DROPDOWN_VALUE_BELOW));
  }

  getInput(): ElementFinder {
    return element(by.id(ComplexSyntaxElementId.INPUT));
  }

  getInputCopy(): ElementFinder {
    return element(by.id(ComplexSyntaxElementId.INPUT_COPY));
  }

  getListElementsNumber(): wdpromise.Promise<number> {
    return element(by.id(ComplexSyntaxElementId.LIST)).all(by.tagName('li')).count();
  }

  getPopup(): ElementFinder {
    return element(by.id(ComplexSyntaxElementId.POPUP));
  }

  navigateTo(): wdpromise.Promise<any> {
    return browser.get(`/${AppRoutePrefixes.CUCUMBER_PREFIX}`);
  }
}
