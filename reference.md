# Reference

## Database

<details><summary><code>client.database.<a href="/src/api/resources/database/client/Client.ts">getInventory</a>() -> KokosApi.DatabaseInventory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the amount of codes in the database for each pack

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.database.getInventory();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Database.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.database.<a href="/src/api/resources/database/client/Client.ts">uploadCodes</a>({ ...params }) -> KokosApi.UploadCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add codes to the database

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.database.uploadCodes([
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
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.UploadPack[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Database.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.database.<a href="/src/api/resources/database/client/Client.ts">downloadCodes</a>({ ...params }) -> KokosApi.Code[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Extract codes from the database

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.database.downloadCodes({
    denomination: 60,
    amount: 5,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.DownloadCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Database.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## History

<details><summary><code>client.history.<a href="/src/api/resources/history/client/Client.ts">getStats</a>({ ...params }) -> KokosApi.StatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get statistics about the number of redemptions for each pack on a given date. `0` in the `activations` field means that the activation was successful, but was performed with `codeOverride` and `requireReceipt` set to `false`, and so the amount is unknown. `0` in the `errors` field means that the activation was unsuccessful, and the amount is unknown.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.history.getStats({
    date: "2025-05-12",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.GetStatsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `History.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.history.<a href="/src/api/resources/history/client/Client.ts">getActivationHistory</a>({ ...params }) -> KokosApi.GetActivationHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the list of recent activations

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.history.getActivationHistory();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.GetActivationHistoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `History.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.history.<a href="/src/api/resources/history/client/Client.ts">getReceipt</a>({ ...params }) -> KokosApi.FullReceiptOrError</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the full receipt for an existing activation

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.history.getReceipt({
    id: 100407,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.GetReceiptRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `History.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Redeem

<details><summary><code>client.redeem.<a href="/src/api/resources/redeem/client/Client.ts">redeemCode</a>({ ...params }) -> KokosApi.ActivationReceipt</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Activate a code

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.redeem.redeemCode({
    requireReceipt: true,
    playerId: "51709255708",
    denomination: 660,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.RedeemCodeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Redeem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.redeem.<a href="/src/api/resources/redeem/client/Client.ts">getRedemptionTime</a>({ ...params }) -> KokosApi.RedemptionTime</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the redemption time of a code

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.redeem.getRedemptionTime({
    code: "r3h4xcJ72f2056g7h7",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.RedemptionTimeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Redeem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.redeem.<a href="/src/api/resources/redeem/client/Client.ts">getCharacter</a>({ ...params }) -> KokosApi.Character</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a player

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.redeem.getCharacter({
    playerId: "51709255708",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KokosApi.CharacterRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Redeem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
