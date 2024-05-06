/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as DestroyScriptJson } from "../scripts/Destroy.ral.json";
import { default as SetMaxDurationScriptJson } from "../scripts/SetMaxDuration.ral.json";
import { default as SetMinDurationScriptJson } from "../scripts/SetMinDuration.ral.json";
import { default as SetOwnerScriptJson } from "../scripts/SetOwner.ral.json";
import { default as SetPriceScriptJson } from "../scripts/SetPrice.ral.json";
import { default as SubscribeScriptJson } from "../scripts/Subscribe.ral.json";
import { default as WithdrawScriptJson } from "../scripts/Withdraw.ral.json";

export const Destroy = new ExecutableScript<{ orderManager: HexString }>(
  Script.fromJson(DestroyScriptJson, "", [])
);

export const SetMaxDuration = new ExecutableScript<{
  orderManager: HexString;
  maxDuration: bigint;
}>(Script.fromJson(SetMaxDurationScriptJson, "", []));

export const SetMinDuration = new ExecutableScript<{
  orderManager: HexString;
  minDuration: bigint;
}>(Script.fromJson(SetMinDurationScriptJson, "", []));

export const SetOwner = new ExecutableScript<{
  orderManager: HexString;
  owner: Address;
}>(Script.fromJson(SetOwnerScriptJson, "", []));

export const SetPrice = new ExecutableScript<{
  orderManager: HexString;
  price: bigint;
}>(Script.fromJson(SetPriceScriptJson, "", []));

export const Subscribe = new ExecutableScript<{
  orderManager: HexString;
  duration: bigint;
}>(Script.fromJson(SubscribeScriptJson, "", []));

export const Withdraw = new ExecutableScript<{
  orderManager: HexString;
  amount: bigint;
}>(Script.fromJson(WithdrawScriptJson, "", []));
