import * as Sentry from "@sentry/browser";

function init() {
    Sentry.init({
        dsn: "https://7ff423b6a3ae4241b55d1f73e46c174f@o447080.ingest.sentry.io/5426637"
    });
}

function log(error) {
    Sentry.captureException(error);
    console.log(error);
}

export default {
    init, 
    log
};