import { Injectable } from '@angular/core';
import { AuthenticationService } from '@iron/sdds-auth';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToastsService } from '@iron/ingd-common';
import { AppActions } from '../store/app.actions';
import { appFeature } from '../store/app.selectors';
import { isNotUndefined } from '../../shared/utils/filter-utils';
import { PalletHandlingAppConfiguration } from '@iron/shared-apis/ebba/dtos/pallet-handling-app-configuration';
@Injectable({
  providedIn: 'root',
})
export class RoleGuardService {
  constructor(
    private authService: AuthenticationService,
    private toast: ToastsService,
    private translateService: TranslateService,
    private store: Store
  ) {
    this.store.dispatch(AppActions.getAppConfig());
  }

  public checkUserRole(): Observable<boolean> {
    return this.store.select(appFeature.selectAppConfiguration).pipe(
      filter(isNotUndefined),
      map((config: PalletHandlingAppConfiguration) => {
        return this.validateRoles(this.authService.user?.roles, config);
      })
    );
  }

  private validateRoles(
    userRoles: string[],
    config: PalletHandlingAppConfiguration
  ): boolean {
    const userHasTheRole = userRoles?.find((role) => {
      return role === config.authorizedRole;
    });

    if (!userHasTheRole) {
      this.showUnauthorizedMessage();
    }
    return userHasTheRole !== undefined;
  }

  private showUnauthorizedMessage(): void {
    this.toast.show({
      text: this.translateService.instant(
        'authorization.unauthorizedTitle'
      ) as string,
      type: 'error',
      iconType: 'error',
    });
  }
}
