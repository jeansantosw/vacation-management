export class ResourceNotExistsError extends Error {
  constructor(message?: string) {
    super(message ?? 'Resource not found.')
  }
}
