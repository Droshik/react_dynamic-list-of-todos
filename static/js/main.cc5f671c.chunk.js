(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),c=n.n(s),o=n(5),l=n.n(o),u=n(6),i=n(8),d=n(1),m=n(2),p=n(4),h=n(3),f=(n(18),n(19),n(7)),v=n(9),b=n.n(v),_=(n(20),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",selectedTasks:"all"},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.chooseUser,a=e.selectedUser,s=e.checkboxHandler,c=this.state,o=c.query,l=c.selectedTasks,u=t.filter((function(e){return""!==e.title&&null!==e.userId})).filter((function(e){return o?e.title.toLowerCase().includes(o.toLowerCase()):e})).filter((function(e){return"Active"===l?!e.completed:"Completed"===l?e.completed:e}));return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("label",null,"Filters:"," ",r.a.createElement("input",{type:"text",className:"TodoList__name-filter",name:"query",value:this.state.query,onChange:this.handleChange,placeholder:"Search by title"})),r.a.createElement("select",{name:"selectedTasks",value:this.state.selectedTasks,onChange:this.handleChange},r.a.createElement("option",null,"All"),r.a.createElement("option",null,"Active"),r.a.createElement("option",null,"Completed")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},u.map((function(e){return r.a.createElement("li",{key:e.id,className:b()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed,onChange:function(){s(e.id)}}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:b()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===a}),type:"button",onClick:function(){n(e.userId)}},"User\xa0#",e.userId))})))))}}]),n}(r.a.Component)),E=function(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},y=(n(21),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.getUser()}},{key:"getUser",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=this.props.userId,E("/users/".concat(n));case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!this.state.user)return null;var t=this.state.user,n=t.id,a=t.name,s=t.email,c=t.phone;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",n)),r.a.createElement("h3",{className:"CurrentUser__name"},a),r.a.createElement("p",{className:"CurrentUser__email"},s),r.a.createElement("p",{className:"CurrentUser__phone"},c),r.a.createElement("button",{className:"button CurrentUser__clear",type:"button",onClick:function(){e.props.clear()}},"Clear"))}}]),n}(r.a.Component)),k=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.chooseUser=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:+t})},e.checkboxCompletedHandler=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):Object(i.a)({},e)}))}}))},e.userClear=function(){e.setState({selectedUserId:0})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(_,{todos:t,chooseUser:this.chooseUser,selectedUser:n,checkboxHandler:this.checkboxCompletedHandler})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(y,{userId:n,clear:this.userClear}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.cc5f671c.chunk.js.map