/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

export interface RedeemCodeFromDbRequest {
    /** Does this activation require authentication and a full receipt? */
    requireReceipt: boolean;
    playerId: KokosApi.PlayerId;
    /** The database pack from which the code should be taken */
    denomination: KokosApi.PackDenomination;
}
