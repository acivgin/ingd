export interface EnvironmentConfigKeys {
  env: string;
  apiUrl: string;
  authUrl: string;
}

export interface EnvironmentSettings extends EnvironmentConfigKeys {
  production: boolean;
  useMock: boolean;
}
