import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  defaultTitle:string =  "Confirmar acción.";
  defaultMessage:string = "Esta seguro que desea ejecutar esta accion?";

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}