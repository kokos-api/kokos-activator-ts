/**
 * This file was auto-generated from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool";
import { KokosApiClient } from "../../src/Client";

describe("Database", () => {
    test("getInventory", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });

        const rawResponseBody = { "60": 18, "325": 0, "660": 0, "1800": 2, "3850": 0, "8100": 1 };
        server.mockEndpoint().get("/db").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.database.getInventory();
        expect(response).toEqual({
            "60": 18,
            "325": 0,
            "660": 0,
            "1800": 2,
            "3850": 0,
            "8100": 1,
        });
    });

    test("uploadCodes", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });
        const rawRequestBody = [
            {
                denomination: 60,
                codes: [
                    "r3h4x2Jh2W2853g9g4",
                    "Nq7QDWZw2F2eZ4ndZd",
                    "Nq7QDHZA2Q2cZ7rdw3",
                    "Nq7QDYZa2N22Z0r0vc",
                    "Nq7QDDZ72U4738E64c",
                ],
            },
        ];
        const rawResponseBody = {
            inventory: { "60": 18, "325": 0, "660": 0, "1800": 2, "3850": 0, "8100": 1 },
            accepted: { "60": 4, "325": 0, "660": 0, "1800": 0, "3850": 0, "8100": 0 },
            used: ["r3h4x2Jh2W2853g9g4"],
            disowned: [],
        };
        server
            .mockEndpoint()
            .post("/db")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.database.uploadCodes([
            {
                denomination: 60,
                codes: [
                    "r3h4x2Jh2W2853g9g4",
                    "Nq7QDWZw2F2eZ4ndZd",
                    "Nq7QDHZA2Q2cZ7rdw3",
                    "Nq7QDYZa2N22Z0r0vc",
                    "Nq7QDDZ72U4738E64c",
                ],
            },
        ]);
        expect(response).toEqual({
            inventory: {
                "60": 18,
                "325": 0,
                "660": 0,
                "1800": 2,
                "3850": 0,
                "8100": 1,
            },
            accepted: {
                "60": 4,
                "325": 0,
                "660": 0,
                "1800": 0,
                "3850": 0,
                "8100": 0,
            },
            used: ["r3h4x2Jh2W2853g9g4"],
            disowned: [],
        });
    });

    test("downloadCodes", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });
        const rawRequestBody = { denomination: 60, amount: 5 };
        const rawResponseBody = [
            "Nq7QDWZw2F2eZ4ndZd",
            "Nq7QDHZA2Q2cZ7rdw3",
            "Nq7QDYZa2N22Z0r0vc",
            "Nq7QDDZ72U4738E64c",
            "Nq7QDhZT2j25Z9kch4",
        ];
        server
            .mockEndpoint()
            .post("/db/extract")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.database.downloadCodes({
            denomination: 60,
            amount: 5,
        });
        expect(response).toEqual([
            "Nq7QDWZw2F2eZ4ndZd",
            "Nq7QDHZA2Q2cZ7rdw3",
            "Nq7QDYZa2N22Z0r0vc",
            "Nq7QDDZ72U4738E64c",
            "Nq7QDhZT2j25Z9kch4",
        ]);
    });
});
