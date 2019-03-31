import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { interval } from 'rxjs';
import { transition, trigger, useAnimation } from '@angular/animations';
import { slideInXAnimation, slideOutXAnimation } from '../globals/animations';

const ANIMATION_TIME = 1200;
const QUOTE_INTERVAL = 4000 + 2 * ANIMATION_TIME;

class Quote {
  quote: string;
  name: string;

  constructor(quote: string, name: string) {
    this.quote = quote;
    this.name = name;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('changeState', [
      transition(
        '* => enterQuote',
        useAnimation(slideInXAnimation, {
          params: {
            time: '1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            from: '-100%'
          }
        })
      ),
      transition(
        '* => leaveQuote',
        useAnimation(slideOutXAnimation, {
          params: {
            time: '1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            to: '-100%'
          }
        })
      ),

    ])
  ]
})

export class HomeComponent implements OnInit {

  quotes = [
    new Quote('Aldrig förr har jag mått så bra!', 'Cissi'),
    new Quote('Tänk att träning kan vara så underbart.', 'Fanny'),
    new Quote('Äntligen har jag en vettig anledning att åka till Bergshamra!', 'Emelia'),
    new Quote('Det bästa som hänt sen Håkan släppte "Känn ingen sorg för mig Göteborg".', 'Länny')
  ];

  isMobile = this.deviceService.isMobile();
  index = 0;
  currentQuote = this.quotes[this.index];
  quoteState = 'enterQuote';

  constructor(private deviceService: DeviceDetectorService) { }


  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    const t = interval(QUOTE_INTERVAL);
    t.subscribe(i => {
      this.updateIndex(i);
      this.leaveQuote();
      setTimeout(this.updateQuote.bind(this), ANIMATION_TIME);
    });
  }

  updateIndex(i: number) {
    this.index = i % this.quotes.length;
  }

  leaveQuote() {
    this.quoteState = 'leaveQuote';
  }

  updateQuote() {
    this.quoteState = 'enterQuote';
    this.currentQuote = this.quotes[this.index];
  }
}
