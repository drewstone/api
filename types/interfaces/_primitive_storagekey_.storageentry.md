[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/StorageKey"](../modules/_primitive_storagekey_.md) › [StorageEntry](_primitive_storagekey_.storageentry.md)

# Interface: StorageEntry

## Hierarchy

* **StorageEntry**

## Callable

▸ (`arg?`: any): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/StorageKey.ts:13](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | any |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

## Index

### Properties

* [iterKey](_primitive_storagekey_.storageentry.md#optional-iterkey)
* [keyPrefix](_primitive_storagekey_.storageentry.md#keyprefix)
* [meta](_primitive_storagekey_.storageentry.md#meta)
* [method](_primitive_storagekey_.storageentry.md#method)
* [prefix](_primitive_storagekey_.storageentry.md#prefix)
* [section](_primitive_storagekey_.storageentry.md#section)
* [toJSON](_primitive_storagekey_.storageentry.md#tojson)

## Properties

### `Optional` iterKey

• **iterKey**? : *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) & [Codec](_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/StorageKey.ts:15](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L15)*

___

###  keyPrefix

• **keyPrefix**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/StorageKey.ts:16](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L16)*

___

###  meta

• **meta**: *StorageEntryMetadataLatest*

*Defined in [packages/types/src/primitive/StorageKey.ts:17](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L17)*

___

###  method

• **method**: *string*

*Defined in [packages/types/src/primitive/StorageKey.ts:18](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L18)*

___

###  prefix

• **prefix**: *string*

*Defined in [packages/types/src/primitive/StorageKey.ts:19](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L19)*

___

###  section

• **section**: *string*

*Defined in [packages/types/src/primitive/StorageKey.ts:20](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L20)*

___

###  toJSON

• **toJSON**: *function*

*Defined in [packages/types/src/primitive/StorageKey.ts:21](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/types/src/primitive/StorageKey.ts#L21)*

#### Type declaration:

▸ (): *any*