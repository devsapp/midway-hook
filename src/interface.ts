/**
 * The Cloud Function type for HTTPS triggers. This should be exported from your
 * JavaScript file to define a Cloud Function.
 *
 * This type is a special JavaScript function which takes Express
 * [`Request`](https://expressjs.com/en/api.html#req) and
 * [`Response`](https://expressjs.com/en/api.html#res) objects as its only
 * arguments.
 */
export type HttpFunction = ((req: Request, resp: Response) => void | Promise<void>);
