import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

class ApiClient {
  constructor (req) {
    methods.forEach(method => {
      this[method] = path => {
        const request = superagent[method](path);

        const token = localStorage.getItem('auth-token');

        if (token) {
          request.set('Authorization', `Bearer ${token}`)
        }

        return request;
      };
    });
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() {}
}

export default new ApiClient()
