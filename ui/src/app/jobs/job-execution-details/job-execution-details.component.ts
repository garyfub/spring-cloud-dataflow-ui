import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { JobsService } from '../jobs.service';
import { JobExecution } from '../model/job-execution.model';
import { StepExecution } from '../model/step-execution.model';


/**
 * Displays a job's execution detail information based on the job execution id that is passed in via params on the URI.
 *
 * @author Janne Valkealahti
 */
@Component({
  selector: 'app-job-execution-details',
  templateUrl: './job-execution-details.component.html'
})
export class JobExecutionDetailsComponent implements OnInit {

  id: string;
  jobExecution: JobExecution;
  private sub: any;

  constructor(
    private jobsService: JobsService,
    private toastyService: ToastyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Retrieves the JobExecutionId from the JobService.
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.jobsService.getJobExecution(this.id).subscribe(
        data => {
        this.jobExecution = data;
        },
        error => {
          console.log('error while loading Job Execution Details', error);
          this.toastyService.error(error);
        }
      );
    });
  }

  /**
   * Navigates to the view step execution page.
   *
   * @param {StepExecution} item the id of the StepExecution is used to construct the URI parameters along with the
   * JobExecutionId.
   */
  viewStepExecutionDetails(item: StepExecution) {
    this.router.navigate(['jobs/executions/' + this.id + '/' + item.id]);
  }

  back() {
    this.router.navigate(['jobs/executions']);
  }
}
