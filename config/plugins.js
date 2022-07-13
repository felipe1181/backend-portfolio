module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'ferraresimeuporfolio@gmail.com',
          defaultReplyTo: 'ferraresimeuporfolio@gmail.com',
          testAddress: 'ferraresimeuporfolio@gmail.com',
        },
      },
    },
    // ...
  });