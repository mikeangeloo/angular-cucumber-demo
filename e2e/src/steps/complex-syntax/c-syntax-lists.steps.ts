import {ComplexSyntaxPage} from '../../pages/complex-syntax.po';
import {Given, Then, When} from '@cucumber/cucumber';
import {expect} from 'chai';

const complexSyntaxPage = new ComplexSyntaxPage();

Given('the initial list size is equal {int}', async (numberOfElements: number) => {
  const numberOfElementsResult = await complexSyntaxPage.getListElementsNumber();
  expect(numberOfElementsResult).to.be.equal(numberOfElements);
});

Then('the list size ie equal {int}', async (numberOfElements: number) => {
  const numberOfElementsResult = await complexSyntaxPage.getListElementsNumber();
  expect(numberOfElementsResult).to.be.equal(numberOfElements);
});


When(/^a user add (.*) new elements to list$/, async (numberOfElements: number) => {
  for (let i = 0; i < numberOfElements; i++) {
    await complexSyntaxPage.getAddToListBtn().click();
  }
});
