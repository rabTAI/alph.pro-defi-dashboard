// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type ColumnType, type Selectable, type Insertable, type Updateable } from 'kysely';

/** Identifier type for public.PluginBlock */
export type PluginBlockId = string & { __brand: 'PluginBlockId' };

/** Represents the table public.PluginBlock */
export default interface PluginBlockTable {
  id: ColumnType<PluginBlockId, PluginBlockId | undefined, PluginBlockId>;

  pluginName: ColumnType<string, string, string>;

  blockHash: ColumnType<string, string, string>;
}

export type PluginBlock = Selectable<PluginBlockTable>;

export type NewPluginBlock = Insertable<PluginBlockTable>;

export type PluginBlockUpdate = Updateable<PluginBlockTable>;
