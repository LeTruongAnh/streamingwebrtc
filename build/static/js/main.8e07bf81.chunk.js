(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,n,t){e.exports=t(208)},152:function(e,n){},208:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(26),c=t.n(a),i=t(38),s=t(39),u=t(42),d=t(40),f=t(43),l=t(54),m=t.n(l),p=m()({loader:function(){return Promise.all([t.e(3),t.e(1)]).then(t.bind(null,370))},loading:function(){return r.a.createElement("div",null,"Loading")}}),y=function(){return r.a.createElement(p,null)},O=m()({loader:function(){return t.e(2).then(t.bind(null,367))},loading:function(){return r.a.createElement("div",null,"Loading")}}),v=function(){return r.a.createElement(O,null)},h=t(53),_=t(366),b=t(57),E=t(369),L=t(108),g=t(24),w=function(e){function n(){var e,t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={name:""},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Login Page"),"Input name:\xa0",r.a.createElement(E.a,{value:this.state.name,onChange:function(n){return e.setState({name:n.target.value})},size:"small",style:{width:"100px"}}),"\xa0",r.a.createElement(_.a,{to:"/home"},r.a.createElement(L.a,{onClick:function(){return e.props.login(e.state.name,g.a.emitRegisterNewUser)}},"Click to login")))}}]),n}(o.Component),R=Object(h.b)(function(e){return{user:e.user}},function(e){return{login:function(n,t){e(Object(b.b)(n,t))},verify:function(){e(Object(b.e)())}}})(w),j=t(371),N=t(373),C=t(372),I=(t(205),function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement(N.a,null,r.a.createElement(C.a,{exact:!0,path:"/home",component:y}),r.a.createElement(C.a,{exact:!0,path:"/",component:R}),r.a.createElement(C.a,{path:"/room",component:v})))}}]),n}(o.Component)),x=t(25),D=t(114),T=t(8),k={name:null,userList:[]},U={currentRoom:"",roomList:[]},S=Object(x.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_USER_LIST":return Object(T.a)({},e,{userList:n.payload});case"NEW_USER":return Object(T.a)({},e,{userList:-1==e.userList.indexOf(n.payload)?e.userList.concat([n.payload]):e.userList});case"NOTIFY_USER_DISCONNECTED":return Object(T.a)({},e,{userList:e.userList.filter(function(e){return e.id!=n.payload})});case"LOGIN":return Object(T.a)({},e,{name:n.payload});case"LOGOUT":return{name:null,userList:[]};case"VERIFY":return{token:n.payload};default:return e}},room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ROOM":return{currentRoom:"",roomList:n.payload};case"CREATE_ROOM":return{currentRoom:n.payload.id,roomList:-1==e.roomList.indexOf(n.payload)?e.roomList.concat([n.payload]):e.roomList};case"NOTIFY_NEW_ROOM_HAS_BEEN_CREATED":return Object(T.a)({},e,{roomList:-1==e.roomList.indexOf(n.payload)?e.roomList.concat([n.payload]):e.roomList});case"JOIN_ROOM":var t=e.roomList.map(function(e){return e.id==n.payload.id?Object(T.a)({},e,{peers:-1==e.peers.indexOf(n.payload.peer)?e.peers.concat([n.payload.peer]):e.peers}):e});return Object(T.a)({},e,{currentRoom:n.payload.id,roomList:t});case"NOTIFY_NEW_PEER_JOINED":var o=e.roomList.map(function(e){return e.id==n.payload.id?Object(T.a)({},e,{peers:-1==e.peers.indexOf(n.payload.peer)?e.peers.concat([n.payload.peer]):e.peers}):e});return Object(T.a)({},e,{roomList:o});case"NOTIFY_USER_LEFT_ROOM":var r=n.payload,a=r.roomID,c=r.peerID,i=r.removeRoom,s=r.newHost;if(1==i)return Object(T.a)({},e,{roomList:e.roomList.filter(function(e){return e.id!=a})});var u=e.roomList.map(function(e){return e.id==a?(0!=s&&e.peers.shift(),Object(T.a)({},e,{peers:0!=s?e.peers:e.peers.filter(function(e){return e.id!=c}),host:0!=s?s:e.host})):Object(T.a)({},e)});return Object(T.a)({},e,{roomList:u});default:return e}}}),F=t(115);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(F.createLogger)();var A=Object(x.d)(S,Object(x.a)(D.a));c.a.render(r.a.createElement(function(){return r.a.createElement(h.a,{store:A},r.a.createElement(I,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,n,t){"use strict";var o=t(111),r=t.n(o),a=t(61),c=r()("".concat("127.0.0.1",":").concat("3000")),i={onNotifyNewUserConnected:function(e,n){c.on("notify_new_user_connected",function(e){n(e)})},onNotifyUserDisconnected:function(e,n){c.on("notify_user_disconnected",function(e){n(e)})},emitRegisterNewUser:function(e){c.emit("register_new_user",e)},emitLoadUsers:function(e,n){c.emit("load_users",e,n)},emitLoadRooms:function(e,n){c.emit("load_rooms",e,n)},onNotifyNewRoomHasBeenCreated:function(e,n){c.on("notify_new_room_has_been_created",function(e){console.log("New Room has created: ",e),n(e)})},emitCreateRoom:function(e,n){c.emit("create_room",e,n)},onNotifyRoomClosed:function(e,n){c.on("notify_room_closed",function(e){console.log("Room: "+e+" has closed"),n(e)})},emitJoinRoom:function(e,n){c.emit("join_room",e,n)},onNotifyNewUserJoinedRoom:function(e,n){c.on("notify_new_user_joined_room",function(e){var t=e.id,o=e.peer;console.log("Room: "+t+" - New User has joined:"+o),n({id:t,peer:o})})},emitLeftRoom:function(e,n){c.emit("left_room",e,n)},onNotifyUserLeftRoom:function(e,n){c.on("notify_user_left_room",function(e){var t=e.roomID,o=e.peerID,r=e.removeRoom,a=e.newHost;n({roomID:t,peerID:o,removeRoom:r,newHost:a})})},onUserJoinMyRoom:function(e,n){c.on("new_peer",function(e){n(e)})},emitConnection:function(e,n){c.emit("peer_connect",e,n)},onConnection:function(){c.on("peer_connect",function(e,n){switch(console.log(e),e.type){case"add":return void Object(a.b)(e.candidate,e.isHost);case"offer":return void Object(a.a)(e.description,n);default:return}})}};n.a=i},57:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"c",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"b",function(){return c}),t.d(n,"e",function(){return i});var o=function(e){return function(n){n({type:"LOAD_USER_LIST",payload:e})}},r=function(e){return function(n){n({type:"NEW_USER",payload:e})}},a=function(e){return function(n){n({type:"NOTIFY_USER_DISCONNECTED",payload:e})}},c=function(e,n){return function(t){t({type:"LOGIN",payload:e}),n(e)}},i=function(){return function(e){}}},61:function(e,n,t){"use strict";t.d(n,"e",function(){return m}),t.d(n,"d",function(){return p}),t.d(n,"b",function(){return O}),t.d(n,"c",function(){return v}),t.d(n,"a",function(){return h});var o,r,a,c=t(16),i=t.n(c),s=t(37),u=t(24),d={iceServers:[{urls:["stun:ss-turn1.xirsys.com","turn:ss-turn1.xirsys.com:80?transport=udp","turn:ss-turn1.xirsys.com:3478?transport=udp","turn:ss-turn1.xirsys.com:80?transport=tcp","turn:ss-turn1.xirsys.com:3478?transport=tcp","turns:ss-turn1.xirsys.com:443?transport=tcp","turns:ss-turn1.xirsys.com:5349?transport=tcp"],credential:"9d61b156-f159-11e8-807d-32b0c04e5b2c",username:"\t9d61b0d4-f159-11e8-96d8-adf817ff6a2f"}]},f={offerToReceiveAudio:1,offerToReceiveVideo:1};function l(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var t=document.getElementById("myVideo");n?(t.muted=!0,t.controls=!1):(t.controls=!0,t.muted=!1),t.srcObject=e}catch(r){o&&o.getTracks().forEach(function(e){e.stop()})}}function m(){o&&(o.getTracks().forEach(function(e){e.stop()}),o=null)}var p=function(){var e=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:l(o=e.sent,!0),u.a.onUserJoinMyRoom(null,y);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark(function e(n){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("create Offer Function"),(a=new RTCPeerConnection(d)).addEventListener("icecandidate",function(e){console.log("host send candidate",e.candidate),u.a.emitConnection({type:"add",candidate:e.candidate,isHost:!0})}),o.getTracks().forEach(function(e){return a.addTrack(e,o)}),e.next=6,a.createOffer(f);case 6:t=e.sent,a.setLocalDescription(t),u.a.emitConnection({type:"offer",description:t,id:n},function(e){a.setRemoteDescription(e)});case 9:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),O=function(e,n){n?(console.log("client add candidate"),r.addIceCandidate(e)):(console.log("host add candidate"),a.addIceCandidate(e))},v=function(){var e=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("client Connect Function"),(r=new RTCPeerConnection(d)).addEventListener("icecandidate",function(e){console.log("client send candidate",e.candidate),u.a.emitConnection({type:"add",candidate:e.candidate,isHost:!1})}),r.addEventListener("track",function(e){l(e.streams[0])});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(i.a.mark(function e(n,t){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("go answer"),r.setRemoteDescription(n),e.next=4,r.createAnswer();case 4:o=e.sent,r.setLocalDescription(o),t(o);case 7:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()}},[[118,5,4]]]);
//# sourceMappingURL=main.8e07bf81.chunk.js.map