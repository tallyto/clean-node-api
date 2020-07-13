import { HtppRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequeest } from '../helpers/http-helper'

export class SingUpController {
  handle (httpRequest: HtppRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequeest(new MissingParamError(field))
      }
    }
  }
}
