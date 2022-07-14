const FormData = require("form-data");
const fetch = require("node-fetch");
("use strict");

/**
 * Module dependencies
 */

/* eslint-disable no-unused-vars */
// Public node modules.

module.exports = {
  init(providerOptions) {
    // init your provider if necessary
    const upload = async (file, customParams = {}) => {
      let formData = new FormData();
      formData.append(
        "image",
        file.stream || Buffer.from(file.buffer, "binary")
      );
      const response = await fetch("https://api.imgur.com/3/upload", {
        method: "post",
        body: formData,
      });
      const responseJSON = await response.json();
      file.url = responseJSON.data.link;
      return responseJSON;
    };

    return {
      upload(file) {
        // upload the file in the provider
        // file content is accessible by `file.buffer`
        return upload(file);
      },
      uploadStream(file) {
        // upload the file in the provider
        // file content is accessible by `file.stream`
        return upload(file);
      },
      delete(file) {
        // delete the file in the provider
      },
    };
  },
};
