import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface MatOptionsGroup {
  label: string;
  options: string[];
}

/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrls: ['select-custom-trigger-example.css'],
})
export class SelectCustomTriggerExample {
  toppings = new FormControl();
  isExpandCategory: boolean[] = [];
  states = new FormControl();

  expandDocumentTypes(group: any) {
    console.log("expanding dropdown", group);
    this.isExpandCategory[group.label] = !this.isExpandCategory[group.label];
    // expand only selected parent dropdown category with that childs
  }

  
  optionClicked(name: string, index?: number) {
    console.log("Selected option: ", name, 'having id: ', index);
  }

  toggleSelection(event: any, group: any) {
    //console.log(group);
    //console.log(event.checked);
    let states = this.states.value;
    states = states ? states : [];
    if(event.checked) {
      states.push(...group.options)
    } else {
      group.options.forEach((x: string) => states.splice(states.indexOf(x), 1));
    }
    this.states.setValue(states);
    //console.log(states);
    console.log(this.states.value);
    // here select all childs for this particular group
  }

  optionsGroups: MatOptionsGroup[] = [{
    label: 'A',
    options: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    label: 'C',
    options: ['California', 'Colorado', 'Connecticut']
  }, {
    label: 'D',
    options: ['Delaware']
  }, {
    label: 'F',
    options: ['Florida']
  }, {
    label: 'G',
    options: ['Georgia']
  }, {
    label: 'H',
    options: ['Hawaii']
  }, {
    label: 'I',
    options: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    label: 'K',
    options: ['Kansas', 'Kentucky']
  }, {
    label: 'L',
    options: ['Louisiana']
  }, {
    label: 'M',
    options: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    label: 'N',
    options: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    label: 'O',
    options: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    label: 'P',
    options: ['Pennsylvania']
  }, {
    label: 'R',
    options: ['Rhode Island']
  }, {
    label: 'S',
    options: ['South Carolina', 'South Dakota']
  }, {
    label: 'T',
    options: ['Tennessee', 'Texas']
  }, {
    label: 'U',
    options: ['Utah']
  }, {
    label: 'V',
    options: ['Vermont', 'Virginia']
  }, {
    label: 'W',
    options: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */