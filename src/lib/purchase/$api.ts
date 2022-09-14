import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_purchases_id@number'
import type { Methods as Methods2 } from './delivered'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/purchase'
  const PATH1 = '/purchase/delivered'
  const GET = 'GET'
  const POST = 'POST'
  const PATCH = 'PATCH'

  return {
    _purchases_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns successful purchases
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns successful purchases
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    delivered: {
      /**
       * @returns successful
       */
      patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, PATH1, PATCH, option).json(),
      /**
       * @returns successful
       */
      $patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, PATH1, PATCH, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    /**
     * @returns Created Content
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns Created Content
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * @returns successful
     */
    patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json(),
    /**
     * @returns successful
     */
    $patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
