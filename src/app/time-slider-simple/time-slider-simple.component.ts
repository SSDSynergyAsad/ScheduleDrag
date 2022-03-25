import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NouisliderComponent, NouiFormatter } from 'ng2-nouislider';
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
  selector: 'app-time-slider-simple',
  templateUrl: './time-slider-simple.component.html',
  styleUrls: ['./time-slider-simple.component.css'],
})
export class TimeSliderSimpleComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('slider') public slider!: NouisliderComponent;
  @Input() public min!: string;
  @Input() public max!: string;
  @Input() public modifiable!: boolean;

  @Input() dtsSelectItem: any;
  @Input() dtsDisabled: any;

  public timeCreneau: number[] = [];
  ngOnInit() {
    console.log(this.dtsSelectItem, 'unselect', this.dtsDisabled);
    this.timeCreneau = [this.secondsFromTime(this.min), this.secondsFromTime(this.max)];
  }

  ngOnChanges() {}
  ngOnDestroy() {}

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
}
