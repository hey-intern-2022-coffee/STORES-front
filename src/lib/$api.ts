import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './onlinestore/allproducts'
import type { Methods as Methods1 } from './products'
import type { Methods as Methods2 } from './purchase'
import type { Methods as Methods3 } from './purchase/_purchases_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/onlinestore/allproducts'
  const PATH1 = '/products'
  const PATH2 = '/purchase'
  const GET = 'GET'
  const POST = 'POST'
  const PATCH = 'PATCH'

  return {
    onlinestore: {
      allproducts: {
        /**
         * @returns successful
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * @returns successful
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    },
    products: {
      /**
       * @returns created products
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @returns created products
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      /**
       * @returns successful
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns successful
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    purchase: {
      _purchases_id: (val1: number) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          /**
           * @returns successful purchases
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns successful purchases
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @returns Created Content
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns Created Content
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      /**
       * @returns successful
       */
      patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, PATH2, PATCH, option).json(),
      /**
       * @returns successful
       */
      $patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, PATH2, PATCH, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
