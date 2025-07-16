/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
 * @example
 *     {
 *         requireReceipt: true,
 *         playerId: "51709255708",
 *         codeOverride: "r3h4xcJ72f2056g7h7"
 *     }
 */
export interface RedeemCodeDirectRequest {
    /** Does this activation require authentication and a full receipt? */
    requireReceipt: boolean;
    playerId: KokosApi.PlayerId;
    /** The redemption code to activate */
    codeOverride: KokosApi.Code;
}
