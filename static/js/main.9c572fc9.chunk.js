(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{12:function(e,a,t){},21:function(e,a,t){e.exports=t(44)},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),c=t(2),o=t.n(c),m=t(14),l=t(15),u=t(16),v=t(19),d=t(17),p=t(20),_=t(18),g=t.n(_);t(12);var y=function(e){var a=e.title,t=e.year,n=e.rating,s=e.summary,i=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:i,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title",style:{backgroundColor:"red"}},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("h5",{className:"movie__rating"},n),r.a.createElement("p",{className:"movie__summary"},s.slice(0,200),"...")))},E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(v.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=Object(m.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"}," ",a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,title:e.title,year:e.year,rating:e.rating,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))," ")}}]),a}(r.a.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9c572fc9.chunk.js.map