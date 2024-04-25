import { Component, OnInit } from '@angular/core';
import { Copie } from '../models/copie'
import { CopieService } from '../services/copie.service';
@Component({
  selector: 'app-copie',
  templateUrl: './copie.component.html',
  styleUrls: ['./copie.component.css'],
})
export class CopieComponent implements OnInit {
  copies: Copie[] = [];
  paquetId: number = 587; 

  constructor(private copieService: CopieService) { }

  ngOnInit(): void {
    this.getCopiesForPaquet();
  }

  getCopiesForPaquet(): void {
    this.copieService.getCopiesForPaquet(this.paquetId).subscribe(copies => {
      this.copies = copies;
    });
  }

  isMismatch(copie: Copie): boolean {
    if(copie.noteInitiale!=copie.noteVerifProf) copie.faute=true;
    else copie.faute=false;
    return copie.faute;
  }
}
