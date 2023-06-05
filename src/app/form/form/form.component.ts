import { Component } from '@angular/core';

interface input {
  label: string;
  name: string;
  name2?: string
}

const DATA: input[] = [
  {label: 'Src MAC', name: 'XX-XX-XX-XX-XX-XX'},
  {label: 'Dst MAC', name: 'XX-XX-XX-XX-XX-XX'},
  {label: 'svID', name: 'XXXXXXXXXX'},
  {label: 'appID', name: '4000-7FFF'},
  {label: 'smpCount', name: '0-оо'},
  {label: 'confRef', name: '0-оо'},
  {label: 'smpSynch', name: '0-оо'}
]

const  Measurements: input[] = [
  {label: 'Ia', name: 'Ia, kA', name2: 'degIa'},
  {label: 'Ib', name: 'Ib, kA', name2: 'degIb'},
  {label: 'Ic', name: 'Ic, kA', name2: 'degIc'},
  {label: 'In', name: 'In, kA', name2: 'degIn'},
  {label: 'Ua', name: 'Ua, kA', name2: 'degUa'},
  {label: 'Ub', name: 'Ub, kA', name2: 'degUb'},
  {label: 'Uc', name: 'Uc, kA', name2: 'degUc'},
  {label: 'Un', name: 'Un, kA', name2: 'degUn'}
]

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  datasource = DATA;
  measurements = Measurements;
}
