import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { FloModule } from 'spring-flo';
import { TasksComponent } from './tasks.component';
import { TaskAppsComponent } from './task-apps/task-apps.component';
import { TaskDefinitionsComponent } from './task-definitions/task-definitions.component';
import { TaskCreateComposedTaskComponent } from './task-create-composed-task/task-create-composed-task.component';
import { TaskExecutionsComponent } from './task-executions/task-executions.component';
import { TaskExecutionsDetailsComponent } from './task-details/task-details.component';
import { TaskAppDetailsComponent } from './task-app-details/task-app-details.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskBulkDefineComponent } from './task-bulk-define/task-bulk-define.component';
import { TaskLaunchComponent } from './task-launch/task-launch.component';
import { TasksService } from './tasks.service';
import { TasksRoutingModule } from './tasks-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule, PopoverModule, TooltipModule } from 'ngx-bootstrap';
import { AuthModule } from '../auth/auth.module';
import { TaskGraphViewComponent } from './flo/task-graph-view/task-graph-view.component';
import { MetamodelService } from './flo/metamodel.service';
import { RenderService } from './flo/render.service';
import { EditorService } from './flo/editor.service';
import { NodeComponent } from './flo/node/node.component';
import { ToolsService } from './flo/tools.service';

@NgModule({
  imports: [
    TasksRoutingModule,
    SharedModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    AuthModule,
    FloModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    TasksComponent,
    TaskAppsComponent,
    TaskDefinitionsComponent,
    TaskCreateComposedTaskComponent,
    TaskExecutionsComponent,
    TaskExecutionsDetailsComponent,
    TaskAppDetailsComponent,
    TaskCreateComponent,
    TaskBulkDefineComponent,
    TaskLaunchComponent,
    TaskGraphViewComponent,
    NodeComponent,
  ],
  entryComponents: [
    NodeComponent
  ],
  providers: [
    TasksService,
    MetamodelService,
    RenderService,
    EditorService,
    ToolsService
  ]
})
export class TasksModule { }
