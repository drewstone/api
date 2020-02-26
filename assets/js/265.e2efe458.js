(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{461:function(e,t,a){"use strict";a.r(t);var o=a(28),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-user-generated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-user-generated"}},[e._v("#")]),e._v(" TypeScript user generated")]),e._v(" "),a("p",[e._v("In the previous section we looked at the TypeScript definitions that are available and is generated from both the chain and definitions. Here we will expand upon the use of the infrastructure created to define types as part of the "),a("code",[e._v("@polkadot/types")]),e._v(" library and see how to use them to generate your onw definitions and chain types.")]),e._v(" "),a("h2",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),a("p",[e._v("A large part of the type definitions are defined not as classes, but rather as structures from which type definitions are extracted and that can be used as-is to let the API know how to decode a type. By now you should be familiar with "),a("RouterLink",{attrs:{to:"/start/types.extend.html"}},[e._v("type extensions")]),e._v(", but effectively the "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("types library does exactly the same"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("p",[e._v("To create TypeScript-aware definitions and keep your files in a single place, you can follow the same approach. Assuming you have a package named "),a("code",[e._v("@MeInc/stuff")]),e._v(" where you have the definitions in an "),a("code",[e._v("stuff/interfaces")]),e._v(" folder. Each sub-folder would indicate a runtime module, e.g.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("stuff/interfaces/<module>/definitions.ts")]),e._v(" for each module ("),a("code",[e._v("types.ts")]),e._v(" & "),a("code",[e._v("index.ts")]),e._v(" will be generated)")]),e._v(" "),a("li",[a("code",[e._v("stuff/interfaces/definitions.ts")]),e._v(" importing all sub-definitions`")])]),e._v(" "),a("p",[e._v("With this structure setup, you can generate TypeScript definitions.")]),e._v(" "),a("p",[e._v("In the root of your project (with the "),a("code",[e._v("@polkadot/typegen")]),e._v(" package installed), you can run "),a("code",[e._v("yarn polkadot-types-from-defs --input ./stuff/interfaces --package @MeInc/stuff/interfaces")]),e._v(" which will create "),a("code",[e._v("types.ts")]),e._v(" and "),a("code",[e._v("index.ts")]),e._v(" files with the generated types. You can use these in exactly the same way as you would use your types from "),a("code",[e._v("@polkadot/types/interfaces")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"chain-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-modules"}},[e._v("#")]),e._v(" Chain modules")]),e._v(" "),a("p",[e._v("In the same way as the type library provides defaults from a substrate-base chain, you can also, directly from chain from metadata, generate a complete "),a("code",[e._v("api.{consts,query}.*")]),e._v(" definition for your specific chain. The command will create 2 files, "),a("code",[e._v("{consts, query}.types.ts")]),e._v(" which you can either use to augment the TypeScript definitions, or replace those in "),a("code",[e._v("@polkadot/api/*")]),e._v(" with your versions (copy, TypeScript replacement or browser/node aliasing).")]),e._v(" "),a("p",[e._v("In the root of your project, you can run "),a("code",[e._v("yarn polkadot-types-from-chain --endpoint wss://<url> --output ./stuff")]),e._v(" and it will create the required output. (Here you can specify an optional "),a("code",[e._v("--package @MeInc/stuff")]),e._v(" to read definitions for the targeted output folder with the specified package name.)")]),e._v(" "),a("h2",{attrs:{id:"example-of-actual-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-actual-use"}},[e._v("#")]),e._v(" Example of actual use")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/examples/promise/90_typegen/"}},[e._v("TypeScript augmentation example")]),e._v(" example provides a full real-world example of these scripts in action. Additionally it shows all the configurations from a TypeScript as well as an in-use perspective, showing how the types and interfaces are fully augmented based on the provided metadata.")],1),e._v(" "),a("h2",{attrs:{id:"and-that-s-a-wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-that-s-a-wrap"}},[e._v("#")]),e._v(" And that's a wrap")]),e._v(" "),a("p",[e._v("This brings us to the end of our overview and jump through the API. While the documentation is still very much and ever evolving item, we can encourage you to try out what you have learned with some "),a("a",{attrs:{href:"../examples"}},[e._v("examples")]),e._v(". As we "),a("RouterLink",{attrs:{to:"/start/#help-us-help-others"}},[e._v("indicated right at the start of this journey")]),e._v(", if there are areas for improvement, let us know.")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);