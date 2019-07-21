(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(313)},30:function(e,t,a){},31:function(e,t,a){},311:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=a(7),i=a.n(c),s=a(8),u=a(21),h=a(9),m=a(10),f=a(15),d=a(11),g=a(16),E=(a(30),a(315)),p=a(318),k=a(317),b=a(316),v=a(17),w="https://reactnd-books-api.udacity.com",y=localStorage.token;y||(y=localStorage.token=Math.random().toString(36).substr(-8));var S={Accept:"application/json",Authorization:y},j=function(e,t){return fetch("".concat(w,"/books/").concat(e.id),{method:"PUT",headers:Object(v.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},N=function(e){return fetch("".concat(w,"/search"),{method:"POST",headers:Object(v.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},O=(a(31),a(314)),R=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},r.a.createElement(O.a,{to:"/"},"My Reads")))},C=(a(34),function(e){return r.a.createElement("div",{className:"toast ".concat(e.active?"show":null)},e.text)}),x=(a(35),a(36),a(37),a(2)),M=a.n(x),_=function(){return r.a.createElement("ul",{className:"skeleton"},r.a.createElement("li",null,r.a.createElement(M.a,{width:136,height:183}),r.a.createElement(M.a,{width:61,height:18}),r.a.createElement(M.a,{width:136,height:12}),r.a.createElement(M.a,{width:136,height:12})),r.a.createElement("li",null,r.a.createElement(M.a,{width:136,height:183}),r.a.createElement(M.a,{width:61,height:18}),r.a.createElement(M.a,{width:136,height:12}),r.a.createElement(M.a,{width:136,height:12})),r.a.createElement("li",null,r.a.createElement(M.a,{width:136,height:183}),r.a.createElement(M.a,{width:61,height:18}),r.a.createElement(M.a,{width:136,height:12}),r.a.createElement(M.a,{width:136,height:12})),r.a.createElement("li",null,r.a.createElement(M.a,{width:136,height:183}),r.a.createElement(M.a,{width:61,height:18}),r.a.createElement(M.a,{width:136,height:12}),r.a.createElement(M.a,{width:136,height:12})),r.a.createElement("li",null,r.a.createElement(M.a,{width:136,height:183}),r.a.createElement(M.a,{width:61,height:18}),r.a.createElement(M.a,{width:136,height:12}),r.a.createElement(M.a,{width:136,height:12})))},T=(a(38),function(e){var t=e.book,a=e.onChangeShelf,n=t.title,o=t.shelf,l=t.previewLink,c=t.imageLinks,i=t.maturityRating,s=t.authors;return r.a.createElement("li",{className:"book"},r.a.createElement("div",{className:"book__cover"},r.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:c?c.thumbnail:"",alt:n}),"MATURE"===i&&r.a.createElement("small",{className:"book__maturity-rating"},"+17")),r.a.createElement("div",{className:"book__options"},r.a.createElement("select",{onChange:function(e){var n=e.target.value;return a(t,n)},defaultValue:o||"none"},r.a.createElement("option",{disabled:!0},"Select a shelf"),r.a.createElement("option",{value:"currentlyReading"},"Reading"),r.a.createElement("option",{value:"wantToRead"},"I want to read"),r.a.createElement("option",{value:"read"},"Read"),r.a.createElement("option",{value:"none"},"".concat(o?"Remove":"None"))))),r.a.createElement("ul",{className:"book__authors"},r.a.createElement("small",null,"author",s&&s.length>1?"s":""),s?s.map(function(e,t){return r.a.createElement("li",{key:t},e)}):r.a.createElement("li",null,"Unknown")))}),B=function(e){var t=e.loading,a=e.title,n=e.books,o=e.books.length,l=e.onChangeShelf;return r.a.createElement("div",{className:"shelf"},r.a.createElement("h3",null,a," (",o,")"),t&&r.a.createElement(_,null),r.a.createElement("ul",{className:"book-list"},n.map(function(e){return r.a.createElement(T,{key:e.id,book:e,onChangeShelf:l})}).reverse()))},q=a(12),A=function(e){var t=e.loading,a=e.books,n=e.onChangeShelf;return r.a.createElement("main",{id:"home"},r.a.createElement(B,{loading:t,title:"Reading",books:a.filter(function(e){return"currentlyReading"===e.shelf}),onChangeShelf:n}),r.a.createElement(B,{loading:t,title:"I want to read",books:a.filter(function(e){return"wantToRead"===e.shelf}),onChangeShelf:n}),r.a.createElement(B,{loading:t,title:"Read",books:a.filter(function(e){return"read"===e.shelf}),onChangeShelf:n}),r.a.createElement(O.a,{className:"add-book",to:"/search"},r.a.createElement(q.Plus,{color:"#ffffff"})))},I=(a(311),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={title:a.props.title,query:"",result:[]},a.handleResult=function(e,t){var n=a.state.result;a.setState({result:n.filter(function(t){return t.id!==e.id})}),a.props.onChangeShelf(e,t)},a.searchBook=function(){var e=Object(s.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,e.prev=1,!n.length){e.next=10;break}return e.next=5,N(n);case 5:r=e.sent,r.error?a.setState(function(e,t){return{result:[],query:"",title:"No books found. \ud83d\ude41"}}):a.setState(function(e,t){return{result:r,query:n,title:"Showing results for "}}),e.next=11;break;case 10:a.setState(function(e,t){return{result:[],query:"",title:t.title}});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.result,n=t.query,o=t.title,l=this.searchBook;return r.a.createElement("div",null,r.a.createElement("div",{className:"search-input"},r.a.createElement(q.Search,null),r.a.createElement("input",{type:"search",onChange:l,placeholder:"Search"})),r.a.createElement("main",{id:"#search"},r.a.createElement("div",{className:"result-message"},r.a.createElement("p",null,o," ",n&&r.a.createElement("span",null,n))),r.a.createElement("div",{className:"shelf"},r.a.createElement("ul",{className:"book-list"},!!a.length&&a.map(function(t){return r.a.createElement(T,{key:t.id,book:t,onChangeShelf:e.handleResult})})))))}}]),t}(n.Component)),J=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],toastMsg:"",loading:!0},a.changeShelf=function(e,t){var n=a.state.books;switch(e.shelf=t,n=[].concat(Object(u.a)(n.filter(function(t){return t.id!==e.id})),[e]),a.setState({books:n,link:t}),t){case"currentlyReading":a.setState({toastMsg:"Book moved to Reading"});break;case"read":a.setState({toastMsg:"Book moved to Read"});break;case"wantToRead":a.setState({toastMsg:"Book moved to I want to read"});break;default:a.setState({toastMsg:"Book removed from shelf"})}setTimeout(function(){return a.setState({toastMsg:""})},3e3),j(e,t)},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/books"),{headers:S}).then(function(e){return e.json()}).then(function(e){return e.books});case 2:t=e.sent,this.setState({books:t,loading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.books,a=e.loading,n=e.toastMsg,o=this.changeShelf;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(R,null),r.a.createElement(p.a,null,r.a.createElement(k.a,{exact:!0,path:"/",render:function(){return r.a.createElement(A,{books:t,loading:a,onChangeShelf:o})}}),r.a.createElement(k.a,{path:"/search",render:function(){return r.a.createElement(I,{onChangeShelf:o,title:"Type something to see results \ud83d\ude80"})}}),r.a.createElement(b.a,{from:"*",to:"/"})),r.a.createElement(C,{active:!!n,text:n})))}}]),t}(n.Component);l.a.render(r.a.createElement(J,null),document.getElementById("root"))},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.7ca2faba.chunk.js.map