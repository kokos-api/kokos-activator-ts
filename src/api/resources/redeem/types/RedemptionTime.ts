/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

export interface RedemptionTime {
    /** When the code was activated */
    redemptionTime: string;
    /** When the code expires */
    expirationTime: string;
    /** Company that distributed the code */
    channelName: string;
    openid: KokosApi.OpenId;
    /** Amount of UC */
    amount: KokosApi.PackDenomination;
    /** Product name of the code */
    name: string;
    /** Player ID to whom the code was redeemed (if known) */
    playerId?: KokosApi.PlayerId;
    /** Name of the player to whom the code was redeemed (if known) */
    playerName?: KokosApi.PlayerName;
    /** ID of the activation receipt (if known) */
    receiptId?: number;
    /** Whether the activation receipt was successful (if known) */
    receiptSuccessful?: boolean;
}
