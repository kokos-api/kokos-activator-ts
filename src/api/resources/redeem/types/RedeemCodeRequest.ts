/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
 * @example
 *     {
 *         requireReceipt: true,
 *         playerId: "51709255708",
 *         denomination: 660
 *     }
 *
 * @example
 *     {
 *         requireReceipt: true,
 *         playerId: "51709255708",
 *         codeOverride: "r3h4xcJ72f2056g7h7"
 *     }
 *
 * @example
 *     {
 *         requireReceipt: false,
 *         playerId: "51709255708",
 *         codeOverride: "r3h4xcJ72f2056g7h7"
 *     }
 */
export type RedeemCodeRequest = KokosApi.RedeemCodeFromDbRequest | KokosApi.RedeemCodeDirectRequest;
