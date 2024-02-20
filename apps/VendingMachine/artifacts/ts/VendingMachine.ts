/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as VendingMachineContractJson } from "../VendingMachine.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace VendingMachineTypes {
  export type Fields = {
    foodsContractId: HexString;
    collectionOwner: Address;
    collectionUri: HexString;
    nftBaseUri: HexString;
    totalSupply: bigint;
    mintIsPaused: boolean;
    mintedFoods: [
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint
    ];
  };

  export type State = ContractState<Fields>;

  export type NftMintedEvent = ContractEvent<{
    minter: Address;
    contractIds: HexString;
    mintAmount: bigint;
    startingIndex: bigint;
  }>;

  export interface CallMethodTable {
    getCollectionUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    royaltyAmount: {
      params: CallContractParams<{ tokenId: HexString; salePrice: bigint }>;
      result: CallContractResult<bigint>;
    };
    getOwner: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getMaxSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getMintPrice: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    isMintPaused: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<boolean>;
    };
    getFoodsContract: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getBaseUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getNFTUri: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    mint: {
      params: CallContractParams<{ foodTypeId_: bigint; mintAmount: bigint }>;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  VendingMachineInstance,
  VendingMachineTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as VendingMachineTypes.Fields;
  }

  eventIndex = { NftMinted: 0 };
  consts = {
    MaxSupply: BigInt(1000),
    MintPrice: BigInt(1000000000000000000),
    MaxMintPerTx: BigInt(10),
    RoyaltyRate: BigInt(500),
    ErrorCodes: {
      MaxSupplyReached: BigInt(0),
      OnlyCollectionOwner: BigInt(1),
      MintIsPaused: BigInt(2),
      NFTNotPartOfCollection: BigInt(3),
      NotMintedYet: BigInt(4),
      WrongFoodType: BigInt(5),
      FoodMaxSupplyReached: BigInt(6),
      MaxPerTx: BigInt(7),
      ZeroNotAllowed: BigInt(8),
    },
  };

  at(address: string): VendingMachineInstance {
    return new VendingMachineInstance(address);
  }

  tests = {
    getCollectionUri: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getCollectionUri", params);
    },
    totalSupply: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "totalSupply", params);
    },
    nftByIndex: async (
      params: TestContractParams<VendingMachineTypes.Fields, { index: bigint }>
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "nftByIndex", params);
    },
    validateNFT: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { nftId: HexString; nftIndex: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "validateNFT", params);
    },
    royaltyAmount: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { tokenId: HexString; salePrice: bigint }
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "royaltyAmount", params);
    },
    payRoyalty: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { payer_: Address; amount_: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "payRoyalty", params);
    },
    withdrawRoyalty: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { to_: Address; amount_: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdrawRoyalty", params);
    },
    getOwner: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<Address>> => {
      return testMethod(this, "getOwner", params);
    },
    getMaxSupply: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getMaxSupply", params);
    },
    getMintPrice: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getMintPrice", params);
    },
    isMintPaused: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<boolean>> => {
      return testMethod(this, "isMintPaused", params);
    },
    getFoodsContract: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<Address>> => {
      return testMethod(this, "getFoodsContract", params);
    },
    getBaseUri: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getBaseUri", params);
    },
    getNFTUri: async (
      params: TestContractParams<VendingMachineTypes.Fields, { index: bigint }>
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getNFTUri", params);
    },
    mint: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { foodTypeId_: bigint; mintAmount: bigint }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "mint", params);
    },
    updateBaseUri: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { newBaseUri: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "updateBaseUri", params);
    },
    updateCollectionUri: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { newCollectionUri: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "updateCollectionUri", params);
    },
    toggleMintState: async (
      params: Omit<
        TestContractParams<VendingMachineTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "toggleMintState", params);
    },
    withdrawAlph: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { to_: Address; amount_: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdrawAlph", params);
    },
    mint_: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { minter: Address; index: bigint }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "mint_", params);
    },
    pickIdForFood: async (
      params: TestContractParams<
        VendingMachineTypes.Fields,
        { foodTypeId_: bigint }
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "pickIdForFood", params);
    },
  };
}

// Use this object to test and deploy the contract
export const VendingMachine = new Factory(
  Contract.fromJson(
    VendingMachineContractJson,
    "",
    "0a260205f0429db04046858740df08e17e718a93f7c39ae81395fe96f4345f07"
  )
);

// Use this class to interact with the blockchain
export class VendingMachineInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<VendingMachineTypes.State> {
    return fetchContractState(VendingMachine, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNftMintedEvent(
    options: EventSubscribeOptions<VendingMachineTypes.NftMintedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      VendingMachine.contract,
      this,
      options,
      "NftMinted",
      fromCount
    );
  }

  methods = {
    getCollectionUri: async (
      params?: VendingMachineTypes.CallMethodParams<"getCollectionUri">
    ): Promise<VendingMachineTypes.CallMethodResult<"getCollectionUri">> => {
      return callMethod(
        VendingMachine,
        this,
        "getCollectionUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params?: VendingMachineTypes.CallMethodParams<"totalSupply">
    ): Promise<VendingMachineTypes.CallMethodResult<"totalSupply">> => {
      return callMethod(
        VendingMachine,
        this,
        "totalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    nftByIndex: async (
      params: VendingMachineTypes.CallMethodParams<"nftByIndex">
    ): Promise<VendingMachineTypes.CallMethodResult<"nftByIndex">> => {
      return callMethod(
        VendingMachine,
        this,
        "nftByIndex",
        params,
        getContractByCodeHash
      );
    },
    royaltyAmount: async (
      params: VendingMachineTypes.CallMethodParams<"royaltyAmount">
    ): Promise<VendingMachineTypes.CallMethodResult<"royaltyAmount">> => {
      return callMethod(
        VendingMachine,
        this,
        "royaltyAmount",
        params,
        getContractByCodeHash
      );
    },
    getOwner: async (
      params?: VendingMachineTypes.CallMethodParams<"getOwner">
    ): Promise<VendingMachineTypes.CallMethodResult<"getOwner">> => {
      return callMethod(
        VendingMachine,
        this,
        "getOwner",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getMaxSupply: async (
      params?: VendingMachineTypes.CallMethodParams<"getMaxSupply">
    ): Promise<VendingMachineTypes.CallMethodResult<"getMaxSupply">> => {
      return callMethod(
        VendingMachine,
        this,
        "getMaxSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getMintPrice: async (
      params?: VendingMachineTypes.CallMethodParams<"getMintPrice">
    ): Promise<VendingMachineTypes.CallMethodResult<"getMintPrice">> => {
      return callMethod(
        VendingMachine,
        this,
        "getMintPrice",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    isMintPaused: async (
      params?: VendingMachineTypes.CallMethodParams<"isMintPaused">
    ): Promise<VendingMachineTypes.CallMethodResult<"isMintPaused">> => {
      return callMethod(
        VendingMachine,
        this,
        "isMintPaused",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getFoodsContract: async (
      params?: VendingMachineTypes.CallMethodParams<"getFoodsContract">
    ): Promise<VendingMachineTypes.CallMethodResult<"getFoodsContract">> => {
      return callMethod(
        VendingMachine,
        this,
        "getFoodsContract",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getBaseUri: async (
      params?: VendingMachineTypes.CallMethodParams<"getBaseUri">
    ): Promise<VendingMachineTypes.CallMethodResult<"getBaseUri">> => {
      return callMethod(
        VendingMachine,
        this,
        "getBaseUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getNFTUri: async (
      params: VendingMachineTypes.CallMethodParams<"getNFTUri">
    ): Promise<VendingMachineTypes.CallMethodResult<"getNFTUri">> => {
      return callMethod(
        VendingMachine,
        this,
        "getNFTUri",
        params,
        getContractByCodeHash
      );
    },
    mint: async (
      params: VendingMachineTypes.CallMethodParams<"mint">
    ): Promise<VendingMachineTypes.CallMethodResult<"mint">> => {
      return callMethod(
        VendingMachine,
        this,
        "mint",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends VendingMachineTypes.MultiCallParams>(
    calls: Calls
  ): Promise<VendingMachineTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      VendingMachine,
      this,
      calls,
      getContractByCodeHash
    )) as VendingMachineTypes.MultiCallResults<Calls>;
  }
}
