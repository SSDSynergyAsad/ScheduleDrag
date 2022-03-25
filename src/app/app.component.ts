import { Options } from '@angular-slider/ngx-slider/options';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { NouiFormatter, NouisliderComponent } from 'ng2-nouislider';

const json = require('../../projects/ngx-drag-to-select/package.json');

interface SliderDetails {
  value: number;
  highValue: number;
  floor: number;
  ceil: number;
}

export class TimeFormatter implements NouiFormatter {
  to(value: number): string {
    const h = Math.floor(value / 3600);
    const m = Math.floor((value % 3600) / 60);
    const s = value - 60 * m - 3600 * h;
    const values = [h, m];
    let timeString = '';
    let i = 0;
    for (const v of values) {
      if (values[i] < 10) timeString += '0';
      timeString += values[i].toFixed(0);
      if (i < 1) {
        timeString += ':';
      }
      i++;
    }
    return timeString;
  }

  from(value: string): number {
    const v = value.split(':').map(parseInt);
    let time = 0;
    time += v[0] * 3600;
    time += v[1] * 60;
    time += v[2];
    return time;
  }
}

export class PipsFormatter implements NouiFormatter {
  to(value: number): string {
    const h = Math.floor(value / 3600);
    let hourString = '';
    if (h < 10) {
      hourString += '0';
    }
    hourString += h;
    return hourString;
  }

  from(value: string): number {
    const v = value.split(':').map(parseInt);
    let time = 0;
    time += v[0] * 3600;
    time += v[1] * 60;
    time += v[2];
    return time;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('slider') public slider!: NouisliderComponent;
  public min = '06:14';
  public max = '18:33';
  // min="06:14" max="18:33"
  public modifiable!: boolean;
  public timeCreneau: number[] = [];

  documents: Array<any> = [];
  selectedDocuments: Array<any> = [];
  selectOnClick = true;
  selectOnDrag = true;
  selectMode = false;
  disable = false;
  disableRangeSelection = false;
  isDesktop = false;
  selectWithShortcut = false;
  dragOverItems = true;
  disableEvenItems = false;
  startTime = 50;
  endTime = 200;
  public modification = false;

  // options: Options = {
  //   floor: 0,
  //   ceil: 250,
  //   step: 10,
  //   enforceStep: false,
  //   enforceRange: false,
  // };
  sliders: SliderDetails[] = [
    {
      value: 30,
      highValue: 60,
      floor: 0,
      ceil: 100,
    },
    {
      value: 30,
      highValue: 60,
      floor: 0,
      ceil: 100,
    },
    {
      value: 30,
      highValue: 60,
      floor: 0,
      ceil: 100,
    },
    {
      value: 30,
      highValue: 60,
      floor: 0,
      ceil: 100,
    },
    {
      value: 30,
      highValue: 60,
      floor: 0,
      ceil: 100,
    },
    {
      value: 30,
      highValue: 60,
      floor: 0,
      ceil: 100,
    },
    {
      value: 30,
      highValue: 60,
      floor: 0,
      ceil: 100,
    },
  ];

  constructor(
    private titleService: Title,
    private breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('apple', sanitizer.bypassSecurityTrustResourceUrl('assets/apple-icon.svg'));
    iconRegistry.addSvgIcon('windows', sanitizer.bypassSecurityTrustResourceUrl('assets/windows-icon.svg'));
  }

  ngOnInit() {
    // this.modification = false;
    this.timeCreneau = [this.secondsFromTime(this.min), this.secondsFromTime(this.max)];
    const currentTitle = this.titleService.getTitle();

    if (json) {
      this.titleService.setTitle(`${currentTitle}: v${json.version}`);
    }

    const breakpoints = [Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge];

    this.breakpointObserver.observe(breakpoints).subscribe((state) => {
      this.isDesktop = this.breakpointObserver.isMatched(breakpoints);
    });

    for (let id = 1; id <= 7; id++) {
      this.documents.push({
        id,
        name: `Document ${id}`,
        disabled: id % 2 === 0,
      });
    }
  }

  creneau1ON = new Date(1970, 1, 1, 6, 0);
  creneau1OFF = new Date(1970, 1, 1, 12, 0);
  creneau2ON = new Date(1970, 1, 1, 14, 0);
  creneau2OFF = new Date(1970, 1, 1, 20, 0);

  public updateCreneauON(value: string) {
    this.timeCreneau[0] = this.secondsFromTime(value);
    this.slider.slider.set(this.timeCreneau);
  }

  public updateCreneauOFF(value: string) {
    this.timeCreneau[1] = this.secondsFromTime(value);
    this.slider.slider.set(this.timeCreneau);
  }

  timeFromSeconds(value: number): string {
    const h = Math.floor(value / 3600);
    const m = Math.floor((value % 3600) / 60);
    const s = value - 60 * m - 3600 * h;
    const values = [h, m];
    let timeString = '';
    let i = 0;
    for (const v of values) {
      if (values[i] < 10) timeString += '0';
      timeString += values[i].toFixed(0);
      if (i < 1) {
        timeString += ':';
      }
      i++;
    }
    return timeString;
  }

  secondsFromTime(value: string): number {
    const v = value.split(':');
    let time = 0;
    time += Number(v[0]) * 3600;
    time += Number(v[1]) * 60;
    return time;
  }

  public someTimeConfig: any = [
    {
      Id: 1,
      connect: [false, true, false],
      padding: [0, 60],
      behaviour: 'drag-tap',
      range: {
        min: 0,
        max: 86400,
      },
      tooltips: [new TimeFormatter(), new TimeFormatter()],
      step: 60,
      pips: {
        mode: 'count',
        values: 25,
        format: new PipsFormatter(),
      },
      keyboard: true,
    },
    {
      Id: 2,
      connect: [false, true, false],
      padding: [0, 60],
      behaviour: 'drag-tap',
      range: {
        min: 0,
        max: 86400,
      },
      tooltips: [new TimeFormatter(), new TimeFormatter()],
      step: 60,
      pips: {
        mode: 'count',
        values: 25,
        format: new PipsFormatter(),
      },
      keyboard: true,
    },
    {
      Id: 3,
      connect: [false, true, false],
      padding: [0, 60],
      behaviour: 'drag-tap',
      range: {
        min: 0,
        max: 86400,
      },
      tooltips: [new TimeFormatter(), new TimeFormatter()],
      step: 60,
      pips: {
        mode: 'count',
        values: 25,
        format: new PipsFormatter(),
      },
      keyboard: true,
    },
    {
      Id: 4,
      connect: [false, true, false],
      padding: [0, 60],
      behaviour: 'drag-tap',
      range: {
        min: 0,
        max: 86400,
      },
      tooltips: [new TimeFormatter(), new TimeFormatter()],
      step: 60,
      pips: {
        mode: 'count',
        values: 25,
        format: new PipsFormatter(),
      },
      keyboard: true,
    },
    {
      Id: 5,
      connect: [false, true, false],
      padding: [0, 60],
      behaviour: 'drag-tap',
      range: {
        min: 0,
        max: 86400,
      },
      tooltips: [new TimeFormatter(), new TimeFormatter()],
      step: 60,
      pips: {
        mode: 'count',
        values: 25,
        format: new PipsFormatter(),
      },
      keyboard: true,
    },
    {
      Id: 6,
      connect: [false, true, false],
      padding: [0, 60],
      behaviour: 'drag-tap',
      range: {
        min: 0,
        max: 86400,
      },
      tooltips: [new TimeFormatter(), new TimeFormatter()],
      step: 60,
      pips: {
        mode: 'count',
        values: 25,
        format: new PipsFormatter(),
      },
      keyboard: true,
    },
    {
      connect: [false, true, false],
      padding: [0, 60],
      behaviour: 'drag-tap',
      range: {
        min: 0,
        max: 86400,
      },
      tooltips: [new TimeFormatter(), new TimeFormatter()],
      step: 60,
      pips: {
        mode: 'count',
        values: 25,
        format: new PipsFormatter(),
      },
      keyboard: true,
    },
  ];

  sliderOptions(slider: SliderDetails): Options {
    return {
      floor: slider.floor,
      ceil: slider.ceil,
    };
  }
  public changerModeModification() {
    console.log('changerModeModification');
    this.modification = !this.modification;
    console.log(this.modification);
  }

  selectionEndPoint(event) {
    console.log(event);
  }
  selectedItemsVaule(value){
    console.log(value);
  }
  getAllData(values){
  console.log("🚀 ~ file: app.component.ts ~ line 371 ~ AppComponent ~ getAllData ~ values", values)

  }
}
