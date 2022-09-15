import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './onlinestore/allproducts'
import type { Methods as Methods2 } from './products'
import type { Methods as Methods3 } from './products/_product_id@number'
import type { Methods as Methods4 } from './purchase'
import type { Methods as Methods5 } from './purchase/_purchases_id@number'
import type { Methods as Methods6 } from './purchase/all'
import type { Methods as Methods7 } from './purchase/delivered'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/onlinestore/allproducts'
  const PATH1 = '/products'
  const PATH2 = '/purchase'
  const PATH3 = '/purchase/all'
  const PATH4 = '/purchase/delivered'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    onlinestore: {
      allproducts: {
        /**
         * @returns successful
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * @returns successful
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    },
    products: {
      _product_id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * @returns successful
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns successful
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @returns created products
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @returns created products
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      /**
       * @returns successful
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns successful
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * @returns Successful
       */
      put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH1, PUT, option).json(),
      /**
       * @returns Successful
       */
      $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH1, PUT, option).json().then(r => r.body),
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
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns successful purchases
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      all: {
        /**
         * @returns successful
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
        /**
         * @returns successful
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      delivered: {
        /**
         * @returns successful
         */
        patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, PATH4, PATCH, option).json(),
        /**
         * @returns successful
         */
        $patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, PATH4, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      },
      /**
       * @returns Created Content
       */
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns Created Content
       */
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      /**
       * @returns successful
       */
      patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, PATH2, PATCH, option).json(),
      /**
       * @returns successful
       */
      $patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, PATH2, PATCH, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    /**
     * @returns successful
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).json(),
    /**
     * @returns successful
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).json().then(r => r.body),
    $path: () => `${prefix}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
