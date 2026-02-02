import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css'
})
export class TimelineItemComponent {
  @Input() title: string = '';
  @Input() organization: string = '';
  @Input() period: string = '';
  @Input() subtitle?: string;
  @Input() points?: string[];
}
