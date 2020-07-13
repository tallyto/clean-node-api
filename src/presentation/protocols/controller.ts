import { HtppRequest, HttpResponse } from '../protocols/http'

export interface Controller {
  handle: (httpRequest: HtppRequest) => HttpResponse
}
