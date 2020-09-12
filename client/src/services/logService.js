import * as Sentry from "@sentry/browser";

function init() {
    Sentry.init({
        dsn: "https://"
    })
}