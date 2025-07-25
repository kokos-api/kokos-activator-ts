/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as KokosApi from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace Database {
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

export class Database {
    protected readonly _options: Database.Options;

    constructor(_options: Database.Options) {
        this._options = _options;
    }

    /**
     * Get the amount of codes in the database for each pack
     *
     * @param {Database.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.database.getInventory()
     */
    public getInventory(
        requestOptions?: Database.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.DatabaseInventory> {
        return core.HttpResponsePromise.fromPromise(this.__getInventory(requestOptions));
    }

    private async __getInventory(
        requestOptions?: Database.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.DatabaseInventory>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "db",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as KokosApi.DatabaseInventory, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.KokosApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KokosApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling GET /db.");
            case "unknown":
                throw new errors.KokosApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Add codes to the database
     *
     * @param {KokosApi.UploadPack[]} request
     * @param {Database.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.database.uploadCodes([{
     *             denomination: 60,
     *             codes: ["r3h4x2Jh2W2853g9g4", "Nq7QDWZw2F2eZ4ndZd", "Nq7QDHZA2Q2cZ7rdw3", "Nq7QDYZa2N22Z0r0vc", "Nq7QDDZ72U4738E64c"]
     *         }])
     */
    public uploadCodes(
        request: KokosApi.UploadPack[],
        requestOptions?: Database.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.UploadCodesResponse> {
        return core.HttpResponsePromise.fromPromise(this.__uploadCodes(request, requestOptions));
    }

    private async __uploadCodes(
        request: KokosApi.UploadPack[],
        requestOptions?: Database.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.UploadCodesResponse>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "db",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as KokosApi.UploadCodesResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.KokosApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KokosApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling POST /db.");
            case "unknown":
                throw new errors.KokosApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Extract codes from the database
     *
     * @param {KokosApi.DownloadCodesRequest} request
     * @param {Database.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.database.downloadCodes({
     *         denomination: 60,
     *         amount: 5
     *     })
     */
    public downloadCodes(
        request: KokosApi.DownloadCodesRequest,
        requestOptions?: Database.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.Code[]> {
        return core.HttpResponsePromise.fromPromise(this.__downloadCodes(request, requestOptions));
    }

    private async __downloadCodes(
        request: KokosApi.DownloadCodesRequest,
        requestOptions?: Database.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.Code[]>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "db/extract",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as KokosApi.Code[], rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.KokosApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KokosApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling POST /db/extract.");
            case "unknown":
                throw new errors.KokosApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
