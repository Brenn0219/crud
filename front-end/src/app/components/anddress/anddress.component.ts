import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressService } from '../../services/anddress.service';
import { User } from '../../User';

@Component({
  selector: 'app-anddress',
  templateUrl: './anddress.component.html',
  styleUrl: './anddress.component.css'
})
export class AnddressComponent {    
  @Input() user!: User;
  showError: boolean = false;

  constructor(private addressService: AddressService) {}

  onCepChanged(cep: string): void {
    if (this.isValidCep(cep)) {
      this.addressService.getAddressData(cep).subscribe(
        (data: any) => {
          this.user.publicPlace = data.logradouro;
          this.user.neighborhood = data.bairro;
          this.user.uf = data.uf;
          this.showError = false;
        },
        (error: any) => {
          this.showError = true;
          console.error('Erro ao buscar dados do endereço:', error);
        }
      );
    } else {
      this.showError = true;
      console.error('Formato de CEP inválido');
    }
  }

  isValidCep(cep: string): boolean {
    return cep.length === 8 && /^\d+$/.test(cep);
  }
}
