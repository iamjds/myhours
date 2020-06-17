import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HoursGlobals } from '../app.global';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageTitle = 'Home';
  appPages = [];
  dayName = '';
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dateSelected = new Date().toISOString();

  constructor(private globals: HoursGlobals, private storage: Storage) { }

  ngOnInit() {
    this.appPages = this.globals.appPages;
  }

  ngAfterViewInit() {

    this.getCurrentDay();
    this.loadExistingDayData();

    this.storage.ready().then(() => {
      console.log('storage ready to go');
    });
  }

  getCurrentDay() {
    const currentDay = new Date(this.dateSelected).getDay();
    this.dayName = this.dayNames[currentDay];
  }

  loadExistingDayData() {
    const mdy = this.getStringDate(this.dateSelected);

    this.globals.timeLabels.forEach(_t => {
      let slot = mdy + _t.slot.split(':').join('');

      this.storage.get(slot).then((res) => {
        console.log(res);
        _t.details = res || '';
      })
    });
  }

  dateChange(_date) {
    var dt = new Date(_date.detail.value);
    this.dayName = this.dayNames[dt.getDay()];
    this.loadExistingDayData();
  }

  saveInputChanges(_time, _date, _input) {
    const mdyta = this.getStringDateTime(_date, _time.slot);

    this.storage.set(mdyta, _input.currentTarget.value);
  }

  getStringDate(_date) {
    const _month = ("0" + (new Date(_date).getMonth() + 1)).slice(-2)
    const _day = ("0" + new Date(_date).getDate()).slice(-2);
    const _year = new Date(_date).getFullYear().toString();

    return _month + _day + _year;
  }

  getStringDateTime(_date, _time) {
    const mdy = this.getStringDate(_date);
    const _t = _time.split(':').join('');
    return mdy + _t;
  }
}
