import { Component, inject, model } from '@angular/core';
import { MaterialModule } from '../../../material/material/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly data = inject<Hero>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm():void {
    console.log('Si quiere borrarlo');
    this.dialogRef.close(true);
  }

}
