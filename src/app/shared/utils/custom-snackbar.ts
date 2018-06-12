import { MatSnackBar } from '@angular/material';

export class CustomSnackBar {
    public openSnackBar(snackBar: MatSnackBar, message: string, action: string) {
        snackBar.open(message, action, {
            duration: 2000,
        });
    }

    public openSnackBarWithDuration(snackBar: MatSnackBar, message: string, action: string, duration: number) {
        snackBar.open(message, action, {
            duration: duration,
        });
    }
}
