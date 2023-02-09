import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/product.module';
import { RequestAPIService } from 'src/app/services/RequestAPI/request-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  productos: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private API: RequestAPIService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      if (this.categoryId) {
        this.API.getProductsbyCategory(this.categoryId, this.limit, this.offset)
        .subscribe(data => {
          this.productos = data
        })
      }
    })
  }
}
