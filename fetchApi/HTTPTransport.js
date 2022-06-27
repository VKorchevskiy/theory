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

// console.log(queryStringify({ a: 1, b: 2, c: { d: 123 }, k: [1, 2, 3] }));

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
      timeout = 5000,
    } = options;

    // setTimeout(() => {
    //   throw new Error(`Истекло положенное время: ${timeout / 1000} сек.`);
    // }, timeout);

    const queryParam = method === METHODS.GET ? queryStringify(data) : "";

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

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
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

// const HTTP = new HTTPTransport("/chats");

// HTTP.get();

export default HTTPTransport;
