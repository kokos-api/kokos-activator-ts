/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
 * @example
 *     {
 *         date: "2025-05-12",
 *         activations: {
 *             "0": 0,
 *             "60": 18,
 *             "325": 0,
 *             "660": 5,
 *             "1800": 2,
 *             "3850": 0,
 *             "8100": 0
 *         },
 *         errors: {
 *             "0": 5,
 *             "60": 18,
 *             "325": 0,
 *             "660": 0,
 *             "1800": 2,
 *             "3850": 0,
 *             "8100": 1
 *         }
 *     }
 */
export interface StatsResponse {
    /** The date for which the statistics were requested */
    date: string;
    /** The number of activations for each pack */
    activations: KokosApi.DatabaseInventory;
    /** The number of errors for each pack */
    errors: KokosApi.DatabaseInventory;
}
