const METHODS = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
  return data
    ? Object.keys(data)
        .map((key, i) => `${i === 0 ? "?" : "&"}${key}=${data[key]}`)
        .join("")
    : "";
}

class HTTPTransport {
  get = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url, options) => {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      retries,
      timeout = 5000,
    } = options;

    console.log(url, options);

    const queryParam = method === METHODS.GET ? queryStringify(data) : "";
    setTimeout(() => {
      throw new Error(`Истекло положенное время: ${timeout / 1000} сек.`);
    }, timeout);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      console.log(url);

      xhr.open(method, url + queryParam);

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        if (xhr.status > 299) {
          reject(xhr);
        } else {
          resolve(xhr);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    }).catch((err) => {
      fetchWithRetry(url, options, this.request).then(resolve, reject);
    });
  };
  fetchWithRetry = (url, options) => {
    const { retries = 5 } = options;

    const handleError = () => {
      if (retries-- === 0) {
        throw new Error();
      }
      return fetchWithRetry(url, { ...options, retries: retries });
    };

    return this.request(url, options).catch(() => handleError());
  };
}

function fetchWithRetry(url, options) {
  const { retries = 5 } = options;

  const handleError = () => {
    if (retries-- === 0) {
      throw new Error();
    }
    return fetchWithRetry(url, { ...options, retries: retries });
  };

  return fetch(url, options).catch(() => handleError());
}

const HTTP = new HTTPTransport();

HTTP.get("https://fa2vqs.com/api/qot1d", { retries: 3 });
