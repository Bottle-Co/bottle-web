(this.webpackJsonpbottle=this.webpackJsonpbottle||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/forest.0b9ced0a.mp4"},function(e,t,a){e.exports=a.p+"static/media/water.9955899f.mp4"},function(e,t,a){e.exports=a.p+"static/media/environment.9840377b.mp4"},function(e,t,a){e.exports=a.p+"static/media/Mask1.62ec4b91.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Mask2.da7c43f4.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Mask3.4a49ff26.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Process.9cbdcf77.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/life.11cb60f0.mp4"},function(e,t,a){e.exports=a.p+"static/media/BenefitsOfMask.a8dafc59.png"},,,function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),i=a.n(r),s=a(20),c=a.n(s),o=(a(30),function(e){return l.a.createElement("div",{className:"btl-header"},e.children)}),u=(a(31),function(){return l.a.createElement("span",{className:"btl-logo"},"Bottle & Co")}),m=a(2),d=a(3),b=a(5),f=a(4),h=a(21),p=(a(32),function(e){return l.a.createElement("section",{className:"btl-section",style:e.sectionStyles},l.a.createElement("div",{className:"btl-section-background",style:e.backgroundStyles},e.background),l.a.createElement("div",{className:"btl-section-content",style:e.contentStyles},e.children))}),v=(a(33),function(){return l.a.createElement("a",{href:"https://www.youtube.com/watch?v=hKFV9IquMXA",rel:"noopener noreferrer",target:"_blank",className:"rellax btl-jumbobtn btl-jumbobtn-white btl-jumbobtn-animated","data-rellax-speed":-3},"Discover the power")}),E=(a(34),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("video",{className:"btl-video rellax",width:"100%",height:"100%",loop:!0,muted:!0,autoPlay:!0,playsInline:!0},l.a.createElement("source",{src:this.props.source,type:"video/mp4"}))}}]),a}(n.Component)),y=(a(35),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(p,{background:l.a.createElement(E,{source:h}),backgroundStyles:{height:"100%"},contentStyles:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"rgba(0,0,0,0.35)",position:"absolute"},sectionStyles:{height:"100vh"}},l.a.createElement("div",{className:"btl-jumbotron-description-container"},l.a.createElement("p",{className:"btl-jumbotron-description"},"We make innovative clothes using single-use plastic bottles and sustainable fabrics."),l.a.createElement(v,null)))}}]),a}(n.Component)),g=a(10),N=a.n(g),k=a(11),w=a.n(k),S=a(12),C=a.n(S),x=a(13),F=a.n(x),j=a(14),O=a.n(j),P=a(15),R=a.n(P),M=a(16),I=a.n(M),T=a(22),B=a.n(T),A=(a(36),a(23)),D=a.n(A),X=(a(37),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleMouseMove=function(e){var t=e.clientX,a=e.clientY,l=n.cardRef.current.getBoundingClientRect(),r=l.top,i=(t-l.left)/l.width,s=(a-r)/l.height;console.log(n.videoRef),n.videoRef.current.play(),n.setState({rotX:2*i-1,rotY:2*s-1,shineX:100-90*i,shineY:100-90*s,pause:!1})},n.handleMouseLeave=function(e){n.videoRef.current.pause(),n.setState({rotX:0,rotY:0,shineX:.5,shineY:.5,pause:!0})},n.cardRef=l.a.createRef(),n.imageRef=l.a.createRef(),n.videoRef=l.a.createRef(),n.initializeBounce(),n.state={rotX:0,rotY:0,shineX:.5,shineY:.5,pause:!0},n}return Object(d.a)(a,[{key:"initializeBounce",value:function(){var e=new D.a;e.translate({from:{x:0,y:0},to:{x:0,y:0},easing:"bounce",duration:600,bounces:4,stiffness:4}).scale({from:{x:1,y:1},to:{x:.1,y:1.5},easing:"sway",duration:800,bounces:4,stiffness:2}).scale({from:{x:1,y:1},to:{x:3,y:1},easing:"sway",duration:300,bounces:4,stiffness:3}),e.define("splat-to-left")}},{key:"componentDidMount",value:function(){this.cardRef.current.addEventListener("mousemove",this.handleMouseMove),this.cardRef.current.addEventListener("mouseleave",this.handleMouseLeave)}},{key:"componentDidUpdate",value:function(){}},{key:"renderDescription",value:function(){return l.a.createElement("div",{className:"btl-CardDescription"},this.props.description)}},{key:"render",value:function(){return this.imageStyle={transform:"rotate3d(".concat(this.state.rotX,", ").concat(this.state.rotY,", 0, ").concat(this.props.deg,"deg)")},this.shineStyle={background:"radial-gradient(at ".concat(this.state.shineX,"% ").concat(this.state.shineY,"%, rgba(255, 255, 255, 0.1), transparent)"),boxShadow:this.state.pause?null:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},l.a.createElement("div",{ref:this.cardRef,className:"btl-Card"},l.a.createElement("div",{style:this.imageStyle,ref:this.imageRef},l.a.createElement("video",{ref:this.videoRef,className:"btl-CardImage",src:this.props.imageUrl,loop:!0,muted:!0,playsInline:!0},l.a.createElement("source",{src:this.props.imageUrl,type:"video/mp4"})),l.a.createElement("div",{className:"btl-CardContent"},l.a.createElement("h1",{className:"btl-CardTitle"},this.props.title),!this.state.pause&&this.renderDescription()),l.a.createElement("div",{className:"btl-CardShine",style:this.shineStyle})))}}]),a}(n.Component)),Y=a(24),H=(a(38),n.Component,a(39),a(40),function(e){return l.a.createElement("button",{className:"btl-zoom-image-card",onClick:e.onClick},l.a.createElement("img",{src:e.image}))}),L=(a(41),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={selectedProduct:null},e}return Object(d.a)(a,[{key:"getAllProducts",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{id:"1",image:F.a,onClick:function(){return e.setState({selectedProduct:1})}}),l.a.createElement(H,{id:"2",image:O.a,onClick:function(){return e.setState({selectedProduct:2})}}),l.a.createElement(H,{id:"3",image:R.a,onClick:function(){return e.setState({selectedProduct:3})}}))}},{key:"getProductFocusView",value:function(){var e,t=this;switch(this.state.selectedProduct){case 1:e=F.a;break;case 2:e=O.a;break;case 3:e=R.a;break;default:e=null}return l.a.createElement("div",{className:"btl-product-focus-container"},l.a.createElement("div",{className:"btl-product-content-container"},l.a.createElement(H,{image:e}),l.a.createElement("div",{className:"btl-product-content"},l.a.createElement("div",{className:"btl-product-content-inner"},this.getFocusHeader(),this.getFocusBullets()),l.a.createElement("button",{class:"ui blue button"},"Buy"))),l.a.createElement("button",{class:"circular ui icon button btl-product-cancel",onClick:function(){return t.setState({selectedProduct:null})}},l.a.createElement("i",{class:"icon cancel"})))}},{key:"getFocusHeader",value:function(){switch(this.state.selectedProduct){case 1:return l.a.createElement("h2",null,"N95 Mask");case 2:return l.a.createElement("h2",null,"Anti-Viral Mask");case 3:return l.a.createElement("h2",null,"Washable Mask");default:return null}}},{key:"getFocusBullets",value:function(){switch(this.state.selectedProduct){case 1:return l.a.createElement("ul",null,l.a.createElement("li",null,"Above 95% of filteration efficiency"),l.a.createElement("li",null,"3 layers of protection"),l.a.createElement("li",null,"High quality facial mouth cover"),l.a.createElement("li",null,"Odourless, non-irritant & non-allergic"),l.a.createElement("li",null,"Ease of breathing"),l.a.createElement("li",null,"Easily washable (upto 20 washes)"),l.a.createElement("li",null,"ISO 9001:2015 certified"));case 2:return l.a.createElement("ul",null,l.a.createElement("li",null,"Above 95% of filteration efficiency"),l.a.createElement("li",null,"3 layers of protection"),l.a.createElement("li",null,"High quality facial mouth cover"),l.a.createElement("li",null,"Odourless, non-irritant & non-allergic"),l.a.createElement("li",null,"Ease of breathing"),l.a.createElement("li",null,"Easily washable (upto 20 washes)"));case 3:return l.a.createElement("ul",null,l.a.createElement("li",null,"Above 95% of filteration efficiency"),l.a.createElement("li",null,"3 layers of protection"),l.a.createElement("li",null,"High quality facial mouth cover"),l.a.createElement("li",null,"Odourless, non-irritant & non-allergic"),l.a.createElement("li",null,"Ease of breathing"),l.a.createElement("li",null,"Easily washable (upto 20 washes)"),l.a.createElement("li",null,"ISO 9001:2015 certified"));default:return null}}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"btl-mask-gallery"},!this.state.selectedProduct&&this.getAllProducts(),this.state.selectedProduct&&this.getProductFocusView())}}]),a}(n.Component)),W=(n.Component,a(8)),z=a(9),U=(a(47),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getSocialSummary",value:function(){return l.a.createElement("div",{className:"btl-Footer-Summary"},l.a.createElement("span",{className:"btl-Footer-Summary-Title"},"Social"),l.a.createElement("div",{className:"btl-Footer-Summary-Description"},"Follow us on social media to find out the latest updates on our progress."),l.a.createElement("div",{className:"btl-Footer-Summary-SocialContainer"},l.a.createElement(W.a,{icon:z.d,size:"lg"}),l.a.createElement(W.a,{icon:z.a,size:"lg"}),l.a.createElement(W.a,{icon:z.b,size:"lg"}),l.a.createElement(W.a,{icon:z.c,size:"lg"})))}},{key:"getContactSummary",value:function(){return l.a.createElement("div",{className:"btl-Footer-Summary"},l.a.createElement("span",{className:"btl-Footer-Summary-Title"},"Contact"),l.a.createElement("div",{className:"btl-Footer-Summary-Items"},l.a.createElement("a",{href:"#team"},"Team"),l.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Marketing"),l.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Partnership"),l.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Get involved")))}},{key:"getResourceSummary",value:function(){return l.a.createElement("div",{className:"btl-Footer-Summary"},l.a.createElement("span",{className:"btl-Footer-Summary-Title"},"Resources"),l.a.createElement("div",{className:"btl-Footer-Summary-Items"},l.a.createElement("a",null,"Process of making"),l.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Impact"),l.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Insipration"),l.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Designs")))}},{key:"getTail",value:function(){return l.a.createElement("div",{className:"btl-Footer-Tail"},l.a.createElement("div",{className:"btl-Footer-CopyRight"},"\xa9 Bottle & Co. All rights reserved"),l.a.createElement("div",{className:"btl-Footer-TailLinks"},l.a.createElement("div",null,"Terms of Service"),l.a.createElement("div",null,"Privacy Policy"),l.a.createElement("div",null,"Security")))}},{key:"render",value:function(){return l.a.createElement(p,{sectionStyles:{backgroundColor:"#10182f",height:"50vh",width:"100%",boxShadow:"rgba(50, 50, 50, 1) 0px -5px 35px"}},l.a.createElement("div",{id:"contact",className:"btl-Footer-Container"},l.a.createElement("div",{className:"btl-Footer-Head"},l.a.createElement("div",{className:"btl-Footer-Row1"},l.a.createElement(u,null)),l.a.createElement("div",{className:"btl-Footer-Row2"},l.a.createElement("div",{className:"btl-Footer-Row2-Left"},this.getContactSummary(),this.getResourceSummary()),l.a.createElement("div",{className:"btl-Footer-Row2-Right"},this.getSocialSummary()))),this.getTail()))}}]),a}(n.Component)),q=a(6),V=a.n(q),J=(a(48),a(49),function(e){return l.a.createElement("a",{href:e.href,className:"btl-NavigationLink",onClick:e.onClick},e.label)}),G=(a(50),a(51),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"isOnScreen",value:function(e){var t=e.offset().top,a=t+e.outerHeight(),n=V()(window).scrollTop(),l=n+V()(window).height();return a>n&&t<l}},{key:"renderCards",value:function(){return l.a.createElement("div",{className:"btl-CardContainer"},l.a.createElement(X,{title:"Save trees",description:"Forests are the only livable habitat for a variety of species around the globe. Based on recent research 3.5 billion to 7 billion trees cut down each year.",imageUrl:N.a,deg:6}),l.a.createElement(X,{title:"Save water",description:"More than 8 million tons of plastic is dumped into our oceans every year. We have developed a 'disposable' lifestyle and estimates are that around 50% of plastic is used just once and thrown away.",imageUrl:w.a,deg:6}),l.a.createElement(X,{title:"Save air",description:"Burning plastic and other wastes releases dangerous substances such as heavy metals, persistent organic pollutants (POP), and other toxic chemicals into the air and persist in ash waste residues. These chemicals have been linked to the development of asthma, endocrine disruption and cancer.",imageUrl:C.a,deg:6}))}},{key:"componentDidMount",value:function(){var e=this;V()(window).scroll((function(){var t=V()(window).scrollTop(),a=V()(".btl-parallax-bottom").offset().top;console.log(t-a),e.isOnScreen(V()(".btl-parallax-bottom"))&&V()(".btl-parallax-bottom").css({transform:"translate(0px, ".concat(.5*(t-a),"px)")})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null,l.a.createElement(u,null),l.a.createElement("div",{className:"btl-NaviagtionLink-Container"},l.a.createElement(J,{href:"#about",label:"About"}),l.a.createElement(J,{href:"#shop",label:"Shop"}),l.a.createElement(J,{href:"#contact",label:"Contact"}))),l.a.createElement(y,null),l.a.createElement("div",{className:"btl-parallax-top"},l.a.createElement("div",{id:"about",className:"btl-section-content"},l.a.createElement("div",{className:"btl-mission-description"},l.a.createElement("div",{className:"btl-mission-description-header"},"What we do"),l.a.createElement("p",{className:"btl-mission-description-body"},"We, at Bottle&Co, believe not only in providing state-of-the-art solutions to modern day problems, but also in ensuring that our initiatives foster the restoration of ecological balance. We create sustainable, breathable and washable/reusable masks for everyone. Our products are manufactured by recycling single-use plastic products, such as bottles."),l.a.createElement("img",{className:"btl-mission-description-image",src:I.a})))),l.a.createElement("div",{className:"btl-parallax-bottom"},l.a.createElement("div",{id:"about",className:"btl-section-content"},l.a.createElement("div",{className:"btl-mission-description"},l.a.createElement("div",{className:"btl-mission-description-header"},"Why we do"),l.a.createElement("p",{className:"btl-mission-description-body"},"Covid-19 has kick-started a global race for Personal Protective Equipment (PPE), as various countries scramble to protect their frontline workers. Made up of non-biodegradable plastic, everyday masks add to the plastic waste in a significant manner."),this.renderCards(),l.a.createElement("p",{className:"btl-mission-description-body"},"To counter this movement and ensure removal of plastic waste from our landfills, oceans, etc., we have committed ourselves to take that very waste off the streets, and convert it into a high utility product, i.e Face masks.")))),l.a.createElement("div",{className:"btl-parallax-top"},l.a.createElement("div",{id:"about",className:"btl-section-content"},l.a.createElement("div",{className:"btl-mission-description"},l.a.createElement("div",{className:"btl-mission-description-header"},"How we do"),l.a.createElement("p",{className:"btl-mission-description-body"},"During this covid-19 crisis, our face-masks act as the first line of defence. To ensure and strengthen safety standards, we have gone a mile ahead, and have curated a fabric with Anti-viral & Anti-bacterial properties."),l.a.createElement(L,null),l.a.createElement("p",{className:"btl-mission-description-body",style:{marginTop:"1em"}},"Upon testing this fabric, we observed that it successfully neutralised 99.9% of any virus/flu (including Covid-19 or Coronavirus), within 10 minutes of contact. We have coupled this technology with our advanced recycling practice to create an optimal balance of safety, sustainability and welfare.")))),l.a.createElement(U,null))}}]),a}(l.a.Component)),K=function(){return l.a.createElement(G,null)};new c.a(".rellax");i.a.render(l.a.createElement(K,null),document.querySelector("#root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.c8f7402a.chunk.js.map