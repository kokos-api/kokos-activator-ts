/**
 * This file was auto-generated from our API Definition.
 */

import * as KokosApi from "../../../index.js";

/**
 * @example
 *     {
 *         playerId: "51709255708",
 *         openid: "89924021864760616",
 *         name: "\u300ENT\u300F\u044F\u0440\u044B\u0439"
 *     }
 */
export interface Character {
    playerId: KokosApi.PlayerId;
    openid: KokosApi.OpenId;
    name: KokosApi.PlayerName;
}
