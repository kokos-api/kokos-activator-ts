/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
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
export interface ActivationError {
    type: "ActivationError";
    /** Unique ID of this receipt */
    id: number;
    /** The redemption code that was used (null if no code was found) */
    code?: KokosApi.Code;
    /** The player ID that was used */
    playerId: KokosApi.PlayerId;
    errorCode: KokosApi.ErrorCode;
    /** Detailed and technical error message. (Should NOT be shown to an untrusted user) */
    errorMessage?: string;
    /** True if the code was put back into the database. Always false when codeOverride is used. */
    codeReset: boolean;
    /** When this error was created */
    createdAt: string;
}
