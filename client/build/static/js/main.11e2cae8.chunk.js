(this["webpackJsonpmern-exercise"]=this["webpackJsonpmern-exercise"]||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),s=n.n(c),o=(n(72),n(20)),l=n(6),i=(n(73),n(74),n(13)),u=n(14),m=n(16),d=n(15),h=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar sticky-top navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"ExcerTracker"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/create",className:"nav-link"},"Create Exercise Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),n}(a.Component),f=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/edit/"+e.exercise._id},"Edit"),"\xa0\xa0",r.a.createElement("button",{className:"btn-link btn-anchor",onClick:function(){e.deleteExercise(e.exercise._id)}},"Delete")))},p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={exercises:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/exercises/").then((function(e){return e.json()})).then((function(t){return e.setState({exercises:t})})).catch((function(e){return console.log(e)}))}},{key:"deleteExercise",value:function(e){fetch("/api/exercises/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.state.exercises.map((function(t){return r.a.createElement(f,{exercise:t,deleteExercise:function(t){return e.deleteExercise(t)},key:t._id})})))))}}]),n}(a.Component),E=n(34),v=n.n(E),b=(n(56),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={username:"",description:"",duration:0,date:new Date,users:[]},a.id=a.props.match.params.id,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/exercises/"+this.id).then((function(e){return e.json()})).then((function(t){e.setState({username:t.username,description:t.description,duration:Number(t.duration),date:new Date(t.date)})})).catch((function(e){return console.log(e)})),fetch("/api/users/").then((function(e){return e.json()})).then((function(t){e.setState({users:t.map((function(e){return e.username}))})})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),fetch("/api/exercises/"+this.id,{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),window.location="/"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Edit Exercise Log"),r.a.createElement("form",{onSubmit:function(){return e.onSubmit()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{className:"form-control",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:function(t){return e.setState({duration:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement(v.a,{selected:this.state.date,onChange:function(t){return e.setState({date:t})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),n}(a.Component)),g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/users/").then((function(e){return e.json()})).then((function(t){t.length>0&&e.setState({users:t.map((function(e){return e.username})),username:t[0].username})})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),fetch("/api/exercises/",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),window.location="/"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{required:!0,className:"form-control",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:function(t){return e.setState({duration:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(v.a,{selected:this.state.date,onChange:function(t){return e.setState({date:t})}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"}))))}}]),n}(a.Component),N=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={username:""},a}return Object(u.a)(n,[{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};fetch("/api/users/",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),this.setState({username:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),n}(a.Component);var y=function(){return r.a.createElement(o.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement(l.a,{path:"/",exact:!0,component:p}),r.a.createElement(l.a,{path:"/edit/:id",component:b}),r.a.createElement(l.a,{path:"/create",component:g}),r.a.createElement(l.a,{path:"/user",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,n){e.exports=n(139)},72:function(e,t,n){},74:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.11e2cae8.chunk.js.map