(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{256:function(e,t,n){},360:function(e,t,n){},372:function(e,t,n){"use strict";n.r(t);var o=n(8),r=n(39),a=n(40),i=n(43),c=n(41),u=n(44),s=n(0),l=n.n(s),m=n(368),p=n(54),f=n(58),d=n(108),y=n(24),O=(n(256),n(370)),R=[{title:"Session ID",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"action",render:function(e,t){return l.a.createElement("span",null,l.a.createElement("a",{href:"javascript:;"},"To Do"))}}],h=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"USER LIST"),l.a.createElement(O.a,{rowKey:function(e){return e.id},columns:R,dataSource:this.props.userList,style:{width:"600px"}}))}}]),t}(l.a.Component),E=(n(360),[{title:"Room ID",dataIndex:"id",key:"id"},{title:"Host",dataIndex:"host.name",key:"host"},{title:"Action",key:"action",render:function(e,t){var n="/room/"+t.id;return l.a.createElement("span",null,l.a.createElement(m.a,{to:n,onClick:t.join},"Join"))}}]),j=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ROOM LIST"),l.a.createElement(O.a,{rowKey:function(e){return e.id},columns:E,dataSource:this.props.roomList,style:{width:"600px"}}))}}]),t}(l.a.Component),b=n(362),I=n.n(b),w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).call(this))).generateRoomID=I()(),e}return Object(u.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){y.a.onNotifyNewUserConnected(null,this.props.newUser),y.a.emitLoadUsers(null,this.props.loadUserList),y.a.emitLoadRooms(null,this.props.loadRoomList),y.a.onNotifyNewRoomHasBeenCreated(null,this.props.notifyNewRoomHasBeenCreated),y.a.onNotifyUserDisconnected(null,this.props.notifyUserDisconnected),y.a.onNotifyUserLeftRoom(null,this.props.notifyUserLeftRoom),y.a.onNotifyNewUserJoinedRoom(null,this.props.notifyNewPeerJoinedRoom)}},{key:"render",value:function(){var e=this,t="/room/"+this.generateRoomID+"/host",n=(this.props.user.id,this.props.room.roomList.map(function(t){return Object(o.a)({},t,{join:function(){y.a.emitJoinRoom(t.id,e.props.joinRoom)}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"HOME"),l.a.createElement(m.a,{to:t,onClick:function(){return y.a.emitCreateRoom(e.generateRoomID,e.props.createRoom)}},l.a.createElement(d.a,null,"Create Room")),l.a.createElement("hr",null),l.a.createElement(j,{roomList:n}),l.a.createElement(h,{userList:this.props.user.userList}))}}]),t}(s.Component);t.default=Object(p.b)(function(e){return{user:e.user,room:e.room}},function(e){return{verify:function(){e(Object(f.e)())},loadUserList:function(t){e(Object(f.a)(t))},newUser:function(t){e(Object(f.c)(t))},notifyUserDisconnected:function(t){e(Object(f.d)(t))},loadRoomList:function(t){e(function(e){return function(t){t({type:"LOAD_ROOM",payload:e})}}(t))},createRoom:function(t){e(function(e){return function(t){t({type:"CREATE_ROOM",payload:e})}}(t))},notifyNewRoomHasBeenCreated:function(t){e(function(e){return function(t){t({type:"NOTIFY_NEW_ROOM_HAS_BEEN_CREATED",payload:e})}}(t))},joinRoom:function(t,n){e(function(e){var t=e.id,n=e.peer;return function(e){e({type:"JOIN_ROOM",payload:{id:t,peer:n}})}}(t))},notifyUserLeftRoom:function(t){var n=t.roomID,o=t.peerID,r=t.removeRoom,a=t.newHost;e(function(e){var t=e.roomID,n=e.peerID,o=e.removeRoom,r=e.newHost;return function(e){e({type:"NOTIFY_USER_LEFT_ROOM",payload:{roomID:t,peerID:n,removeRoom:o,newHost:r}})}}({roomID:n,peerID:o,removeRoom:r,newHost:a}))},notifyNewPeerJoinedRoom:function(t,n){e(function(e){var t=e.id,n=e.peer;return function(e){e({type:"NOTIFY_NEW_PEER_JOINED",payload:{id:t,peer:n}})}}(t))}}})(w)}}]);
//# sourceMappingURL=1.64220dff.chunk.js.map