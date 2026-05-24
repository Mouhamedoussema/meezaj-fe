import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [ReactiveFormsModule, DecimalPipe],
  styleUrl: './admin-products.component.scss',
  template: `
    <div class="admin-products">
      <div class="page-header">
        <h1>Products</h1>
        <button class="btn-primary" (click)="openForm()">+ Add Product</button>
      </div>

      @if (showForm) {
        <div class="form-panel">
          <h2>{{ editingId ? 'Edit Product' : 'New Product' }}</h2>
          <form [formGroup]="form" (ngSubmit)="saveProduct()">
            <div class="form-grid">

              <!-- Images upload -->
              <div class="field full">
                <label>Product Images <span class="required">*</span></label>
                <div class="images-area">
                  <div class="image-previews">
                    @for (img of uploadedImages; track img; let i = $index) {
                      <div class="img-preview">
                        <img [src]="resolveUrl(img)" alt="Product image" />
                        <button type="button" class="remove-img" (click)="removeImage(i)">×</button>
                      </div>
                    }
                    <label class="upload-slot" [class.uploading]="uploading">
                      @if (uploading) {
                        <span class="upload-spinner">↑</span>
                        <span>Uploading...</span>
                      } @else {
                        <span class="upload-icon">+</span>
                        <span>Add Image</span>
                      }
                      <input type="file" accept="image/*" (change)="onFileSelected($event)" [disabled]="uploading" hidden />
                    </label>
                  </div>
                  @if (uploadedImages.length === 0 && formSubmitted) {
                    <span class="error">At least one image is required</span>
                  }
                  @if (uploadError) {
                    <span class="error">{{ uploadError }}</span>
                  }
                </div>
              </div>

              <div class="field full">
                <label>Name <span class="required">*</span></label>
                <input type="text" formControlName="name" placeholder="Product name" />
                @if (form.get('name')?.invalid && formSubmitted) {
                  <span class="error">Name is required</span>
                }
              </div>
              <div class="field">
                <label>Price (TND) <span class="required">*</span></label>
                <input type="number" formControlName="price" placeholder="0.00" step="0.01" min="0" />
                @if (form.get('price')?.invalid && formSubmitted) {
                  <span class="error">Valid price is required</span>
                }
              </div>
              <div class="field">
                <label>Material</label>
                <input type="text" formControlName="material" placeholder="100% Cotton" />
              </div>
              <div class="field full">
                <label>Description</label>
                <textarea formControlName="description" rows="3" placeholder="Product description..."></textarea>
              </div>
              <div class="field full">
                <label>Story</label>
                <textarea formControlName="story" rows="2" placeholder="The story behind this piece..."></textarea>
              </div>
              <div class="field full">
                <label>Available Sizes <span class="hint">(comma-separated: XS, S, M, L, XL)</span></label>
                <input type="text" formControlName="sizesText" placeholder="XS, S, M, L, XL" />
              </div>
              <div class="field">
                <label>Weight</label>
                <input type="text" formControlName="weight" placeholder="350g" />
              </div>
              <div class="field toggles">
                <label class="toggle">
                  <input type="checkbox" formControlName="inStock" />
                  <span>In Stock</span>
                </label>
                <label class="toggle">
                  <input type="checkbox" formControlName="featured" />
                  <span>Featured</span>
                </label>
              </div>
            </div>

            @if (formError) { <p class="form-error">{{ formError }}</p> }
            <div class="form-actions">
              <button type="button" class="btn-outline" (click)="cancelForm()">Cancel</button>
              <button type="submit" class="btn-primary" [disabled]="saving">
                {{ saving ? 'Saving...' : (editingId ? 'Update' : 'Create') }}
              </button>
            </div>
          </form>
        </div>
      }

      @if (loading) {
        <p class="loading-text">Loading products...</p>
      } @else if (products.length === 0) {
        <p class="empty-text">No products yet. Add your first product above.</p>
      } @else {
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Sizes</th>
                <th>Stock</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (product of products; track product.id) {
                <tr>
                  <td>{{ product.id }}</td>
                  <td>
                    <div class="thumb">
                      @if (product.imageUrls?.length) {
                        <img [src]="resolveUrl(product.imageUrls[0])" [alt]="product.name" />
                      } @else {
                        <div class="thumb-placeholder">{{ product.name[0] }}</div>
                      }
                    </div>
                  </td>
                  <td class="product-name">{{ product.name }}</td>
                  <td>{{ product.price | number:'1.2-2' }} TND</td>
                  <td class="sizes-cell">{{ product.availableSizes?.join(', ') || '—' }}</td>
                  <td>
                    <span class="pill" [class.yes]="product.inStock" [class.no]="!product.inStock">
                      {{ product.inStock ? 'In Stock' : 'Out' }}
                    </span>
                  </td>
                  <td>
                    <span class="pill" [class.yes]="product.featured">
                      {{ product.featured ? 'Yes' : 'No' }}
                    </span>
                  </td>
                  <td class="action-cell">
                    <button class="action-btn edit" (click)="editProduct(product)">Edit</button>
                    <button class="action-btn delete" (click)="deleteProduct(product.id)">Delete</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  `
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  showForm = false;
  editingId: number | null = null;
  saving = false;
  formError = '';
  formSubmitted = false;
  uploadedImages: string[] = [];
  uploading = false;
  uploadError = '';
  form: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      description: [''],
      story: [''],
      material: [''],
      weight: [''],
      sizesText: [''],
      inStock: [true],
      featured: [false]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  resolveUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl}${url}`;
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getAll().subscribe({
      next: (p) => { this.products = p; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openForm(): void {
    this.editingId = null;
    this.uploadedImages = [];
    this.formSubmitted = false;
    this.formError = '';
    this.uploadError = '';
    this.form.reset({ inStock: true, featured: false });
    this.showForm = true;
  }

  editProduct(product: Product): void {
    this.editingId = product.id;
    this.uploadedImages = [...(product.imageUrls ?? [])];
    this.formSubmitted = false;
    this.formError = '';
    this.uploadError = '';
    this.form.patchValue({
      name: product.name,
      price: product.price,
      description: product.description,
      story: product.story,
      material: product.material,
      weight: product.weight,
      sizesText: product.availableSizes?.join(', ') ?? '',
      inStock: product.inStock,
      featured: product.featured
    });
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingId = null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    input.value = '';

    this.uploading = true;
    this.uploadError = '';
    this.productService.uploadImage(file).subscribe({
      next: (res) => {
        this.uploadedImages.push(res.url);
        this.uploading = false;
      },
      error: () => {
        this.uploadError = 'Upload failed. Please try again.';
        this.uploading = false;
      }
    });
  }

  removeImage(index: number): void {
    this.uploadedImages.splice(index, 1);
  }

  saveProduct(): void {
    this.formSubmitted = true;
    if (this.form.invalid || this.uploadedImages.length === 0) return;

    this.saving = true;
    this.formError = '';
    const v = this.form.value;
    const payload: Partial<Product> = {
      name: v.name,
      price: v.price,
      description: v.description,
      story: v.story,
      material: v.material,
      weight: v.weight,
      availableSizes: v.sizesText ? v.sizesText.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
      imageUrls: this.uploadedImages,
      inStock: v.inStock,
      featured: v.featured
    };

    const req = this.editingId
      ? this.productService.update(this.editingId, payload)
      : this.productService.create(payload);

    req.subscribe({
      next: () => { this.loadProducts(); this.cancelForm(); this.saving = false; },
      error: () => { this.formError = 'Save failed. Please try again.'; this.saving = false; }
    });
  }

  deleteProduct(id: number): void {
    if (!confirm('Delete this product?')) return;
    this.productService.delete(id).subscribe({
      next: () => { this.products = this.products.filter(p => p.id !== id); },
      error: () => alert('Delete failed.')
    });
  }
}
