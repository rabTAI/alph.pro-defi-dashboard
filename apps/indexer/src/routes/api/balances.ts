import { type Env, type Schema } from "hono";
import { db } from "../../database/db";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

import { BalanceSchema } from "../schemas/balance";
import { binToHex, contractIdFromAddress } from "@alephium/web3";

const app = new OpenAPIHono<Env, Schema, "/api/balances">();

async function fetchUserBalances(addresses: string[]) {
	const balances = await db
		.selectFrom("Balance")
		.select(["userAddress", "balance"])
		.select((eb) => [
			jsonObjectFrom(
				eb
					.selectFrom("Token")
					.select([
						"address",
						"name",
						"symbol",
						"decimals",
						"totalSupply",
						"verified",
						"description",
						"logo",
					])
					.whereRef("Token.address", "=", "Balance.tokenAddress"),
			).as("token"),
		])
		.where("userAddress", "in", addresses)
		.where("balance", ">", 0n)
		.where((eb) =>
			eb
				.selectFrom("Token")
				.whereRef("Token.address", "=", "Balance.tokenAddress")
				.select("verified"),
		)
		.execute();

	return balances.map((balance) => {
		return {
			...balance,
			token: balance.token
				? {
						id: binToHex(contractIdFromAddress(balance.token.address)),
						...balance.token,
				  }
				: null,
		};
	});
}

const route = createRoute({
	method: "get",
	tags: ["Balances"],
	path: "",
	request: {
		query: z.object({
			address: z
				.string()
				.min(10)
				.openapi({
					param: {
						name: "address",
						in: "query",
					},
					example: "1CHYuhea7uaupotv2KkSwNLaJWYeNouDp4QffhkhTxKpr",
				}),
		}),
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: z.object({
						balances: z.array(BalanceSchema),
					}),
				},
			},
			description: "Fetch user balances",
		},
	},
});

app.openapi(route, async (c) => {
	const { address } = c.req.valid("query");
	const balances = await fetchUserBalances(address?.split(","));
	return c.json({
		balances,
	});
});

app.doc("/docs.json", {
	info: {
		title: "Alph.Pro Indexer API",
		version: "v1",
	},
	openapi: "3.1.0",
});
// app.get("/", async (c) => {
// 	// TODO: verification
// 	const { address } = c.req.query();

// 	const balances = await fetchUserBalances(address?.split(","));

// 	return c.json({
// 		balances,
// 		// tokens: balances.tokens,
// 		// nfts: balances.nfts,
// 	});
// });

export default app;