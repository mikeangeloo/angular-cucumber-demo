import {Given, Then, When} from '@cucumber/cucumber';
import {ComplexSyntaxPage} from '../../pages/complex-syntax.po';
import {expect} from 'chai';

const complexSyntaxPage = new ComplexSyntaxPage();

Given(/^a user is on the cucumber page$/, async () => {
  await complexSyntaxPage.navigateTo();
});

When(/^a user enters (.*) into the input$/, async (textToInsert: string) => {
  await complexSyntaxPage.getInput().sendKeys(textToInsert);
});

Then(/^a text below input is equal (.*)$/, async (textToVerify: string) => {
  expect(await complexSyntaxPage.getInputCopy().getText()).to.be.equal(textToVerify);
});
