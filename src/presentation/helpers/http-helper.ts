import { HttpResponse } from '../protocols/http'

export const badRequeest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
