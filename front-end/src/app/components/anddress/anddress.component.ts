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

  constructor(private addressService: AddressService) {}

  onCepChanged(cep: string): void {
    if (this.isValidCep(cep)) {
      this.addressService.getAddressData(cep).subscribe(
        (data: any) => {
          this.user.publicPlace = data.logradouro;
          this.user.neighborhood = data.bairro;
          this.user.uf = data.uf;
        },
        (error: any) => {
          console.error('Erro ao buscar dados do endereço:', error);
        }
      );
    } else {
      console.error('Formato de CEP inválido');
    }
  }

  private isValidCep(cep: string): boolean {
    return cep.length === 8 && /^\d+$/.test(cep);
  }
}
