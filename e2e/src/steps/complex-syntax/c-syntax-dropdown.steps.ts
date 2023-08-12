import {Given, Then, When} from '@cucumber/cucumber';
import {ComplexSyntaxPage} from '../../pages/complex-syntax.po';
import {expect} from 'chai';

const complexSyntaxPage = new ComplexSyntaxPage();


Given(/^a user in on the cucumber page$/, () => {});


Given(/^a dropdown is visible$/, async () => {
  await complexSyntaxPage.getDropdown().isDisplayed();
});

Given(/^dropdown's values are equal to ([0-9]+)$/, async (numberOfElements: string) => {
  expect(await complexSyntaxPage.getDropdownOptions().count()).to.be.equal(+numberOfElements);
  await complexSyntaxPage.getDropdown().isDisplayed();
});

When(/^a user opens a dropdown$/, async () => {
  await complexSyntaxPage.getDropdown().click();
});

When(/^a user chooses a dropdown entry (.*)$/, async (entryText: string) => {
  await complexSyntaxPage.getDropdownOptionByText(entryText).click();
});

Then(/^dropdown's value (.*) is displayed below$/, async (valueToDisplay: string) => {
  expect(await complexSyntaxPage.getDropdownValueBelow().getText()).to.be.equal(valueToDisplay);
});
