import { functions } from 'config';
import path from 'ramda.path';

class HttpsCallable {
  async callHttpsCallable(message = '', params = {}) {
    const data = await functions.httpsCallable(message)(params);
    const parsedData = this.parseData(data);
    return parsedData;
  }

  parseData(data) {
    if (!data) return {};

    return path(['data'], data) || {};
  }
}

export default HttpsCallable;
