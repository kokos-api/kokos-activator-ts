/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface GetActivationHistoryRequest {
    /**
     * Get activations before this timestamp (sorted newest first)
     */
    before?: string;
    /**
     * Get activations after this timestamp (sorted oldest first)
     */
    after?: string;
}
