"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7965],{3905:function(e,n,i){i.d(n,{Zo:function(){return p},kt:function(){return h}});var t=i(7294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var r=t.createContext({}),c=function(e){var n=t.useContext(r),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},p=function(e){var n=c(e.components);return t.createElement(r.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(i),h=o,m=b["".concat(r,".").concat(h)]||b[h]||u[h]||a;return i?t.createElement(m,s(s({ref:n},p),{},{components:i})):t.createElement(m,s({ref:n},p))}));function h(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=b;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=i[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}b.displayName="MDXCreateElement"},5740:function(e,n,i){i.r(n),i.d(n,{assets:function(){return p},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=i(3117),o=i(102),a=(i(7294),i(3905)),s=["components"],l={id:"channel_permissions",title:"Channel permission model"},r=void 0,c={unversionedId:"server/channel_permissions",id:"server/channel_permissions",title:"Channel permission model",description:"When using Centrifugo server API you don't need to think about channel permissions at all \u2013 everything is allowed. In server API case, request to Centrifugo must be issued by your application backend \u2013 so you have all the power to check any required permissions before issuing API request to Centrifugo.",source:"@site/docs/server/channel_permissions.md",sourceDirName:"server",slug:"/server/channel_permissions",permalink:"/docs/next/server/channel_permissions",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/channel_permissions.md",tags:[],version:"current",frontMatter:{id:"channel_permissions",title:"Channel permission model"},sidebar:"Guides",previous:{title:"Channels and namespaces",permalink:"/docs/next/server/channels"},next:{title:"Channel JWT authorization",permalink:"/docs/next/server/channel_token_auth"}},p={},u=[{value:"Subscribe permission model",id:"subscribe-permission-model",level:3},{value:"Provide subscription token",id:"provide-subscription-token",level:4},{value:"Configure subscribe proxy",id:"configure-subscribe-proxy",level:4},{value:"Use user-limited channels",id:"use-user-limited-channels",level:4},{value:"Use allow_subscribe_for_client namespace option",id:"use-allow_subscribe_for_client-namespace-option",level:4},{value:"Subscribe capabilities in connection token",id:"subscribe-capabilities-in-connection-token",level:4},{value:"Subscribe capabilities in connect proxy",id:"subscribe-capabilities-in-connect-proxy",level:4},{value:"Publish permission model",id:"publish-permission-model",level:3},{value:"Use allow_publish_for_client namespace option",id:"use-allow_publish_for_client-namespace-option",level:4},{value:"Use allow_publish_for_subscriber namespace option",id:"use-allow_publish_for_subscriber-namespace-option",level:4},{value:"Configure publish proxy",id:"configure-publish-proxy",level:4},{value:"Publish capabilities in connection token",id:"publish-capabilities-in-connection-token",level:4},{value:"Publish capability in subscription token",id:"publish-capability-in-subscription-token",level:4},{value:"Publish capabilities in connect proxy",id:"publish-capabilities-in-connect-proxy",level:4},{value:"Publish capability in subscribe proxy",id:"publish-capability-in-subscribe-proxy",level:4},{value:"History permission model",id:"history-permission-model",level:3},{value:"Use allow_history_for_subscriber namespace option",id:"use-allow_history_for_subscriber-namespace-option",level:4},{value:"Use allow_history_for_client namespace option",id:"use-allow_history_for_client-namespace-option",level:4},{value:"History capabilities in connection token",id:"history-capabilities-in-connection-token",level:4},{value:"History capabilities in subscription token",id:"history-capabilities-in-subscription-token",level:4},{value:"History capabilities in connect proxy",id:"history-capabilities-in-connect-proxy",level:4},{value:"History capability in subscribe proxy response",id:"history-capability-in-subscribe-proxy-response",level:4},{value:"Presence permission model",id:"presence-permission-model",level:3},{value:"Presence capability in subscribe proxy response",id:"presence-capability-in-subscribe-proxy-response",level:4},{value:"Use allow_presence_for_subscriber namespace option",id:"use-allow_presence_for_subscriber-namespace-option",level:4},{value:"Use allow_presence_for_client namespace option",id:"use-allow_presence_for_client-namespace-option",level:4},{value:"Presence capabilities in connection token",id:"presence-capabilities-in-connection-token",level:4},{value:"Presence capabilities in subscription token",id:"presence-capabilities-in-subscription-token",level:4},{value:"Presence capabilities in connect proxy",id:"presence-capabilities-in-connect-proxy",level:4},{value:"Positioning permission model",id:"positioning-permission-model",level:3},{value:"Recovery permission model",id:"recovery-permission-model",level:3}],b={toc:u};function h(e){var n=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},b,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When using Centrifugo server API you don't need to think about channel permissions at all \u2013 everything is allowed. In server API case, request to Centrifugo must be issued by your application backend \u2013 so you have all the power to check any required permissions before issuing API request to Centrifugo."),(0,a.kt)("p",null,"The situation is different when we are talking about client real-time API."),(0,a.kt)("p",null,"In order to configure which client (i.e. connection established using one of supported bidirectional real-time transports) can subscribe to channels and call publish, history and presence real-time APIs Centrifugo provides several ways to configure the desired behavior."),(0,a.kt)("p",null,"Let's start from looking at Centrifugo subscribe permission model."),(0,a.kt)("h3",{id:"subscribe-permission-model"},"Subscribe permission model"),(0,a.kt)("p",null,"By default, client's attempt to subscribe on a channel will be rejected by a server with ",(0,a.kt)("inlineCode",{parentName:"p"},"103: permission denied")," error. There are several approaches how to control channel subscribe permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#provide-subscription-token"},"Provide subscription token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configure-subscribe-proxy"},"Configure subscribe proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-user-limited-channels"},"Use user-limited channels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-subscribeallowedforclient-namespace-option"},"Use subscribe_allowed_for_client namespace option")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#subscribe-capabilities-in-connection-token"},"Subscribe capabilities in connection token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#subscribe-capabilities-in-connect-proxy"},"Subscribe capabilities in connect proxy"))),(0,a.kt)("p",null,"Below, we are describing those in detail."),(0,a.kt)("h4",{id:"provide-subscription-token"},"Provide subscription token"),(0,a.kt)("p",null,"A client can provide a subscription token in subscribe request. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/server/channel_token_auth"},"the format of the token"),"."),(0,a.kt)("p",null,"If client provides a valid token then subscription will be accepted. In Centrifugo PRO subscription token can additionally grant ",(0,a.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"presence")," permissions to a client."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For namespaces with ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_subscribe_for_client")," option ON Centrifugo does not allow subscribing on channels starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"private_channel_prefix")," (",(0,a.kt)("inlineCode",{parentName:"p"},"$")," by default) without token. This limitation exists to help users migrate to Centrifugo v4 without security risks."))),(0,a.kt)("h4",{id:"configure-subscribe-proxy"},"Configure subscribe proxy"),(0,a.kt)("p",null,"If client subscribes on a namespace with configured subscribe proxy then depending on proxy response subscription will be accepted or not."),(0,a.kt)("p",null,"If a namespace has configured subscribe proxy, but user came with a token \u2013 then subscribe proxy is not used, we are relying on token in this case. If a namespace has subscribe proxy, but user subscribes on a user-limited channel \u2013 then subscribe proxy is not used also."),(0,a.kt)("h4",{id:"use-user-limited-channels"},"Use user-limited channels"),(0,a.kt)("p",null,"If client subscribes on a user-limited channel and there is a user ID match then subscription will be accepted."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"User-limited channels must be enabled in a namespace using ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_user_limited_channels")," option."))),(0,a.kt)("h4",{id:"use-allow_subscribe_for_client-namespace-option"},"Use allow_subscribe_for_client namespace option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allow_subscribe_for_client")," allows all connections to subscribe on all channels in a namespace."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Turning this option on effectively makes namespace public \u2013 no subscribe permissions will be checked. Make sure this is really what you want in terms of channels security. "))),(0,a.kt)("h4",{id:"subscribe-capabilities-in-connection-token"},"Subscribe capabilities in connection token"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connection token can contain a capability object to allow user subscribe to channels."),(0,a.kt)("h4",{id:"subscribe-capabilities-in-connect-proxy"},"Subscribe capabilities in connect proxy"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connect proxy can return capability object to allow user subscribe to channels."),(0,a.kt)("h3",{id:"publish-permission-model"},"Publish permission model"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In idiomatic Centrifugo use case data should be published to channels from the application backend (over server API). In this case backend can validate data, save it into persistent storage before publishing in real-time towards connections. When publishing from the client-side backend does not receive publication data at all \u2013 it just goes through Centrifugo (except using publish proxy). There are cases when direct publications from the client-side are desired (like typing indicators in chat applications) though."))),(0,a.kt)("p",null,"By default, client's attempt to publish data into a channel will be rejected by a server with ",(0,a.kt)("inlineCode",{parentName:"p"},"103: permission denied")," error. There are several approaches how to control channel publish permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configure-publish-proxy"},"Configure publish proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-allowpublishforsubscriber-namespace-option"},"Use allow_publish_for_subscriber namespace option")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-allowpublishforclient-namespace-option"},"Use allow_publish_for_client namespace option")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#publish-capabilities-in-connection-token"},"Publish capabilities in connection token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#publish-capability-in-subscription-token"},"Publish capability in subscription token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#publish-capabilities-in-connect-proxy"},"Publish capabilities in connect proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#publish-capability-in-subscribe-proxy"},"Publish capability in subscribe proxy"))),(0,a.kt)("h4",{id:"use-allow_publish_for_client-namespace-option"},"Use allow_publish_for_client namespace option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allow_publish_for_client")," allows publications to channels of a namespace for all client connections. "),(0,a.kt)("h4",{id:"use-allow_publish_for_subscriber-namespace-option"},"Use allow_publish_for_subscriber namespace option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allow_publish_for_subscriber")," allows publications to channels of a namespace for all connections subscribed on a channel they want to publish data into."),(0,a.kt)("h4",{id:"configure-publish-proxy"},"Configure publish proxy"),(0,a.kt)("p",null,"If client publishes to a namespace with configured publish proxy then depending on proxy response publication will be accepted or not."),(0,a.kt)("p",null,"Configured publish proxy always used??? (what if user has permission in token or allow_publish_for_client?)"),(0,a.kt)("h4",{id:"publish-capabilities-in-connection-token"},"Publish capabilities in connection token"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connection token can contain a capability object to allow client to publish to channels."),(0,a.kt)("h4",{id:"publish-capability-in-subscription-token"},"Publish capability in subscription token"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connection token can contain a capability object to allow client to publish to a channel."),(0,a.kt)("h4",{id:"publish-capabilities-in-connect-proxy"},"Publish capabilities in connect proxy"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connect proxy can return capability object to allow client publish to certain channels."),(0,a.kt)("h4",{id:"publish-capability-in-subscribe-proxy"},"Publish capability in subscribe proxy"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Subscribe proxy can return capability object to allow subscriber publish to channel."),(0,a.kt)("h3",{id:"history-permission-model"},"History permission model"),(0,a.kt)("p",null,"By default, client's attempt to call history from a channel (with history retention configured) will be rejected by a server with ",(0,a.kt)("inlineCode",{parentName:"p"},"103: permission denied")," error. There are several approaches how to control channel history permissions."),(0,a.kt)("h4",{id:"use-allow_history_for_subscriber-namespace-option"},"Use allow_history_for_subscriber namespace option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allow_history_for_subscriber")," allows history requests to all channels in a namespace for all client connections subscribed on a channel they want to call history for."),(0,a.kt)("h4",{id:"use-allow_history_for_client-namespace-option"},"Use allow_history_for_client namespace option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allow_history_for_client")," allows history requests to all channels in a namespace for all client connections."),(0,a.kt)("h4",{id:"history-capabilities-in-connection-token"},"History capabilities in connection token"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connection token can contain a capability object to allow user call history for channels."),(0,a.kt)("h4",{id:"history-capabilities-in-subscription-token"},"History capabilities in subscription token"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connection token can contain a capability object to allow user call history from a channel."),(0,a.kt)("h4",{id:"history-capabilities-in-connect-proxy"},"History capabilities in connect proxy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This is a Centrifugo PRO feature.")),(0,a.kt)("p",null,"Connect proxy can return capability object to allow client call history from certain channels."),(0,a.kt)("h4",{id:"history-capability-in-subscribe-proxy-response"},"History capability in subscribe proxy response"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Subscribe proxy can return capability object to allow subscriber call history from channel."),(0,a.kt)("h3",{id:"presence-permission-model"},"Presence permission model"),(0,a.kt)("p",null,"By default, client's attempt to call presence from a channel (with channel presence configured) will be rejected by a server with ",(0,a.kt)("inlineCode",{parentName:"p"},"103: permission denied")," error. There are several approaches how to control channel presence permissions."),(0,a.kt)("h4",{id:"presence-capability-in-subscribe-proxy-response"},"Presence capability in subscribe proxy response"),(0,a.kt)("p",null,"Subscribe proxy can return capability object to allow subscriber call presence from channel."),(0,a.kt)("h4",{id:"use-allow_presence_for_subscriber-namespace-option"},"Use allow_presence_for_subscriber namespace option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allow_presence_for_subscriber")," allows presence requests to all channels in a namespace for all client connections subscribed on a channel they want to call presence for."),(0,a.kt)("h4",{id:"use-allow_presence_for_client-namespace-option"},"Use allow_presence_for_client namespace option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allow_presence_for_client")," allows presence requests to all channels in a namespace for all client connections. "),(0,a.kt)("h4",{id:"presence-capabilities-in-connection-token"},"Presence capabilities in connection token"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connection token can contain a capability object to allow user call presence for channels."),(0,a.kt)("h4",{id:"presence-capabilities-in-subscription-token"},"Presence capabilities in subscription token"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connection token can contain a capability object to allow user call presence of a channel."),(0,a.kt)("h4",{id:"presence-capabilities-in-connect-proxy"},"Presence capabilities in connect proxy"),(0,a.kt)("p",null,(0,a.kt)("mark",null,"Centrifugo PRO only")),(0,a.kt)("p",null,"Connect proxy can return capability object to allow client call presence from certain channels."),(0,a.kt)("h3",{id:"positioning-permission-model"},"Positioning permission model"),(0,a.kt)("p",null,"Server can whether turn on positioning for all channels in a namespace using ",(0,a.kt)("inlineCode",{parentName:"p"},'"force_positioning": true')," option or client can create positioned subscriptions (in namespaces with ",(0,a.kt)("inlineCode",{parentName:"p"},'"allow_possitioning": true')," or if client has ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," capability)."),(0,a.kt)("h3",{id:"recovery-permission-model"},"Recovery permission model"),(0,a.kt)("p",null,"Server can whether turn on automatic recovery for all channels in a namespace using ",(0,a.kt)("inlineCode",{parentName:"p"},'"force_recovery": true')," option or client can create recoverable subscriptions (in namespaces with ",(0,a.kt)("inlineCode",{parentName:"p"},'"allow_possitioning": true')," or if client has ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," capability)."))}h.isMDXComponent=!0}}]);