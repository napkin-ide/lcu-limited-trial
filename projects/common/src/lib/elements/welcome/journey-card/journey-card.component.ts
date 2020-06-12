import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { JourneyContentTypes } from '../../../state/journeys/journeys.state';

@Component({
  selector: 'lcu-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.scss']
})
export class JourneyCardComponent implements OnInit {

  public ShowOverlay: boolean;

  /**
   * the individual journey data to be displayed in the card
   */
  // tslint:disable-next-line
  protected _journeyData: any;

  @ViewChild('journeyIframe') public iframe: any;

  @Input('journey-data')
  set JourneyData(val: any) {
    this._journeyData = val;
  }
  get JourneyData(): any {
    return this._journeyData;
  }

  get JourneyContentTypes(): any {
    return JourneyContentTypes;
  }

  constructor(protected renderer: Renderer2) {
    this.ShowOverlay = true;
  }

  ngOnInit(): void { }

  public OnIframeLoad(): void {
    // TODO: We need to utilize Vimeo API to access video controls (i.e. play button)
  }

  public OnVideoClick(): void {
    this.ShowOverlay = false;
  }
}
