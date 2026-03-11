"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    email: {
        config: {
            provider: "sendgrid",
            providerOptions: {
                apiKey: env("SENDGRID_API_KEY"),
            },
            settings: {
                defaultFrom: "parsonsnutritionals162@gmail.com",
                defaultReplyTo: "parsonsnutritionals162@gmail.com",
                testAddress: "parsonsnutritionals162@gmail.com",
            },
        },
    },
});
