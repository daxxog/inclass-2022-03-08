import { Component, OnInit } from '@angular/core';

/*
@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.less']
})*/
    @Component({
        selector: 'app-votetaker',
        template: `
            <h2>Should Denny start painting again?</h2>
            <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
            <app-voter *ngFor="let voter of voters" [name]="voter" (voted)="onVote($event)"></app-voter>
        `,
    })
export class VotetakerComponent implements OnInit {

    agreed = 0;
    disagreed = 0;
    voters = ['Harry', 'Larry', 'Gary'];

    constructor() { }

    ngOnInit(): void {
    }

    onVote(agreed: boolean) {
        if(agreed) {
            this.agreed++;
        } else {
            this.disagreed++;
        }
    }
}
