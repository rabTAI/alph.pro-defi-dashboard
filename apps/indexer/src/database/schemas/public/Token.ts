// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type SocialId } from './Social';
import { type ColumnType, type Selectable, type Insertable, type Updateable } from 'kysely';

/** Identifier type for public.Token */
export type TokenId = string & { __brand: 'TokenId' };

/** Represents the table public.Token */
export default interface TokenTable {
  id: ColumnType<TokenId, TokenId | undefined, TokenId>;

  address: ColumnType<string, string, string>;

  symbol: ColumnType<string, string, string>;

  name: ColumnType<string, string, string>;

  decimals: ColumnType<number, number, number>;

  totalSupply: ColumnType<bigint, bigint, bigint>;

  listed: ColumnType<boolean, boolean | undefined, boolean>;

  description: ColumnType<string | null, string | null, string | null>;

  logo: ColumnType<string | null, string | null, string | null>;

  socialId: ColumnType<SocialId | null, SocialId | null, SocialId | null>;
}

export type Token = Selectable<TokenTable>;

export type NewToken = Insertable<TokenTable>;

export type TokenUpdate = Updateable<TokenTable>;
