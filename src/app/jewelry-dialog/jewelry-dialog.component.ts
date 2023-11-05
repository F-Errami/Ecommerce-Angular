import { Component,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Jewelry } from '../models/jewelry';

@Component({
  selector: 'app-jewelry-dialog',
  templateUrl: './jewelry-dialog.component.html',
  styleUrls: ['./jewelry-dialog.component.css']
})
export class JewelryDialogComponent {
  constructor(public dialogRef: MatDialogRef<JewelryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Jewelry) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
