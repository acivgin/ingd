import { environment } from 'apps/pallet-handling/src/environments/environment';
import { EnvironmentService } from './environment.service';

export function environmentServiceFactory(): EnvironmentService {
  // Create env
  const envService = new EnvironmentService();

  if (environment.production) {
    //envService.setConfigValues(window.__env);
  }
  return envService;
}

export const EnvironmentServiceProvider = {
  provide: EnvironmentService,
  useFactory: environmentServiceFactory,
};
