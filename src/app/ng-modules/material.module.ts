import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatDividerModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatPaginatorModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  imports: [CommonModule, MaterialComponents],
  exports: [CommonModule, MaterialComponents],
})
export class MaterialModule {}
