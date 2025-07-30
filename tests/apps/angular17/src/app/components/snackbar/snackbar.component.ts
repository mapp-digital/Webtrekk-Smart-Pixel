import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent implements OnInit {

  constructor(public snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }

}
