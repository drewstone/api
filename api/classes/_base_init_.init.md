[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Init"](../modules/_base_init_.md) › [Init](_base_init_.init.md)

# Class: Init <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

  ↳ [Decorate](_base_decorate_.decorate.md)‹ApiType›

  ↳ **Init**

## Index

### Constructors

* [constructor](_base_init_.init.md#constructor)

### Properties

* [#eventemitter](_base_init_.init.md##eventemitter)
* [#healthTimer](_base_init_.init.md##healthtimer)
* [#updateSub](_base_init_.init.md#optional-#updatesub)
* [registry](_base_init_.init.md#registry)

### Accessors

* [hasSubscriptions](_base_init_.init.md#hassubscriptions)

### Methods

* [#onProviderConnect](_base_init_.init.md##onproviderconnect)
* [#onProviderDisconnect](_base_init_.init.md##onproviderdisconnect)
* [#onProviderError](_base_init_.init.md##onprovidererror)
* [createType](_base_init_.init.md#createtype)
* [injectMetadata](_base_init_.init.md#injectmetadata)
* [off](_base_init_.init.md#off)
* [on](_base_init_.init.md#on)
* [once](_base_init_.init.md#once)
* [registerTypes](_base_init_.init.md#registertypes)

## Constructors

###  constructor

\+ **new Init**(`options`: ApiOptions, `type`: [ApiTypes](../modules/_types_base_.md#apitypes), `decorateMethod`: [DecorateMethod](../modules/_types_base_.md#decoratemethod)‹ApiType›): *[Init](_base_init_.init.md)*

*Overrides [Decorate](_base_decorate_.decorate.md).[constructor](_base_decorate_.decorate.md#constructor)*

*Defined in [api/src/base/Init.ts:25](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Init.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | ApiOptions |
`type` | [ApiTypes](../modules/_types_base_.md#apitypes) |
`decorateMethod` | [DecorateMethod](../modules/_types_base_.md#decoratemethod)‹ApiType› |

**Returns:** *[Init](_base_init_.init.md)*

## Properties

###  #eventemitter

• **#eventemitter**: *EventEmitter‹string | symbol›* = new EventEmitter()

*Inherited from [Events](_base_events_.events.md).[#eventemitter](_base_events_.events.md##eventemitter)*

*Defined in [api/src/base/Events.ts:10](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Events.ts#L10)*

___

###  #healthTimer

• **#healthTimer**: *Timeout | null* = null

*Defined in [api/src/base/Init.ts:23](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Init.ts#L23)*

___

### `Optional` #updateSub

• **#updateSub**? : *Subscription*

*Defined in [api/src/base/Init.ts:25](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Init.ts#L25)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Decorate](_base_decorate_.decorate.md).[registry](_base_decorate_.decorate.md#registry)*

*Defined in [api/src/base/Decorate.ts:42](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Decorate.ts#L42)*

## Accessors

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Inherited from [Decorate](_base_decorate_.decorate.md).[hasSubscriptions](_base_decorate_.decorate.md#hassubscriptions)*

*Defined in [api/src/base/Decorate.ts:156](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Decorate.ts#L156)*

**Returns:** *boolean*

`true` if the API operates with subscriptions

## Methods

###  #onProviderConnect

▸ **#onProviderConnect**(): *Promise‹void›*

*Defined in [api/src/base/Init.ts:213](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Init.ts#L213)*

**Returns:** *Promise‹void›*

___

###  #onProviderDisconnect

▸ **#onProviderDisconnect**(): *void*

*Defined in [api/src/base/Init.ts:243](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Init.ts#L243)*

**Returns:** *void*

___

###  #onProviderError

▸ **#onProviderError**(`error`: Error): *void*

*Defined in [api/src/base/Init.ts:253](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Init.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *void*

___

###  createType

▸ **createType**<**K**>(`type`: K, ...`params`: any[]): *InterfaceTypes[K]*

*Inherited from [Decorate](_base_decorate_.decorate.md).[createType](_base_decorate_.decorate.md#createtype)*

*Defined in [api/src/base/Decorate.ts:142](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Decorate.ts#L142)*

**`description`** Creates an instance of a type as registered

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |
`...params` | any[] |

**Returns:** *InterfaceTypes[K]*

___

###  injectMetadata

▸ **injectMetadata**(`metadata`: Metadata, `fromEmpty?`: undefined | false | true): *void*

*Inherited from [Decorate](_base_decorate_.decorate.md).[injectMetadata](_base_decorate_.decorate.md#injectmetadata)*

*Defined in [api/src/base/Decorate.ts:160](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Decorate.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | Metadata |
`fromEmpty?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[off](_base_events_.events.md#off)*

*Defined in [api/src/base/Events.ts:62](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Events.ts#L62)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = (): void => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to unregister.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[on](_base_events_.events.md#on)*

*Defined in [api/src/base/Events.ts:35](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Events.ts#L35)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[once](_base_events_.events.md#once)*

*Defined in [api/src/base/Events.ts:87](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Events.ts#L87)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): *void*

*Inherited from [Decorate](_base_decorate_.decorate.md).[registerTypes](_base_decorate_.decorate.md#registertypes)*

*Defined in [api/src/base/Decorate.ts:149](https://github.com/polkadot-js/api/blob/abebe9ef43/packages/api/src/base/Decorate.ts#L149)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** *void*