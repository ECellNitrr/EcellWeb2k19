(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{112:function(e,t,a){e.exports=a.p+"static/media/banner.7df14f25.png"},113:function(e,t,a){},114:function(e,t,a){e.exports=a.p+"static/media/bulb.9ef1ec78.png"},115:function(e,t,a){},116:function(e,t,a){e.exports=a.p+"static/media/deliver.a7d20743.svg"},117:function(e,t,a){},118:function(e,t,a){e.exports=a.p+"static/media/run.d196960f.png"},119:function(e,t,a){},135:function(e,t,a){e.exports=a.p+"static/media/spons.4f96b4e8.svg"},136:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(54),l=a(55),s=a(57),r=a(56),i=a(58),o=a(0),c=a.n(o),m=a(61),d=a(112),u=a.n(d),p=(a(113),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={days:"-",hours:"-",mins:"-",seconds:"-",distance:"-"},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date("Aug 31, 2019 00:00:00").getTime(),a=setInterval(function(){var n=(new Date).getTime(),l=t-n,s=Math.floor(l/864e5),r=Math.floor(l%864e5/36e5),i=Math.floor(l%36e5/6e4),o=Math.floor(l%6e4/1e3);e.setState({days:s,hours:r,mins:i,seconds:o,distance:l}),l<0&&clearInterval(a)},1e3)}},{key:"render",value:function(){var e=c.a.createElement("div",{className:"countdown"},c.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.days,c.a.createElement("span",null,"Days")),c.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.hours,c.a.createElement("span",null,"Hours")),c.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.mins,c.a.createElement("span",null,"Minutes")),c.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded"},this.state.seconds,c.a.createElement("span",null,"Seconds")));return this.state.distance<0&&(e=null),c.a.createElement("section",{className:"intro"},c.a.createElement("div",{className:"container-fluid ctn-1"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-7 col-lg-7 banner-col"},c.a.createElement("div",null,c.a.createElement("div",{className:"banner-div"},c.a.createElement("img",{alt:"banner",className:"banner",src:u.a})),e)),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-5 col-lg-5 bulb-col"},c.a.createElement("p",{className:"bulb"},c.a.createElement("img",{alt:"bulb",className:"image-1",src:a(114)})))),c.a.createElement("div",{className:"wave"})))}}]),t}(o.Component)),h=(a(115),function(){return c.a.createElement("div",{className:"about"},c.a.createElement("div",{className:"container-fluid ctn-2"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},c.a.createElement("div",{className:"anim"},c.a.createElement("h2",{className:"heading-1"},"ABOUT US")),c.a.createElement("h3",{className:"heading-2"},"We Promote Startups"),c.a.createElement("p",{className:"text-5"},"The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come.Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas, funding mentoring, other mentorship programs, workshops to help them organize their strategy and frequent, highly interactive speaker sessions and lecture series.",c.a.createElement("br",null),c.a.createElement("br",null),"At E-Summit we aspire to create a m\xe9lange of eminent speakers who have proved themselves in diverse fields and are at the zenith of glory.E-Summit\u201918 will not just be a conclave of innovative minds and epistemic elocutionists, but it will be the place where ideas not only thrive but become the greatest revelations of the century.")),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center"},c.a.createElement("img",{src:a(116),alt:"tshirts",className:"fb-img"})))))}),g=(a(117),a(118)),E=a.n(g),f=function(){return c.a.createElement("div",{className:"vision"},c.a.createElement("div",{className:"container-fluid ctn-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-7"},c.a.createElement("h2",{className:"heading-5"},"Our Vision"),c.a.createElement("p",{className:"text-6"},"The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come. Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas.")),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-5 col3"},c.a.createElement("p",{className:"run"},c.a.createElement("img",{alt:"Running Man",className:"running-man",src:E.a}))))))},v=(a(119),a(120)),b=a.n(v),N=a(134),w=a(51),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).axios=Object(w.b)(),a.state={sponsors:[],loading:!0},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/sponsors/list/2018/").then(function(t){var a=t.data.data;console.log(a);for(var n=a.length-1;n>0;n--){var l=Math.floor(Math.random()*(n+1)),s=[a[l],a[n]];a[n]=s[0],a[l]=s[1]}e.setState({sponsors:a,loading:!1})})}},{key:"render",value:function(){console.log(this.state.sponsors);var e=this.state.sponsors.map(function(e){return c.a.createElement("div",{className:"col",key:e.id},c.a.createElement("div",{className:"cont",key:e.id},c.a.createElement("div",{className:"front shadow-lg p-3 mb-5 bg-white rounded"},c.a.createElement("img",{alt:e.name,className:"spons-Image",src:e.pic_url})),c.a.createElement("div",{className:"back shadow-lg p-3 mb-5 bg-white rounded"},c.a.createElement("div",{className:"inner"},c.a.createElement("h6",{style:{fontWeight:"800"}},e.name),c.a.createElement("p",{className:"ph-no"},e.contact),c.a.createElement("p",null,e.details),c.a.createElement("p",null,c.a.createElement("a",{className:"web",href:e.website},"Website"))))))});return c.a.createElement("div",{className:"spons"},c.a.createElement(N.Parallax,{blur:3,bgImage:a(135),bgImageAlt:"sponsors",strength:700},c.a.createElement(b.a,{dots:!0,infinite:!1,speed:500,slidesToShow:5,slidesToScroll:5,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},this.state.loading?c.a.createElement("h1",{className:"text-center text-white w-100 my-5"},"loading..."):e)))}}]),t}(o.Component),x=a(11),k=a(12),O=a(14),S=a(13),j=a(15),T=(a(136),function(e){function t(){return Object(x.a)(this,t),Object(O.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid ctn-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-7"},c.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},c.a.createElement("iframe",{className:"embed-responsive-item",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5453983644497!2d81.60270025099706!3d21.249868185498716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde241e3e46d%3A0xf42216385880421e!2sEntrepreneurship+Cell!5e0!3m2!1sen!2sin!4v1561393367581!5m2!1sen!2sin",width:"600",height:"400",frameBorder:"0",allowFullScreen:!0}))),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-5",style:{textAlign:"center"}},c.a.createElement("h2",{style:{fontWeight:"800",borderBottom:"5px solid",borderRadius:"20px",marginBottom:"15px",marginTop:"30px",paddingBottom:"15px"}},"Contact Us"),c.a.createElement("h6",{style:{fontWeight:"600",marginBottom:"15px"}},"Leave a Message"),c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"Name",id:"visitor-name",required:!0,minLength:"5",maxLength:"30",placeholder:"Your Name"})),c.a.createElement("div",null,c.a.createElement("input",{id:"visitor-email",type:"email",required:!0,placeholder:"Your Email"})),c.a.createElement("div",null,c.a.createElement("textarea",{id:"message",required:!0,minLength:"30",maxLength:"100",rows:"5",placeholder:"Your Message"})),c.a.createElement("div",null,c.a.createElement("button",{className:"submit",type:"submit"},"SUBMIT"))))))}}]),t}(o.Component));T.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var M=a(52);a.d(t,"default",function(){return A});var A=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#adforcaModal_toggle").click()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement(p,null),c.a.createElement(h,null),c.a.createElement(f,null),c.a.createElement(y,null),c.a.createElement(T,null),c.a.createElement(M.a,null))}}]),t}(o.Component)},52:function(e,t,a){"use strict";var n=a(59),l=a(0),s=a.n(l),r=a(24),i=(a(53),a(60)),o=a.n(i);t.a=function(){return s.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},s.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/"},"Home")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/events"},"Events")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/speakers"},"Speakers")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/sponsors"},"Sponsors")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/team"},"Team"))),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},s.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:o.a}),s.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions."),s.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),s.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),s.a.createElement("p",{style:{fontSize:"40px"}},s.a.createElement("a",{href:"https://www.facebook.com/ecellnitrr/",target:"_blank"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"https://www.instagram.com/ecell.nitraipur/",target:"_blank"},s.a.createElement("i",{className:"fab fa-instagram"})),s.a.createElement("a",{href:"https://twitter.com/ecellnitrr?lang=en",target:"_blank"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"https://in.linkedin.com/company/entrepreneurship-cell-nit-raipur",target:"_blank"},s.a.createElement("i",{className:"fab fa-linkedin"}))),s.a.createElement("div",null,s.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),s.a.createElement("div",null,s.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),s.a.createElement("br",null),s.a.createElement(r.b,{style:{color:"white"},to:"/terms"},"Terms and Conditions"),s.a.createElement("br",null),s.a.createElement(r.b,{style:{color:"white"},to:"/policy"},"Private Policy")))))}},53:function(e,t,a){}}]);
//# sourceMappingURL=6.b4650caa.chunk.js.map