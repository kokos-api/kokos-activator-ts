/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
 * @example
 *     {
 *         id: 5120,
 *         error: false,
 *         warning: false,
 *         code: "NQ7QDWZw2F2eZ4ndZd",
 *         denomination: 60,
 *         playerId: "51709255708",
 *         createdAt: "2025-05-12T14:23:21.220Z"
 *     }
 *
 * @example
 *     {
 *         id: 5121,
 *         error: true,
 *         warning: false,
 *         playerId: "51709255708",
 *         createdAt: "2025-05-12T14:23:21.220Z"
 *     }
 */
export interface ShortReceipt {
    /** Activation ID */
    id: number;
    /** Whether the activation was unsuccessful */
    error: boolean;
    /** Whether the activation doesn't have a full receipt (login+password) */
    warning: boolean;
    /** The code that was used, unless the error is `NO_CODES_AVAILABLE` */
    code?: KokosApi.Code;
    /** Amount of UC activated, if known from the database or the full receipt */
    denomination?: KokosApi.PackDenomination;
    /** Destination player ID */
    playerId: KokosApi.PlayerId;
    /** Activation time */
    createdAt: string;
}
