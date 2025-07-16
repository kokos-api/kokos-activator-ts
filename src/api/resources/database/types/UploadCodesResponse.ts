/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
 * @example
 *     {
 *         inventory: {
 *             "60": 18,
 *             "325": 0,
 *             "660": 0,
 *             "1800": 2,
 *             "3850": 0,
 *             "8100": 1
 *         },
 *         accepted: {
 *             "60": 4,
 *             "325": 0,
 *             "660": 0,
 *             "1800": 0,
 *             "3850": 0,
 *             "8100": 0
 *         },
 *         used: ["r3h4x2Jh2W2853g9g4"],
 *         disowned: []
 *     }
 */
export interface UploadCodesResponse {
    /** New state of the database */
    inventory: KokosApi.DatabaseInventory;
    /** Number of codes that were added to the database */
    accepted: KokosApi.DatabaseInventory;
    /** List of codes that were already in the database */
    used: KokosApi.Code[];
    /** List of codes that belong to someone else and cannot be added */
    disowned: KokosApi.Code[];
}
