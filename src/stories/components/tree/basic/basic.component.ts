import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';
import { commonFiles } from '../data';

@Component({
  selector: 'numo-tree-basic',
  templateUrl: './template.html',
  standalone: true,
  imports: [Tree],
})
export class NumoTreeBasic implements OnInit {
  files!: TreeNode[];

  selectedFiles!: TreeNode[];

  ngOnInit() {
    this.files = commonFiles;
  }
}
