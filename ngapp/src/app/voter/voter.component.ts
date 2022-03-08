import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/*
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.less']
})
*/
@Component({
  selector: 'app-voter',
  template: `
  <h4>{{name}}</h4>
  <button type="button" (click)="vote(true)" [disabled]="didVote">Agree</button>
  <button type="button" (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})
export class VoterComponent implements OnInit {

    @Input() name = '';
    @Output() voted = new EventEmitter<boolean>();
    didVote = false;

    constructor() { }

    ngOnInit(): void {
    }

    vote(agreed: boolean) {
        this.voted.emit(agreed);
        this.didVote = true;
    }

}
