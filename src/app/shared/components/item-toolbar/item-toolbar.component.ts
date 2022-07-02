import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-toolbar',
  templateUrl: './item-toolbar.component.html',
  styleUrls: ['./item-toolbar.component.scss']
})
export class ItemToolbarComponent implements OnInit {
  @Input() itemId!: string;
  @Output() onRemove = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.itemId);

  }

  edit() {
    this.onEdit.emit();
  }

  remove() {
    this.onRemove.emit();
  }
}
