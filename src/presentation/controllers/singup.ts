import { HtppRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequeest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
export class SingUpController implements Controller {
  handle (httpRequest: HtppRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequeest(new MissingParamError(field))
      }
    }
  }
}
