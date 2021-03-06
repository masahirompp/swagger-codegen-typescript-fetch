// tslint:disable
/**
 * Swagger Petstore
 * A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from 'url'

export interface Configuration {
  apiKey?: string | ((name: string) => string)
  username?: string
  password?: string
  accessToken?: string | ((name: string, scopes?: string[]) => string)
  basePath?: string
}

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
  url: string
  options: any
}

const BASE_PATH = '/api'

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: 'RequiredError'
  constructor(public field: string, msg?: string) {
    super(msg)
    Object.setPrototypeOf(this, RequiredError.prototype)
  }
}

/**
 * 
 * @export
 * @interface Pet
 */
export interface Pet {
  /**
   * 
   * @type {number}
   * @memberof Pet
   */
  id: number
  /**
   * 
   * @type {string}
   * @memberof Pet
   */
  name: string
  /**
   * 
   * @type {string}
   * @memberof Pet
   */
  tag?: string
}


/**
 * DefaultApi - fetch parameter creator
 * @export
 */
const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Returns all pets from the system that the user has access to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    petsGet(options: any = {}): FetchArgs {
      const localVarPath = `/pets`
      const localVarUrlObj = url.parse(localVarPath, true)
      const localVarRequestOptions = Object.assign({ method: 'GET' }, options)
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query)
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers)

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApi = function(configuration?: Configuration) {
  const basePath = (configuration && configuration.basePath) || BASE_PATH
  return {
    /**
     * Returns all pets from the system that the user has access to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    petsGet(options?: any): Promise<Array<Pet>> {
      const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).petsGet(options)
      return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        } else {
          throw response
        }
      })
    },
  }
}


