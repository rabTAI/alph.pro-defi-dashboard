import { AlephiumWindowObject } from "@alephium/get-extension-wallet";
import { WalletConnectProvider } from "@alephium/walletconnect-provider";
import {
	Account as Web3Account,
	NetworkId,
	SignMessageParams,
	SignerProvider,
	SignMessageResult,
	NodeProvider,
} from "@alephium/web3";
import { Account } from "../hooks/useAccount";

export interface CommonProvider {
	signer: SignerProvider;
	nodeProvider: NodeProvider;
	disconnect: () => Promise<void>;
	signMessage: (params: SignMessageParams) => Promise<SignMessageResult>;
}

export const makeCommonAccount = (
	account: Web3Account | Account,
	networkId: NetworkId | undefined,
): Account => {
	if (networkId === undefined) {
		throw new Error("networkId is undefined");
	}
	return {
		...account,
		networkId:
			"networkId" in account ? account.networkId || networkId : networkId,
	};
};

export const makeCommonProvider = (
	provider: AlephiumWindowObject | WalletConnectProvider,
): CommonProvider => {
	console.log({ provider });
	return {
		signer: provider,
		nodeProvider: provider.nodeProvider!,
		disconnect: () => provider.disconnect(),
		signMessage: (params) => provider.signMessage(params),
	};
};
