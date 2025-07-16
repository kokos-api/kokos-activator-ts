/**
 * This file was auto-generated from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool";
import { KokosApiClient } from "../../src/Client";

describe("History", () => {
    test("getStats", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            date: "2025-05-12",
            activations: { "0": 0, "60": 18, "325": 0, "660": 5, "1800": 2, "3850": 0, "8100": 0 },
            errors: { "0": 5, "60": 18, "325": 0, "660": 0, "1800": 2, "3850": 0, "8100": 1 },
        };
        server.mockEndpoint().get("/stats").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.history.getStats({
            date: "2025-05-12",
        });
        expect(response).toEqual({
            date: "2025-05-12",
            activations: {
                "0": 0,
                "60": 18,
                "325": 0,
                "660": 5,
                "1800": 2,
                "3850": 0,
                "8100": 0,
            },
            errors: {
                "0": 5,
                "60": 18,
                "325": 0,
                "660": 0,
                "1800": 2,
                "3850": 0,
                "8100": 1,
            },
        });
    });

    test("getActivationHistory", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });

        const rawResponseBody = [
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            { id: 5121, error: true, warning: false, playerId: "51709255708", createdAt: "2025-05-12T14:23:21.220Z" },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
        ];
        server.mockEndpoint().get("/history").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.history.getActivationHistory();
        expect(response).toEqual([
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5121,
                error: true,
                warning: false,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
            {
                id: 5120,
                error: false,
                warning: false,
                code: "NQ7QDWZw2F2eZ4ndZd",
                denomination: 60,
                playerId: "51709255708",
                createdAt: "2025-05-12T14:23:21.220Z",
            },
        ]);
    });

    test("getReceipt", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            type: "ActivationReceipt",
            id: 100407,
            createdAt: "2025-01-13T08:27:18.520Z",
            warning: false,
            took: 6250,
            playerId: "51709255708",
            code: "r3h4xcJ72f2056g7h7",
            openid: "89924021864760616",
            name: "『NT』ярый",
            userId: 42,
            productName: "UC*600",
            amount: 660,
            uid: "U2463icbmr4k8h",
            email: "midwereo45mdn9cs@kokos.world",
            password: "KOKOS1_H1HA5CT1",
        };
        server.mockEndpoint().get("/history/100407").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.history.getReceipt({
            id: 100407,
        });
        expect(response).toEqual({
            type: "ActivationReceipt",
            id: 100407,
            createdAt: "2025-01-13T08:27:18.520Z",
            warning: false,
            took: 6250,
            playerId: "51709255708",
            code: "r3h4xcJ72f2056g7h7",
            openid: "89924021864760616",
            name: "\u300ENT\u300F\u044F\u0440\u044B\u0439",
            userId: 42,
            productName: "UC*600",
            amount: 660,
            uid: "U2463icbmr4k8h",
            email: "midwereo45mdn9cs@kokos.world",
            password: "KOKOS1_H1HA5CT1",
        });
    });
});
