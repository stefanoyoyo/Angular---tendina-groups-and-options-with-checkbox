import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrls: ['select-custom-trigger-example.css'],
})
export class SelectCustomTriggerExample {
  isExpandCategory: boolean[] = [];
  states = new FormControl();

  expandDocumentTypes(group: any) {
    console.log('expanding dropdown', group);
    this.isExpandCategory[group.groupLabel] = !this.isExpandCategory[group.groupLabel];
    // expand only selected parent dropdown category with that childs
  }

  optionClicked(name: string, index?: number) {
    console.log('Selected option: ', name, 'having id: ', index);
  }

  toggleSelection(event: any, group: any) {
    //console.log(group);
    //console.log(event.checked);
    let states = this.states.value;
    states = states ? states : [];
    if (event.checked) {
      states.push(...group.options);
    } else {
      group.options.forEach((x: string) => states.splice(states.indexOf(x), 1));
    }
    this.states.setValue(states);
    //console.log(states);
    // console.log(this.states.value);
    // here select all childs for this particular group
  }

  optionsGroups: MatOptionsGroup[] = [
    {
      groupLabel: 'A',
      options: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      groupLabel: 'C',
      options: ['California', 'Colorado', 'Connecticut'],
    },
    {
      groupLabel: 'D',
      options: ['Delaware'],
    },
    {
      groupLabel: 'F',
      options: ['Florida'],
    },
    {
      groupLabel: 'G',
      options: ['Georgia'],
    },
    {
      groupLabel: 'H',
      options: ['Hawaii'],
    },
    {
      groupLabel: 'I',
      options: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      groupLabel: 'K',
      options: ['Kansas', 'Kentucky'],
    },
    {
      groupLabel: 'L',
      options: ['Louisiana'],
    },
    {
      groupLabel: 'M',
      options: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      groupLabel: 'N',
      options: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      groupLabel: 'O',
      options: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      groupLabel: 'P',
      options: ['Pennsylvania'],
    },
    {
      groupLabel: 'R',
      options: ['Rhode Island'],
    },
    {
      groupLabel: 'S',
      options: ['South Carolina', 'South Dakota'],
    },
    {
      groupLabel: 'T',
      options: ['Tennessee', 'Texas'],
    },
    {
      groupLabel: 'U',
      options: ['Utah'],
    },
    {
      groupLabel: 'V',
      options: ['Vermont', 'Virginia'],
    },
    {
      groupLabel: 'W',
      options: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];
}


export interface MatOptionsGroup {
  groupLabel: string;
  options: string[];
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
