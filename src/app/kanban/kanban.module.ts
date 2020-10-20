import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from "@angular/cdk/drag-drop"
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatDialogModule } from "@angular/material/dialog"
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [
    BoardListComponent, 
    BoardComponent, 
    BoardDialogComponent, 
    TaskDialogComponent, 
    DeleteButtonComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    FormsModule,
    DragDropModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule
  ],
  entryComponents: [BoardDialogComponent, TaskDialogComponent]
})
export class KanbanModule { }
