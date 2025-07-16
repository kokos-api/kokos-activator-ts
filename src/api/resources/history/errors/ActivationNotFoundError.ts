/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../../../errors/index.js";
import * as core from "../../../../core/index.js";

export class ActivationNotFoundError extends errors.KokosApiError {
    constructor(body?: unknown, rawResponse?: core.RawResponse) {
        super({
            message: "ActivationNotFoundError",
            statusCode: 404,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, ActivationNotFoundError.prototype);
    }
}
