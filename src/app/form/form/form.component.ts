import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface input {
  label: string;
  name: string;
  name2?: string
}

interface svSettingsDto{
  // прописать поля, затем прописать объект с присвоенными полями
  SrcMAC: string;
  DstMAC: string;
  svID: string;
  appID: string;
  svNum: string;

  currentIa: number;
  phaseIa: number;
  currentIb: number;
  phaseIb: number;
  currentIc: number;
  phaseIc: number;
  currentUa: number;
  phaseUa: number;
  currentUb: number;
  phaseUb: number;
  currentUc: number;
  phaseUc: number;

  qualityIa: number;
  qualityIb: number;
  qualityIc: number;
  qualityIn: number;
  qualityUa: number;
  qualityUb: number;
  qualityUc: number;
  qualityUn: number;

}

const DATA: input[] = [
  {label: 'srcMAC', name: 'XX-XX-XX-XX-XX-XX'},
  {label: 'dstMAC', name: 'XX-XX-XX-XX-XX-XX'},
  {label: 'svID', name: 'XXXXXXXXXX'},
  {label: 'appID', name: '4000-7FFF'},
  {label: 'smpCount', name: '0-оо'}
]

const  Measurements: input[] = [
  {label: 'Ia', name: 'Ia, kA', name2: 'degIa'},
  {label: 'Ib', name: 'Ib, kA', name2: 'degIb'},
  {label: 'Ic', name: 'Ic, kA', name2: 'degIc'},
  {label: 'Ua', name: 'Ua, kA', name2: 'degUa'},
  {label: 'Ub', name: 'Ub, kA', name2: 'degUb'},
  {label: 'Uc', name: 'Uc, kA', name2: 'degUc'}
]

const Quality: input[] = [
  {label: 'Ia', name: '0-3'},
  {label: 'Ib', name: '0-3'},
  {label: 'Ic', name: '0-3'},
  {label: 'In', name: '0-3'},
  {label: 'Ua', name: '0-3'},
  {label: 'Ub', name: '0-3'},
  {label: 'Uc', name: '0-3'},
  {label: 'Un', name: '0-3'}
]

const SvSettingsDto: svSettingsDto = {
  SrcMAC: "70-b3-d5-54-25-96",
  DstMAC: "01-0c-cd-04-00-01",
  appID: "0000MU0101",
  svID: "4000",
  svNum: "1186",
  currentIa: -1.483,
  phaseIa: 30,
  currentIb: -0.388,
  phaseIb: 150,
  currentIc: 1.871,
  phaseIc: 270,
  currentUa: -41.653,
  phaseUa: 45,
  currentUb: -10.898,
  phaseUb: 165,
  currentUc: 52.551,
  phaseUc: 285,
  qualityIa: 0,
  qualityIb: 0,
  qualityIc: 0,
  qualityIn: 0,
  qualityUa: 0,
  qualityUb: 0,
  qualityUc: 0,
  qualityUn: 0
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  datasource = DATA;
  measurements = Measurements;
  quality = Quality;
  footerName:String = 'SV Generator MPEI RP Department';

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup1 = this.formBuilder.group({});
    this.formGroup2 = this.formBuilder.group({});
    this.formGroup3 = this.formBuilder.group({});
  }

  onSubmit():void {
    console.log(this.formGroup1.value);
  }

  ngOnInit(): void {
    this.formGroup1 = this.formBuilder.group({});
    this.datasource.forEach(input => {
      this.formGroup1.addControl(input.label, new FormControl(''));
    });
    this.measurements.forEach(input => {
      this.formGroup2.addControl(input.label, new FormControl(''));
    });
    this.quality.forEach(input => {
      this.formGroup3.addControl(input.label, new FormControl(''));
    });
  }
}
