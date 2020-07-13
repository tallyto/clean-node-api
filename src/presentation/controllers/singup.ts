import { HtppRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequeest } from '../helpers/http-helper'

export class SingUpController {
  handle (httpRequest: HtppRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequeest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequeest(new MissingParamError('email'))
    }
  }
}
