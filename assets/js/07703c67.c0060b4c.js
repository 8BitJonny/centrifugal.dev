"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1658],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={id:"history_and_recovery",title:"History and recovery"},l=void 0,c={unversionedId:"server/history_and_recovery",id:"server/history_and_recovery",title:"History and recovery",description:"Centrifugo engines can maintain publication history for channels with configured history size and TTL.",source:"@site/docs/server/history_and_recovery.md",sourceDirName:"server",slug:"/server/history_and_recovery",permalink:"/docs/next/server/history_and_recovery",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/history_and_recovery.md",tags:[],version:"current",frontMatter:{id:"history_and_recovery",title:"History and recovery"},sidebar:"Guides",previous:{title:"Proxy events to the backend",permalink:"/docs/next/server/proxy"},next:{title:"Admin web UI",permalink:"/docs/next/server/admin_web"}},p={},u=[{value:"History design",id:"history-design",level:2},{value:"History iteration API",id:"history-iteration-api",level:2},{value:"Automatic message recovery",id:"automatic-message-recovery",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo engines can maintain publication history for channels with configured history size and TTL."),(0,o.kt)("h2",{id:"history-design"},"History design"),(0,o.kt)("p",null,"History properties configured on a namespace level, to enable history both ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," should be set to a value greater than zero. "),(0,o.kt)("p",null,"Centrifugo is not designed to keep publications streams forever. Streams are ephemeral and can expire or can be lost at any moment. But Centrifugo provides a way for an application or a client to understand that stream history lost. In this case, the main application database should be the source of truth and state recovery."),(0,o.kt)("p",null,"When history is on every publication is published into a channel saved into history. Depending on the engine used history stream implementation can differ. For example, in the case of the Memory engine, all history is stored in process memory. So as soon as Centrifugo restarted all history is cleared. When using Redis engine history is kept in Redis Stream data structure - persistence properties are then inherited from Redis persistence configuration (the same for KeyDB engine). For Tarantool history is kept inside spaces."),(0,o.kt)("p",null,"Each publication when added to history has an ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," field. This is an incremental ",(0,o.kt)("inlineCode",{parentName:"p"},"uint64")," field. Each stream is identified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch")," field - which is an arbitrary string. As soon as the underlying engine loses data epoch field will change for a stream thus letting consumers know that stream can't be used as the source of truth anymore."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"History in channels is not enabled by default. See how to enable it over ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/server/channels#channel-options"},"channel options"),". History is available in both server and client API."))),(0,o.kt)("h2",{id:"history-iteration-api"},"History iteration API"),(0,o.kt)("p",null,"History iteration based on three fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"limit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"since")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reverse"))),(0,o.kt)("p",null,"Combining these fields you can iterate over a stream in both directions."),(0,o.kt)("p",null,"Get current stream top offset and epoch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"history(limit: 0, since: null, reverse: false)\n")),(0,o.kt)("p",null,"Get full history from the current beginning (but up to ",(0,o.kt)("inlineCode",{parentName:"p"},"client_history_max_publication_limit"),", which is ",(0,o.kt)("inlineCode",{parentName:"p"},"300")," by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"history(limit: -1, since: null, reverse: false)\n")),(0,o.kt)("p",null,"Get full history from the current end (but up to ",(0,o.kt)("inlineCode",{parentName:"p"},"client_history_max_publication_limit"),", which is ",(0,o.kt)("inlineCode",{parentName:"p"},"300")," by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"history(limit: -1, since: null, reverse: true)\n")),(0,o.kt)("p",null,"Get history from the current beginning (up to 10):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"history(limit: 10, since: null, reverse: false)\n")),(0,o.kt)("p",null,"Get history from the current end in reversed direction (up to 10):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"history(limit: 10, since: null, reverse: true) \n")),(0,o.kt)("p",null,"Get up to 10 publications since known stream position (described by offset and epoch values):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'history(limit: 10, since: {offset: 0, epoch: "epoch"}, reverse: false)\n')),(0,o.kt)("p",null,"Get up to 10 publications since known stream position (described by offset and epoch values) but in reversed direction (from last to earliest):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'history(limit: 10, since: {offset: 11, epoch: "epoch"}, reverse: true)\n')),(0,o.kt)("p",null,"Here is an example program in Go which endlessly iterates over stream both ends (using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/gocent"},"gocent")," API library), upon reaching the end of stream the iteration goes in reversed direction (not really useful in real world but fun): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Iterate by 10.\nlimit := 10\n// Paginate in reversed order first, then invert it.\nreverse := true\n// Start with nil StreamPosition, then fill it with value while paginating.\nvar sp *gocent.StreamPosition\n\nfor {\n    historyResult, err = c.History(\n        ctx,\n        channel,\n        gocent.WithLimit(limit),\n        gocent.WithReverse(reverse),\n        gocent.WithSince(sp),\n    )\n    if err != nil {\n        log.Fatalf("Error calling history: %v", err)\n    }\n    for _, pub := range historyResult.Publications {\n        log.Println(pub.Offset, "=>", string(pub.Data))\n        sp = &gocent.StreamPosition{\n            Offset: pub.Offset,\n            Epoch:  historyResult.Epoch,\n        }\n    }\n    if len(historyResult.Publications) < limit {\n        // Got all pubs, invert pagination direction.\n        reverse = !reverse\n        log.Println("end of stream reached, change iteration direction")\n    }\n}\n')),(0,o.kt)("h2",{id:"automatic-message-recovery"},"Automatic message recovery"),(0,o.kt)("p",null,"One of the most interesting features of Centrifugo is automatic message recovery after short network disconnects. This mechanism allows a client to automatically restore missed publications on successful resubscribe to a channel after being disconnected for a while."),(0,o.kt)("p",null,"In general, you could query your application backend for the actual state on every client reconnect - but the message recovery feature allows Centrifugo to deal with this and restore missed publications from the history cache thus radically reducing the load on your application backend and your main application database in some scenarios (when many clients reconnecting at the same time)."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Message recovery protocol feature designed to be used together with reasonably small Publication stream size as all missed publications sent towards the client in one protocol frame on resubscribing to a channel. Thus, it is mostly suitable for short-time disconnects. It helps a lot to survive a reconnect storm when many clients reconnect at one moment (balancer reload, network glitch) - but it's not a good idea to recover a long list of missed messages after clients being offline for a long time."))),(0,o.kt)("p",null,"To enable recovery mechanism for channels set the ",(0,o.kt)("inlineCode",{parentName:"p"},"recover")," boolean configuration option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," on the configuration file top-level or for a channel namespace. Make sure to enable this option in namespaces where history is on."),(0,o.kt)("p",null,"When re-subscribing on channels Centrifugo will return missed ",(0,o.kt)("inlineCode",{parentName:"p"},"publications")," to a client in a subscribe ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply"),", also it will return a special ",(0,o.kt)("inlineCode",{parentName:"p"},"recovered")," boolean flag to indicate whether all missed publications successfully recovered after a disconnect or not."),(0,o.kt)("p",null,"The number of publications that is possible to automatically recover is controlled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_recovery_max_publication_limit")," option which is ",(0,o.kt)("inlineCode",{parentName:"p"},"300")," by default. "),(0,o.kt)("p",null,"Centrifugo recovery model based on two fields in the protocol: ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch"),". All fields are managed automatically by Centrifugo client libraries (for bidirectional transport), but it's good to know how recovery works under the hood."),(0,o.kt)("p",null,"The recovery feature heavily relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch")," values described above."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"epoch")," handles cases when history storage has been restarted while the client was in a disconnected state so publication numeration in a channel started from scratch. For example at the moment Memory engine does not persist publication sequences on disk so every restart will start numeration from scratch. After each restart a new ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch")," field is generated, and we can understand in the recovery process that the client could miss messages thus returning the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"recovered")," flag in a subscribe ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply"),". This also applies to the Redis engine \u2013 if you do not use AOF with fsync then sequences can be lost after Redis restart. When using the Redis engine you need to use a fully in-memory model strategy or AOF with fsync to guarantee the reliability of the ",(0,o.kt)("inlineCode",{parentName:"p"},"recovered")," flag sent by Centrifugo."),(0,o.kt)("p",null,"When a server receives subscribe command with the boolean flag ",(0,o.kt)("inlineCode",{parentName:"p"},"recover")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch")," set to values last seen by a client (see ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscribeRequest")," type in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"protocol definitions"),") it will try to find all missed publications from history cache. Recovered publications will be passed to the client in a subscribe ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," in the correct order, so your publication handler will be automatically called to process each missed message."),(0,o.kt)("p",null,"You can also manually implement your recovery algorithm on top of the basic PUB/SUB possibilities that Centrifugo provides. As we said above you can simply ask your backend for an actual state after every client reconnects completely bypassing the recovery mechanism described here. Also, it's possible to manually iterate over the Centrifugo stream using the history iteration API described above."))}h.isMDXComponent=!0}}]);