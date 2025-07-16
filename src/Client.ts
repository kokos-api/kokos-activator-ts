/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "./environments.js";
import * as core from "./core/index.js";
import { mergeHeaders } from "./core/headers.js";
import { Database } from "./api/resources/database/client/Client.js";
import { History } from "./api/resources/history/client/Client.js";
import { Redeem } from "./api/resources/redeem/client/Client.js";

export declare namespace KokosApiClient {
    export interface Options {
        environment: core.Supplier<environments.KokosApiEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }
}

export class KokosApiClient {
    protected readonly _options: KokosApiClient.Options;
    protected _database: Database | undefined;
    protected _history: History | undefined;
    protected _redeem: Redeem | undefined;

    constructor(_options: KokosApiClient.Options) {
        this._options = {
            ..._options,
            headers: mergeHeaders(
                {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "kokos-activator-api",
                    "X-Fern-SDK-Version": "1.0.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                _options?.headers,
            ),
        };
    }

    public get database(): Database {
        return (this._database ??= new Database(this._options));
    }

    public get history(): History {
        return (this._history ??= new History(this._options));
    }

    public get redeem(): Redeem {
        return (this._redeem ??= new Redeem(this._options));
    }
}
