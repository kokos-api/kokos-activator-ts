/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as KokosApi from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace Redeem {
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

export class Redeem {
    protected readonly _options: Redeem.Options;

    constructor(_options: Redeem.Options) {
        this._options = _options;
    }

    /**
     * Activate a code
     *
     * @param {KokosApi.RedeemCodeRequest} request
     * @param {Redeem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link KokosApi.ActivationErrorResponse}
     *
     * @example
     *     await client.redeem.redeemCode({
     *         requireReceipt: true,
     *         playerId: "51709255708",
     *         denomination: 660
     *     })
     *
     * @example
     *     await client.redeem.redeemCode({
     *         requireReceipt: true,
     *         playerId: "51709255708",
     *         codeOverride: "r3h4xcJ72f2056g7h7"
     *     })
     *
     * @example
     *     await client.redeem.redeemCode({
     *         requireReceipt: false,
     *         playerId: "51709255708",
     *         codeOverride: "r3h4xcJ72f2056g7h7"
     *     })
     */
    public redeemCode(
        request: KokosApi.RedeemCodeRequest,
        requestOptions?: Redeem.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.ActivationReceipt> {
        return core.HttpResponsePromise.fromPromise(this.__redeemCode(request, requestOptions));
    }

    private async __redeemCode(
        request: KokosApi.RedeemCodeRequest,
        requestOptions?: Redeem.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.ActivationReceipt>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "redeem",
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
            return { data: _response.body as KokosApi.ActivationReceipt, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 503:
                    throw new KokosApi.ActivationErrorResponse(
                        _response.error.body as KokosApi.ActivationError,
                        _response.rawResponse,
                    );
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
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling POST /redeem.");
            case "unknown":
                throw new errors.KokosApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get the redemption time of a code
     *
     * @param {KokosApi.RedemptionTimeRequest} request
     * @param {Redeem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link KokosApi.CodeNotFoundError}
     * @throws {@link KokosApi.RequestError}
     *
     * @example
     *     await client.redeem.getRedemptionTime({
     *         code: "r3h4xcJ72f2056g7h7"
     *     })
     */
    public getRedemptionTime(
        request: KokosApi.RedemptionTimeRequest,
        requestOptions?: Redeem.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.RedemptionTime> {
        return core.HttpResponsePromise.fromPromise(this.__getRedemptionTime(request, requestOptions));
    }

    private async __getRedemptionTime(
        request: KokosApi.RedemptionTimeRequest,
        requestOptions?: Redeem.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.RedemptionTime>> {
        const { code } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["code"] = code;
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "redemption-time",
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
            return { data: _response.body as KokosApi.RedemptionTime, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new KokosApi.CodeNotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new KokosApi.RequestError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling GET /redemption-time.");
            case "unknown":
                throw new errors.KokosApiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get information about a player
     *
     * @param {KokosApi.CharacterRequest} request
     * @param {Redeem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link KokosApi.CharacterNotFoundError}
     * @throws {@link KokosApi.RequestError}
     *
     * @example
     *     await client.redeem.getCharacter({
     *         playerId: "51709255708"
     *     })
     */
    public getCharacter(
        request: KokosApi.CharacterRequest,
        requestOptions?: Redeem.RequestOptions,
    ): core.HttpResponsePromise<KokosApi.Character> {
        return core.HttpResponsePromise.fromPromise(this.__getCharacter(request, requestOptions));
    }

    private async __getCharacter(
        request: KokosApi.CharacterRequest,
        requestOptions?: Redeem.RequestOptions,
    ): Promise<core.WithRawResponse<KokosApi.Character>> {
        const { playerId } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["playerId"] = playerId;
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "character",
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
            return { data: _response.body as KokosApi.Character, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new KokosApi.CharacterNotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new KokosApi.RequestError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.KokosApiTimeoutError("Timeout exceeded when calling GET /character.");
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
