import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  ngOnInit(): void {
    console.log('Componente hijo: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente hijo: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('Componente hijo: ngOnDestro');
  }
}
