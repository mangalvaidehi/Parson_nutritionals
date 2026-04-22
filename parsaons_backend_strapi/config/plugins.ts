export default ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "info@parsonsnutrionals.in",
        defaultReplyTo: "info@parsonsnutrionals.in",
        testAddress: "info@parsonsnutrionals.in",
      },
    },
  },
});

