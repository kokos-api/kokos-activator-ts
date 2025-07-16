/**
 * This file was auto-generated from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool";
import { KokosApiClient } from "../../src/Client";

describe("Redeem", () => {
    test("redeemCode", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });
        const rawRequestBody = { requireReceipt: true, playerId: "51709255708", denomination: 660 };
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
        server
            .mockEndpoint()
            .post("/redeem")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.redeem.redeemCode({
            requireReceipt: true,
            playerId: "51709255708",
            denomination: 660,
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

    test("getRedemptionTime", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            redemptionTime: "2024-09-24T15:08:42.000Z",
            expirationTime: "2025-09-18T15:59:59.000Z",
            channelName: "Mintroute DMCC",
            openid: "24496867073459496",
            amount: 660,
            name: "660 UC",
            playerId: "5398786977",
            playerName: "primeKASTA",
        };
        server.mockEndpoint().get("/redemption-time").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.redeem.getRedemptionTime({
            code: "r3h4xcJ72f2056g7h7",
        });
        expect(response).toEqual({
            redemptionTime: "2024-09-24T15:08:42.000Z",
            expirationTime: "2025-09-18T15:59:59.000Z",
            channelName: "Mintroute DMCC",
            openid: "24496867073459496",
            amount: 660,
            name: "660 UC",
            playerId: "5398786977",
            playerName: "primeKASTA",
        });
    });

    test("getCharacter", async () => {
        const server = mockServerPool.createServer();
        const client = new KokosApiClient({ token: "test", environment: server.baseUrl });

        const rawResponseBody = { playerId: "51709255708", openid: "89924021864760616", name: "『NT』ярый" };
        server.mockEndpoint().get("/character").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.redeem.getCharacter({
            playerId: "51709255708",
        });
        expect(response).toEqual({
            playerId: "51709255708",
            openid: "89924021864760616",
            name: "\u300ENT\u300F\u044F\u0440\u044B\u0439",
        });
    });
});
