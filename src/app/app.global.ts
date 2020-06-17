import { Injectable } from '@angular/core';

@Injectable()
export class HoursGlobals {
    appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Analyze',
            url: '/analyze',
            icon: 'flask'
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: 'settings'
        },
        {
            title: 'Help',
            url: '/help',
            icon: 'information-circle'
        }
    ];

    timeLabels = [
        { slot: '12:00am', details: '' },
        { slot: '01:00am', details: '' },
        { slot: '02:00am', details: '' },
        { slot: '03:00am', details: '' },
        { slot: '04:00am', details: '' },
        { slot: '05:00am', details: '' },
        { slot: '06:00am', details: '' },
        { slot: '07:00am', details: '' },
        { slot: '08:00am', details: '' },
        { slot: '09:00am', details: '' },
        { slot: '10:00am', details: '' },
        { slot: '11:00am', details: '' },
        { slot: '12:00pm', details: '' },
        { slot: '01:00pm', details: '' },
        { slot: '02:00pm', details: '' },
        { slot: '03:00pm', details: '' },
        { slot: '04:00pm', details: '' },
        { slot: '05:00pm', details: '' },
        { slot: '06:00pm', details: '' },
        { slot: '07:00pm', details: '' },
        { slot: '08:00pm', details: '' },
        { slot: '09:00pm', details: '' },
        { slot: '10:00pm', details: '' },
        { slot: '11:00pm', details: '' }
    ];
}