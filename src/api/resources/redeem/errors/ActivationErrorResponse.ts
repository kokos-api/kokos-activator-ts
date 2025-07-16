/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../../../errors/index.js";
import * as KokosApi from "../../../index.js";
import * as core from "../../../../core/index.js";

export class ActivationErrorResponse extends errors.KokosApiError {
    constructor(body: KokosApi.ActivationError, rawResponse?: core.RawResponse) {
        super({
            message: "ActivationErrorResponse",
            statusCode: 503,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, ActivationErrorResponse.prototype);
    }
}
