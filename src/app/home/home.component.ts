import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { interval } from 'rxjs';
import { transition, trigger, animate, style, state } from '@angular/animations';

const ANIMATION_TIME = 1200;
const QUOTE_INTERVAL = 4000 + 2 * ANIMATION_TIME;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('changeState', [
      state('leavQuote', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('enterQuote', style({
        transform: 'translateX(0)',
        opacity: 1
      })),

      transition('* => leavQuote', animate(ANIMATION_TIME - 100)),
      transition('* => enterQuote', animate(ANIMATION_TIME - 100)),
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
      this.leavQuote();
      setTimeout(this.updateQuote.bind(this), ANIMATION_TIME);
    });
  }

  updateIndex(i: number) {
    this.index = i % this.quotes.length;
  }

  leavQuote() {
    this.quoteState = 'leavQuote';
  }

  updateQuote() {
    this.quoteState = 'enterQuote';
    this.currentQuote = this.quotes[this.index];
  }
}

class Quote {
  quote: string;
  name: string;

  constructor(quote: string, name: string) {
    this.quote = quote;
    this.name = name;
  }
}
