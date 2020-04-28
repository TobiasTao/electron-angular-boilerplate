import { OnInit, Component } from '@angular/core';
import { ElectronService } from '../core/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  isWin32;

  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {
    this.electronService.platform().subscribe((platform) => {
      this.isWin32 = platform;
    });
  }
}
