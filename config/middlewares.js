const sourceDirectives = "https://i.imgur.com/";
module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", sourceDirectives],
          "media-src": ["'self'", "data:", "blob:", sourceDirectives],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
