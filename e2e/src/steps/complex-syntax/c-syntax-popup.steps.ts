/* tslint:disable:no-unused-expression */
/* Because of Chai "expect" error - no-unused-expression. See more: https://github.com/palantir/tslint/issues/2614 */

import {Given, Then} from '@cucumber/cucumber';
import {ComplexSyntaxPage} from '../../pages/complex-syntax.po';
import {expect} from 'chai';

const complexSyntaxPage = new ComplexSyntaxPage();

Given(/^the popup is visible$/, async () => {
  /*
    isPresent   - the element is in the DOM (but can be invisible!) or not
    isEnabled   - the element is enabled e.g. a user can click it
    isDisplayed - the element is visible or not and throws an exception if it is not in the DOM
    isSelected  - the element (for example checkbox/radio) is selected or not
   */
  await complexSyntaxPage.getPopup().isDisplayed();
});

Then(/^the popup is gone$/, async () => {
  expect(await complexSyntaxPage.getPopup().isPresent()).to.be.false;
});
