/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../../../errors/index.js";
import * as core from "../../../../core/index.js";

export class RequestError extends errors.KokosApiError {
    constructor(body?: unknown, rawResponse?: core.RawResponse) {
        super({
            message: "RequestError",
            statusCode: 503,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, RequestError.prototype);
    }
}
