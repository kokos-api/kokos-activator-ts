/**
 * This file was auto-generated from our API Definition.
 */

/**
 * Error code
 */
export type ErrorCode =
    | "NO_ACCOUNTS_AVAILABLE"
    | "NO_CODES_AVAILABLE"
    | "LOGIN_FAILED"
    | "CHARACTER_NOT_FOUND"
    | "INVALID_ACTIVATION_RESPONSE"
    | "CODE_USED"
    | "INVALID_CODE"
    | "RISK_CONTROL"
    | "UNKNOWN"
    | "NETWORK_ERROR";
export const ErrorCode = {
    NoAccountsAvailable: "NO_ACCOUNTS_AVAILABLE",
    NoCodesAvailable: "NO_CODES_AVAILABLE",
    LoginFailed: "LOGIN_FAILED",
    CharacterNotFound: "CHARACTER_NOT_FOUND",
    InvalidActivationResponse: "INVALID_ACTIVATION_RESPONSE",
    CodeUsed: "CODE_USED",
    InvalidCode: "INVALID_CODE",
    RiskControl: "RISK_CONTROL",
    Unknown: "UNKNOWN",
    NetworkError: "NETWORK_ERROR",
} as const;
