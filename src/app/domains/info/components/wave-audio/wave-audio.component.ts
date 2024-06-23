import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;

  ngAfeterViewInit(){
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
  }
}
