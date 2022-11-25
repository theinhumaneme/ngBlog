import { Component, OnInit } from '@angular/core';
import { dataStorageService } from '../common/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private ds: dataStorageService) {}

  onSave() {
    this.ds.storePosts();
  }
  ngOnInit(): void {
    this.ds.fetchPosts();
  }
}
