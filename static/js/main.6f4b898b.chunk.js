(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(t,e,n){t.exports={formAddContact:"ContactForm_formAddContact__2kT46"}},12:function(t,e,n){t.exports=n(18)},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),l=n(1),i=n(11),s=n(2),u=n(3),m=n(4),d=n(6),b=n(5),f=n(10),h={name:"",number:""},C=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=Object(s.a)({},h),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number,o=t.props.onAddContact;e.preventDefault(),a&&Number(c)&&(o(Object(s.a)({},t.state)),t.setState(Object(s.a)({},h)))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:f.formAddContact,onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name",c.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChange})),c.a.createElement("label",null,"Number",c.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange})),c.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),p=function(t){var e=t.contacts,n=t.filter,a=t.handleFindName;return c.a.createElement("div",null,e.length>=2&&c.a.createElement("label",null,"Find contacts by name",c.a.createElement("input",{type:"text",name:"filter",value:n,onChange:a})))},v=n(7),E=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("ul",{className:v.list},e.map((function(t){var e=t.name,a=t.number,o=t.id;return c.a.createElement("li",{key:o},c.a.createElement("p",{className:v.itemContact},e,": ",c.a.createElement("span",null,a)),c.a.createElement("button",{className:v.btnDelete,type:"button",onClick:function(){return n(o)}},"Delete"))})))},O=n(20),g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:Object(O.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(O.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(O.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(O.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))alert("".concat(e.name," is already in contacts."));else{var n=Object(s.a)({id:Object(O.a)()},e);t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))}},t.findContact=function(t,e){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");if(t){var e=JSON.parse(t);this.setState({contacts:e})}}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.findContact(n,e);return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(C,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(p,{contacts:e,filter:n,handleFindName:this.handleChangeFilter}),c.a.createElement(E,{contacts:a,onDeleteContact:this.deleteContact}))}}]),n}(a.Component);n(17);r.a.render(c.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__YExYb",itemContact:"ContactList_itemContact__1PK7A",btnDelete:"ContactList_btnDelete__2IMi_"}}},[[12,1,2]]]);
//# sourceMappingURL=main.6f4b898b.chunk.js.map