(this["webpackJsonpreact-styling-exercise"]=this["webpackJsonpreact-styling-exercise"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,c,a,l=n(0),i=n.n(l),s=n(12),o=n.n(s),u=(n(20),n(21),n(2)),j=n(3),d=n(5),h=n(4),b=n(6),p=n(7),O=n(1),k=p.a.div(r||(r=Object(b.a)(["\n  padding: 10px;\n  border: 1px solid black;\n  width: 60px;\n"]))),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(k,{onClick:function(){return e.props.onClick(e.props.value)},children:this.props.value})}}]),n}(l.Component),v=p.a.div(c||(c=Object(b.a)(["\n  padding: 10px;\n  border: 1px solid black;\n  width: 60px;\n"]))),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(v,{onClick:function(){return e.props.onClick(e.props.value)},children:this.props.value})}}]),n}(l.Component),f=p.a.div(a||(a=Object(b.a)(["\n  border: 1px solid black;\n  width: 300px;\n  height: 70px;\n  text-align: right;\n  margin-bottom: 10px;\n"]))),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsx)(f,{children:this.props.value})}}]),n}(l.Component),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={first:null,operator:null,second:null},e.handleNumberClick=function(t){e.state.operator?e.setState({second:"".concat(e.state.second||"").concat(t)}):e.setState({first:"".concat(e.state.first||"").concat(t)})},e.handleOperatorClick=function(t){if("="===t){var n=parseInt(e.state.first),r=parseInt(e.state.second);"+"===e.state.operator?e.setState({operator:null,first:n+r,second:null}):"/"===e.state.operator?e.setState({operator:null,first:n/r,second:null}):"-"===e.state.operator?e.setState({operator:null,first:n-r,second:null}):"x"===e.state.operator&&e.setState({operator:null,first:n*r,second:null})}else"clear"===t?e.setState({first:null,second:null,operator:null}):e.setState({operator:t})},e.getScreenValue=function(){return e.state.second||e.state.first},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m,{value:this.getScreenValue()}),Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{value:0,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:1,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:2,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:3,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:4,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:5,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:6,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:7,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:8,onClick:this.handleNumberClick}),Object(O.jsx)(x,{value:9,onClick:this.handleNumberClick})]}),Object(O.jsxs)("div",{style:{paddingLeft:10},children:[Object(O.jsx)(C,{value:"+",onClick:this.handleOperatorClick}),Object(O.jsx)(C,{value:"/",onClick:this.handleOperatorClick}),Object(O.jsx)(C,{value:"x",onClick:this.handleOperatorClick}),Object(O.jsx)(C,{value:"-",onClick:this.handleOperatorClick}),Object(O.jsx)(C,{value:"=",onClick:this.handleOperatorClick}),Object(O.jsx)(C,{value:"clear",onClick:this.handleOperatorClick})]})]})]})}}]),n}(l.Component);var g=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{children:"Calculator"}),Object(O.jsx)(y,{})]})};o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.12f3cca5.chunk.js.map