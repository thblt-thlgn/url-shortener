export class UnsetEnvironmentVariableError extends Error {
  constructor(variableName: string) {
    super(`Please set the ${variableName} environment variable`);
  }
}
