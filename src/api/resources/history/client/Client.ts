/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as KokosApi from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace History {
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

export class History {
    protected readonly _options: History.Options;

    constructor(_options: History.Options) {
        this._options = _options;
    }

    /**
     * Get statistics about the number of redemptions for each pack on a given date. `0` in the `activations` field means that the activation was successful, but was performed with `codeOverride` and `requireReceipt` set to `false`, and so the amount is unknown. `0` in the `errors` field means that the activation was unsuccessful, and the amount is unknown.
     *
     * @param {KokosApi.GetStatsRequest} request
     * @param {History.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.history.getStats({
     *         date: "2025-05-12"
     *     })
     */
    public getStats(
        request: KokosApi.GetStatsRequest = {},
        requestOptions?: History.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.StatsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getStats(request, requestOptions));
    }

    private async __getStats(
        request: KokosApi.GetStatsRequest = {},
        requestOptions?: History.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.StatsResponse>> {
        const { date } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (date != null) {
            _queryParams["date"] = date;
        }

        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "stats",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as KokosApi.StatsResponse, rawResponse: _response.rawResponse };
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
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling GET /stats.");
            case "unknown":
                throw new errors.KokosApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get the list of recent activations
     *
     * @param {KokosApi.GetActivationHistoryRequest} request
     * @param {History.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.history.getActivationHistory()
     */
    public getActivationHistory(
        request: KokosApi.GetActivationHistoryRequest = {},
        requestOptions?: History.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.GetActivationHistoryResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getActivationHistory(request, requestOptions));
    }

    private async __getActivationHistory(
        request: KokosApi.GetActivationHistoryRequest = {},
        requestOptions?: History.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.GetActivationHistoryResponse>> {
        const { before, after } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (before != null) {
            _queryParams["before"] = before;
        }

        if (after != null) {
            _queryParams["after"] = after;
        }

        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "history",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as KokosApi.GetActivationHistoryResponse,
                rawResponse: _response.rawResponse,
            };
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
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling GET /history.");
            case "unknown":
                throw new errors.KokosApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get the full receipt for an existing activation
     *
     * @param {KokosApi.GetReceiptRequest} request
     * @param {History.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link KokosApi.ActivationNotFoundError}
     *
     * @example
     *     await client.history.getReceipt({
     *         id: 100407
     *     })
     */
    public getReceipt(
        request: KokosApi.GetReceiptRequest,
        requestOptions?: History.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.FullReceiptOrError> {
        return core.HttpResponsePromise.fromPromise(this.__getReceipt(request, requestOptions));
    }

    private async __getReceipt(
        request: KokosApi.GetReceiptRequest,
        requestOptions?: History.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.FullReceiptOrError>> {
        const { id } = request;
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                `history/${encodeURIComponent(id)}`,
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
            return { data: _response.body as KokosApi.FullReceiptOrError, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new KokosApi.ActivationNotFoundError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.KokosApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KokosApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling GET /history/{id}.");
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
