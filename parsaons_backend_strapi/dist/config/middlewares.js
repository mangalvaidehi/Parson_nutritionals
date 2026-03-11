"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "script-src": ["'self'", "'unsafe-inline'", "editor.unlayer.com"],
                    "frame-src": ["'self'", "editor.unlayer.com"],
                },
            },
        },
    },
    {
        name: "strapi::cors",
        config: {
            headers: "*",
        }
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
