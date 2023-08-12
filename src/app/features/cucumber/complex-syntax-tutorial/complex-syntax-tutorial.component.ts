import { Component, OnInit } from '@angular/core';
import { ComplexSyntaxElementId } from '../../../core/components/element-ids';

@Component({
  selector: 'app-complex-syntax-tutorial',
  templateUrl: './complex-syntax-tutorial.component.html',
  styleUrls: ['./complex-syntax-tutorial.component.scss']
})
export class ComplexSyntaxTutorialComponent implements OnInit {
  dropdownElements: string[] = [];
  dropdownModel = '';
  inputModel = '';
  isPopupVisible = true;
  listElements: string[] = [];

  constructor() {
  }

  get dropdownId() {
    return ComplexSyntaxElementId.DROPDOWN;
  }

  get dropdownValueBelowId() {
    return ComplexSyntaxElementId.DROPDOWN_VALUE_BELOW;
  }

  get inputCopyId() {
    return ComplexSyntaxElementId.INPUT_COPY;
  }

  get inputId() {
    return ComplexSyntaxElementId.INPUT;
  }

  get listAddElementId() {
    return ComplexSyntaxElementId.LIST_ADD_BTN;
  }

  get listId() {
    return ComplexSyntaxElementId.LIST;
  }

  get listRemoveElementId() {
    return ComplexSyntaxElementId.LIST_REMOVE_BTN;
  }

  get popupId() {
    return ComplexSyntaxElementId.POPUP;
  }

  addNewDropdownEntry($event: MouseEvent) {
    $event.preventDefault();
    this.doComputations()
      .then(_ => {
        this.dropdownElements.push(`Dropdown element ${this.dropdownElements.length}`);
      });
  }

  addNewElementToList($event: MouseEvent) {
    this.doComputations()
      .then(_ => {
        this.listElements.push(`List element ${this.listElements.length}`);
      });
    $event.preventDefault();
  }

  closePopup($event: MouseEvent) {
    this.isPopupVisible = false;
    $event.preventDefault();
  }

  doComputations(computationTimeInMs: number = 1000): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, computationTimeInMs);
    });
  }

  ngOnInit() {
  }

  removeElementToList($event: MouseEvent) {
    this.doComputations()
      .then(_ => {
        this.listElements.pop();
      });
    $event.preventDefault();
  }
}
