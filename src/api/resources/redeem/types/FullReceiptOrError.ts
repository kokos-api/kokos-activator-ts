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
 *
 * @example
 *     {
 *         type: "ActivationError",
 *         id: 100407,
 *         createdAt: "2024-09-25T17:32:28Z",
 *         errorCode: KokosApi.ErrorCode.CodeUsed,
 *         errorMessage: "REDEEM_CODE_ALREADY_USED: Redeem code is already used, please check the redeem code, cause: -, solution:-, debugid: 98fa4c6ab945320d0fe4304f38cc5653",
 *         codeReset: false,
 *         playerId: "51709255708",
 *         code: "r3h4xcJ72f2056g7h7"
 *     }
 */
export type FullReceiptOrError = KokosApi.ActivationReceipt | KokosApi.ActivationError;
