import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface MatOptionsGroup {
  label: string;
  names: string[];
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
      states.push(...group.names)
    } else {
      group.names.forEach((x: string) => states.splice(states.indexOf(x), 1));
    }
    this.states.setValue(states);
    //console.log(states);
    console.log(this.states.value);
    // here select all childs for this particular group
  }

  optionsGroups: MatOptionsGroup[] = [{
    label: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    label: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    label: 'D',
    names: ['Delaware']
  }, {
    label: 'F',
    names: ['Florida']
  }, {
    label: 'G',
    names: ['Georgia']
  }, {
    label: 'H',
    names: ['Hawaii']
  }, {
    label: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    label: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    label: 'L',
    names: ['Louisiana']
  }, {
    label: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    label: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    label: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    label: 'P',
    names: ['Pennsylvania']
  }, {
    label: 'R',
    names: ['Rhode Island']
  }, {
    label: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    label: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    label: 'U',
    names: ['Utah']
  }, {
    label: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    label: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */