/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
 * @example
 *     {
 *         type: "ActivationReceipt",
 *         id: 100407,
 *         createdAt: "2025-01-13T08:27:18.520Z",
 *         warning: false,
 *         took: 6250,
 *         playerId: "51709255708",
 *         code: "r3h4xcJ72f2056g7h7",
 *         openid: "89924021864760616",
 *         name: "\u300ENT\u300F\u044F\u0440\u044B\u0439",
 *         userId: 42,
 *         productName: "UC*600",
 *         amount: 660,
 *         uid: "U2463icbmr4k8h",
 *         email: "midwereo45mdn9cs@kokos.world",
 *         password: "KOKOS1_H1HA5CT1"
 *     }
 *
 * @example
 *     {
 *         type: "ActivationReceipt",
 *         id: 100407,
 *         createdAt: "2024-09-25T17:32:28Z",
 *         warning: true,
 *         took: 5631,
 *         playerId: "51709255708",
 *         code: "r3h4xcJ72f2056g7h7",
 *         openid: "89924021864760616",
 *         name: "\u300ENT\u300F\u044F\u0440\u044B\u0439"
 *     }
 */
export interface ActivationReceipt {
    type: "ActivationReceipt";
    /** Unique ID of this receipt */
    id: number;
    /** ID of the user who owns this receipt */
    userId?: number;
    /** When this receipt was created */
    createdAt: string;
    /** True if this activation was performed without a full receipt */
    warning: boolean;
    /** How long the activation took in milliseconds */
    took: number;
    /** ID of the player to whom this activation was made */
    playerId: KokosApi.PlayerId;
    /** The redemption code that was used */
    code: KokosApi.Code;
    openid: KokosApi.OpenId;
    name: KokosApi.PlayerName;
    region?: KokosApi.Region;
    productName?: KokosApi.ProductName;
    amount?: KokosApi.PackDenomination;
    uid?: KokosApi.MidasUid;
    /** Email of the MidasBuy account that performed the activation */
    email?: string;
    /** Password of the MidasBuy account that performed the activation */
    password?: string;
}
