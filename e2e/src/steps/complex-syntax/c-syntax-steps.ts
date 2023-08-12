/* tslint:disable:no-unused-expression */
/* Because of Chai "expect" error - no-unused-expression. See more: https://github.com/palantir/tslint/issues/2614 */

import {Given, When} from '@cucumber/cucumber';
import {ComplexSyntaxPage} from '../../pages/complex-syntax.po';
import {expect} from 'chai';

const complexSyntaxPage = new ComplexSyntaxPage();

/**
 * Check Given method's parameters - instead of Regex, you can pass a simple string.
 * For example:
 *    Given('user is on the cucumber page', async () => {
 *      await complexSyntaxPage.navigateTo();
 *    });
 */
Given(/^a user is on the cucumber page$/, async () => {
  await complexSyntaxPage.navigateTo();
});

Given(/^the button a (.*) is disabled$/, async (buttonText) => {
  expect(await complexSyntaxPage.getButtonWithText(buttonText).getAttribute('disabled')).to.eql('true');
});

Given(/^the button a (.*) is enabled$/, async (buttonText) => {
  expect(await complexSyntaxPage.getButtonWithText(buttonText).getAttribute('disabled')).not.to.eql('false');
});

When(/^a user click on a (.*) button$/, async (buttonText) => {
  await complexSyntaxPage.getButtonWithText(buttonText).click();
});
