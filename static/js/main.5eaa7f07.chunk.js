(this.webpackJsonpbottle=this.webpackJsonpbottle||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/forest.0b9ced0a.mp4"},function(e,t,a){e.exports=a.p+"static/media/water.9955899f.mp4"},function(e,t,a){e.exports=a.p+"static/media/environment.9840377b.mp4"},function(e,t,a){e.exports=a.p+"static/media/Mask1.62ec4b91.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Mask2.da7c43f4.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Mask3.4a49ff26.jpeg"},function(e,t,a){e.exports=a.p+"static/media/Process.9cbdcf77.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/life.11cb60f0.mp4"},function(e,t,a){e.exports=a.p+"static/media/BenefitsOfMask.a8dafc59.png"},,,function(e,t,a){e.exports=a.p+"static/media/Mask1.336838fd.png"},function(e,t,a){e.exports=a.p+"static/media/BottleLogoT.5db7e1ee.png"},,,,function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),o=a(20),c=a.n(o),s=(a(35),function(e){return r.a.createElement("div",{className:"btl-header"},e.children)}),u=(a(36),function(){return r.a.createElement("span",{className:"btl-logo"},"Bottle & Co")}),m=a(2),d=a(3),p=a(5),h=a(4),b=a(21),f=(a(37),function(e){return r.a.createElement("section",{className:"btl-section",style:e.sectionStyles},r.a.createElement("div",{className:"btl-section-background",style:e.backgroundStyles},e.background),r.a.createElement("div",{className:"btl-section-content",style:e.contentStyles},e.children))}),v=(a(38),function(){return r.a.createElement("a",{href:"https://www.youtube.com/watch?v=hKFV9IquMXA",rel:"noopener noreferrer",target:"_blank",className:"rellax btl-jumbobtn btl-jumbobtn-white btl-jumbobtn-animated","data-rellax-speed":-3},"Discover the power")}),y=(a(39),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("video",{className:"btl-video rellax",width:"100%",height:"100%",loop:!0,muted:!0,autoPlay:!0,playsInline:!0},r.a.createElement("source",{src:this.props.source,type:"video/mp4"}))}}]),a}(n.Component)),g=(a(40),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(f,{background:r.a.createElement(y,{source:b}),backgroundStyles:{height:"100%"},contentStyles:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"rgba(0,0,0,0.35)",position:"absolute"},sectionStyles:{height:"100vh"}},r.a.createElement("div",{className:"btl-jumbotron-description-container"},r.a.createElement("p",{className:"btl-jumbotron-description"},"We make innovative clothes using single-use plastic bottles and sustainable fabrics."),r.a.createElement(v,null)))}}]),a}(n.Component)),E=a(10),k=a.n(E),w=a(11),N=a.n(w),S=a(12),C=a.n(S),x=a(13),O=a.n(x),T=a(14),F=a.n(T),j=a(15),P=a.n(j),R=a(16),M=a.n(R),I=a(22),D=a.n(I),B=(a(41),a(23)),A=a.n(B),Y=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleMouseMove=function(e){var t=e.clientX,a=e.clientY,r=n.cardRef.current.getBoundingClientRect(),l=r.top,i=(t-r.left)/r.width,o=(a-l)/r.height;console.log(n.videoRef),n.videoRef.current.play(),n.setState({rotX:2*i-1,rotY:2*o-1,shineX:100-90*i,shineY:100-90*o,pause:!1})},n.handleMouseLeave=function(e){n.videoRef.current.pause(),n.setState({rotX:0,rotY:0,shineX:.5,shineY:.5,pause:!0})},n.cardRef=r.a.createRef(),n.imageRef=r.a.createRef(),n.videoRef=r.a.createRef(),n.initializeBounce(),n.state={rotX:0,rotY:0,shineX:.5,shineY:.5,pause:!0},n}return Object(d.a)(a,[{key:"initializeBounce",value:function(){var e=new A.a;e.translate({from:{x:0,y:0},to:{x:0,y:0},easing:"bounce",duration:600,bounces:4,stiffness:4}).scale({from:{x:1,y:1},to:{x:.1,y:1.5},easing:"sway",duration:800,bounces:4,stiffness:2}).scale({from:{x:1,y:1},to:{x:3,y:1},easing:"sway",duration:300,bounces:4,stiffness:3}),e.define("splat-to-left")}},{key:"componentDidMount",value:function(){this.cardRef.current.addEventListener("mousemove",this.handleMouseMove),this.cardRef.current.addEventListener("mouseleave",this.handleMouseLeave)}},{key:"componentDidUpdate",value:function(){}},{key:"renderDescription",value:function(){return r.a.createElement("div",{className:"btl-CardDescription"},this.props.description)}},{key:"render",value:function(){return this.imageStyle={transform:"rotate3d(".concat(this.state.rotX,", ").concat(this.state.rotY,", 0, ").concat(this.props.deg,"deg)")},this.shineStyle={background:"radial-gradient(at ".concat(this.state.shineX,"% ").concat(this.state.shineY,"%, rgba(255, 255, 255, 0.1), transparent)"),boxShadow:this.state.pause?null:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},r.a.createElement("div",{ref:this.cardRef,className:"btl-Card"},r.a.createElement("div",{style:this.imageStyle,ref:this.imageRef},r.a.createElement("video",{ref:this.videoRef,className:"btl-CardImage",src:this.props.imageUrl,loop:!0,muted:!0,playsInline:!0},r.a.createElement("source",{src:this.props.imageUrl,type:"video/mp4"})),r.a.createElement("div",{className:"btl-CardContent"},r.a.createElement("h1",{className:"btl-CardTitle"},this.props.title),!this.state.pause&&this.renderDescription()),r.a.createElement("div",{className:"btl-CardShine",style:this.shineStyle})))}}]),a}(n.Component)),G=a(29),X=(a(43),n.Component,a(44),function(e){return r.a.createElement("button",{className:"btl-zoom-image-card",onClick:e.onClick},r.a.createElement("img",{src:e.image}))}),H=a(24),z=a(1),L=a.n(z),U=(a(47),a(25)),W=a.n(U),q=a(26),J=a.n(q),K=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"btl-productcard-container",onClick:this.props.onClick},r.a.createElement("div",{className:"btl-productcard-card"},r.a.createElement("div",{className:"btl-productcard-card-head",style:Object(H.a)({background:this.props.baseColor||"#fa782e"},"background","linear-gradient(135deg, ".concat(this.props.headGradientStart||"#fa782e"," 8%, ").concat(this.props.headGradientEnd||"#c82930"," 83%)"))},r.a.createElement("img",{src:J.a,alt:"logo",className:"btl-productcard-logo"}),r.a.createElement("img",{src:W.a,alt:"Shoe",className:"btl-productcard-product"}),r.a.createElement("div",{className:"btl-productcard-details"},r.a.createElement("h2",null,this.props.headTitle)," ",this.props.headDescription),r.a.createElement("span",{className:"btl-productcard-back-text"},this.props.backText)),r.a.createElement("div",{className:"btl-productcard-card-body"},r.a.createElement("span",{className:"btl-productcard-product-title"},r.a.createElement("b",null,this.props.bodyTitle),this.props.isNew&&r.a.createElement("span",{className:"btl-productcard-badge"},"New")),r.a.createElement("span",{className:"btl-productcard-product-caption"},this.props.bodyCaption),r.a.createElement("ul",{className:"btl-productcard-product-properties"},r.a.createElement("li",null,"Above 95% of filteration efficiency"),r.a.createElement("li",null,"3 layers of protection"),r.a.createElement("li",null,"High quality facial mouth cover"),r.a.createElement("li",null,"Odourless, non-irritant & non-allergic"),r.a.createElement("li",null,"Ease of breathing"),r.a.createElement("li",null,"Easily washable (upto 20 washes)"),r.a.createElement("li",null,"ISO 9001:2015 certified")),r.a.createElement("span",{className:"btl-productcard-product-price"},"\u20b9",r.a.createElement("b",null,"159")))))}}]),a}(n.Component);K.protoTypes={onClick:L.a.func,baseColor:L.a.string,headgradientStart:L.a.string,headgradientEnd:L.a.string,backText:L.a.string,headTitle:L.a.string,headDescription:L.a.string,bodyTitle:L.a.string,bodyCaption:L.a.string,isNew:L.a.bool,price:L.a.number};var V=K,_=a(27),Q=(a(48),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={selectedProduct:null},e}return Object(d.a)(a,[{key:"getAllProducts",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{id:"1",image:O.a,onClick:function(){return e.setState({selectedProduct:1})}}),r.a.createElement(X,{id:"2",image:F.a,onClick:function(){return e.setState({selectedProduct:2})}}),r.a.createElement(X,{id:"3",image:P.a,onClick:function(){return e.setState({selectedProduct:3})}}))}},{key:"getAllProductsV2",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{id:"1",baseColor:"#54f38a",headGradientStart:"#54f38a",headGradientEnd:"#0ba23e",headTitle:"Space Journey",headDescription:"Soft fabric that covers entire face, non-woven fabric, light & breathable. 3-Ply, with a melt-blown polypropylene filtration layer.",backText:"BOT",bodyTitle:"Space Journey",bodyCaption:"Ant-viral mask",isNew:!0,onClick:function(){return e.setState({selectedProduct:1})}}),r.a.createElement(V,{id:"2",baseColor:"#54f38a",headGradientStart:"#ff8ea1",headGradientEnd:"#ff4261",headTitle:"Space Journey",headDescription:"Soft fabric that covers entire face, non-woven fabric, light & breathable. 3-Ply, with a melt-blown polypropylene filtration layer.",backText:"BOT",bodyTitle:"Space Journey",bodyCaption:"Ant-viral mask",isNew:!0,onClick:function(){return e.setState({selectedProduct:2})}}),r.a.createElement(V,{id:"3",baseColor:"#54f38a",headGradientStart:"#00cdcd",headGradientEnd:"#008181",headTitle:"Space Journey",headDescription:"Soft fabric that covers entire face, non-woven fabric, light & breathable. 3-Ply, with a melt-blown polypropylene filtration layer.",backText:"BOT",bodyTitle:"Space Journey",bodyCaption:"Ant-viral mask",isNew:!0,onClick:function(){return e.setState({selectedProduct:3})}}))}},{key:"getProductFocusView",value:function(){var e,t=this;switch(this.state.selectedProduct){case 1:e=O.a;break;case 2:e=F.a;break;case 3:e=P.a;break;default:e=null}return r.a.createElement("div",{className:"btl-product-focus-container"},r.a.createElement("div",{className:"btl-product-content-container"},r.a.createElement(X,{image:e}),r.a.createElement("div",{className:"btl-product-content"},r.a.createElement("div",{className:"btl-product-content-inner"},this.getFocusHeader(),this.getFocusBullets()),r.a.createElement("button",{class:"ui blue button",id:"checkout-button-".concat(this.getStripePriceId()),onClick:this.getBuyOnClick()},"Buy"))),r.a.createElement("button",{class:"circular ui icon button btl-product-cancel",onClick:function(){return t.setState({selectedProduct:null})}},r.a.createElement("i",{class:"icon cancel"})))}},{key:"getStripePriceId",value:function(){switch(this.state.selectedProduct){case 1:return"price_1H1HOtD8YQ9Kv8aM5mXxskDP";case 2:return"price_1H1HOID8YQ9Kv8aM2Y7EZyCa";case 3:return"price_1GuGY0D8YQ9Kv8aMTyrgxSW7";default:return null}}},{key:"getBuyOnClick",value:function(){var e=this.getStripePriceId();return function(){Object(_.a)("pk_test_51GreEtD8YQ9Kv8aMl8TubaNyh4BIb60hXhXzuDylgzvlhEub4bv76ZxufGdFbPLwkOYthGCdgxRM3pKwaYDSKsDT00eFSXjkX1").then((function(t){return t.redirectToCheckout({lineItems:[{price:e,quantity:1}],mode:"payment",successUrl:"https://your-website.com/success",cancelUrl:"https://your-website.com/canceled"}).then((function(e){e.error&&(document.getElementById("error-message").textContent=e.error.message)}))}))}}},{key:"getFocusHeader",value:function(){switch(this.state.selectedProduct){case 1:return r.a.createElement("h2",null,"N95 Mask");case 2:return r.a.createElement("h2",null,"Anti-Viral Mask");case 3:return r.a.createElement("h2",null,"Washable Mask");default:return null}}},{key:"getFocusBullets",value:function(){switch(this.state.selectedProduct){case 1:return r.a.createElement("ul",null,r.a.createElement("li",null,"Above 95% of filteration efficiency"),r.a.createElement("li",null,"3 layers of protection"),r.a.createElement("li",null,"High quality facial mouth cover"),r.a.createElement("li",null,"Odourless, non-irritant & non-allergic"),r.a.createElement("li",null,"Ease of breathing"),r.a.createElement("li",null,"Easily washable (upto 20 washes)"),r.a.createElement("li",null,"ISO 9001:2015 certified"));case 2:return r.a.createElement("ul",null,r.a.createElement("li",null,"Above 95% of filteration efficiency"),r.a.createElement("li",null,"3 layers of protection"),r.a.createElement("li",null,"High quality facial mouth cover"),r.a.createElement("li",null,"Odourless, non-irritant & non-allergic"),r.a.createElement("li",null,"Ease of breathing"),r.a.createElement("li",null,"Easily washable (upto 20 washes)"));case 3:return r.a.createElement("ul",null,r.a.createElement("li",null,"Above 95% of filteration efficiency"),r.a.createElement("li",null,"3 layers of protection"),r.a.createElement("li",null,"High quality facial mouth cover"),r.a.createElement("li",null,"Odourless, non-irritant & non-allergic"),r.a.createElement("li",null,"Ease of breathing"),r.a.createElement("li",null,"Easily washable (upto 20 washes)"),r.a.createElement("li",null,"ISO 9001:2015 certified"));default:return null}}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"btl-mask-gallery"},!this.state.selectedProduct&&this.getAllProductsV2(),this.state.selectedProduct&&this.getProductFocusView())}}]),a}(n.Component)),Z=(n.Component,a(7)),$=a(8),ee=a(28),te=(a(52),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getSocialSummary",value:function(){return r.a.createElement("div",{className:"btl-Footer-Summary"},r.a.createElement("span",{className:"btl-Footer-Summary-Title"},"Social"),r.a.createElement("div",{className:"btl-Footer-Summary-Description"},"Follow us on social media to find out the latest updates on our progress."),r.a.createElement("div",{className:"btl-Footer-Summary-SocialContainer"},r.a.createElement(Z.a,{className:"btl-connect-button",icon:$.e,size:"lg"}),r.a.createElement(Z.a,{className:"btl-connect-button",icon:$.a,size:"lg"}),r.a.createElement(Z.a,{className:"btl-connect-button",icon:$.c,size:"lg"}),r.a.createElement(Z.a,{className:"btl-connect-button",icon:$.d,size:"lg"})))}},{key:"getEmailSummary",value:function(){return r.a.createElement("div",{className:"btl-Footer-Summary",style:{marginBottom:"2em"}},r.a.createElement("span",{className:"btl-Footer-Summary-Title"},"Get in touch"),r.a.createElement("div",{className:"btl-Footer-Summary-SocialContainer"},r.a.createElement(Z.a,{className:"btl-connect-button",icon:ee.a,size:"lg",onClick:function(){return window.location.href="mailto:info@bottlenco.com"}}),r.a.createElement(Z.a,{className:"btl-connect-button",icon:$.b,size:"lg"})))}},{key:"getContactSummary",value:function(){return r.a.createElement("div",{className:"btl-Footer-Summary"},r.a.createElement("span",{className:"btl-Footer-Summary-Title"},"Contact"),r.a.createElement("div",{className:"btl-Footer-Summary-Items"},r.a.createElement("a",{href:"#team"},"Team"),r.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Marketing"),r.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Partnership"),r.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Get involved")))}},{key:"getResourceSummary",value:function(){return r.a.createElement("div",{className:"btl-Footer-Summary"},r.a.createElement("span",{className:"btl-Footer-Summary-Title"},"Resources"),r.a.createElement("div",{className:"btl-Footer-Summary-Items"},r.a.createElement("a",null,"Process of making"),r.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Impact"),r.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Insipration"),r.a.createElement("a",{className:"btl-Footer-Summary-Item"},"Designs")))}},{key:"getTail",value:function(){return r.a.createElement("div",{className:"btl-Footer-Tail"},r.a.createElement("div",{className:"btl-Footer-CopyRight"},"\xa9 Bottle & Co. All rights reserved"))}},{key:"render",value:function(){return r.a.createElement(f,{sectionStyles:{backgroundColor:"#10182f",height:"50vh",width:"100%",boxShadow:"rgba(50, 50, 50, 1) 0px -5px 35px"}},r.a.createElement("div",{id:"contact",className:"btl-Footer-Container"},r.a.createElement("div",{className:"btl-Footer-Head"},r.a.createElement("div",{className:"btl-Footer-Row1"},r.a.createElement(u,null)),r.a.createElement("div",{className:"btl-Footer-Row2"},r.a.createElement("div",{className:"btl-Footer-Row2-Left"},this.getContactSummary(),this.getResourceSummary()),r.a.createElement("div",{className:"btl-Footer-Row2-Right"},this.getEmailSummary(),this.getSocialSummary()))),this.getTail()))}}]),a}(n.Component)),ae=a(6),ne=a.n(ae),re=(a(53),a(54),function(e){return r.a.createElement("a",{href:e.href,className:"btl-NavigationLink",onClick:e.onClick},e.label)}),le=(a(55),a(56),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"isOnScreen",value:function(e){var t=e.offset().top,a=t+e.outerHeight(),n=ne()(window).scrollTop(),r=n+ne()(window).height();return a>n&&t<r}},{key:"renderCards",value:function(){return r.a.createElement("div",{className:"btl-CardContainer"},r.a.createElement(Y,{title:"Save trees",description:"Forests are the only livable habitat for a variety of species around the globe. Based on recent research 3.5 billion to 7 billion trees cut down each year.",imageUrl:k.a,deg:6}),r.a.createElement(Y,{title:"Save water",description:"More than 8 million tons of plastic is dumped into our oceans every year. We have developed a 'disposable' lifestyle and estimates are that around 50% of plastic is used just once and thrown away.",imageUrl:N.a,deg:6}),r.a.createElement(Y,{title:"Save air",description:"Burning plastic and other wastes releases dangerous substances such as heavy metals, persistent organic pollutants(POP), and other toxic chemicals into the air and persis in ash waste residues. These chemicals have been linked to the development of asthma, endocrine disruption and cancer.",imageUrl:C.a,deg:6}))}},{key:"componentDidMount",value:function(){var e=this;ne()(window).scroll((function(){var t=ne()(window).scrollTop(),a=ne()(".btl-parallax-bottom").offset().top;console.log(t-a),e.isOnScreen(ne()(".btl-parallax-bottom"))&&ne()(".btl-parallax-bottom").css({transform:"translate(0px, ".concat(.5*(t-a),"px)")})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null,r.a.createElement(u,null),r.a.createElement("div",{className:"btl-NaviagtionLink-Container"},r.a.createElement(re,{href:"#about",label:"About"}),r.a.createElement(re,{href:"#shop",label:"Shop"}),r.a.createElement(re,{href:"#contact",label:"Contact"}))),r.a.createElement(g,null),r.a.createElement("div",{className:"btl-parallax-top"},r.a.createElement("div",{id:"about",className:"btl-section-content"},r.a.createElement("div",{className:"btl-mission-description"},r.a.createElement("div",{className:"btl-mission-description-header"},"What we do"),r.a.createElement("p",{className:"btl-mission-description-body"},"We, at Bottle&Co, believe not only in providing state-of-the-art solutions to modern day problems, but also in ensuring that our initiatives foster the restoration of ecological balance. We create sustainable, breathable and washable masks for everyone. Our products are a mix of RPet, churned out of single-use plastic products such as bottles, and an array of sustainable fabrics."),r.a.createElement("img",{className:"btl-mission-description-image",src:M.a}),r.a.createElement("p",{className:"btl-mission-description-body"},"To stay relevant in these unprecedented times, Bottle&Co has come up with a technology, iProtect, that offers a comprehensive solution. ",r.a.createElement("b",null,"iProtect")," has Antiviral and Antibacterial against enveloped viruses and bacteria, and lasts effectively for at least 15-20  washes at 40\xb0C (104\xb0F). Rapid antiviral effect of the fabric successfully eliminates any potential threat within 30 mins of contamination, through its ",r.a.createElement("b",null,"self-sanitizing")," and ",r.a.createElement("b",null,"germ resistant surface"),". The mask is made water repellent to prevent droplets from penetrating the surface, thereby making it an all-rounder.")))),r.a.createElement("div",{className:"btl-parallax-bottom"},r.a.createElement("div",{className:"btl-section-content"},r.a.createElement("div",{className:"btl-mission-description"},r.a.createElement("div",{className:"btl-mission-description-header"},"Why we do"),r.a.createElement("p",{className:"btl-mission-description-body"},"Covid-19 has kick-started a global race for Personal Protective Equipment (PPE), as various countries scramble to protect their frontline workers. Made up of non-biodegradable plastic, everyday masks add to the plastic waste in a significant manner. Additionally, to slow down the spread of the Covid-19 virus and to win over the customer confidence, retailers and vendors are now switching to single use plastic. This could reverse years worth of effort and cause irrevocable damage to the environment."),this.renderCards(),r.a.createElement("p",{className:"btl-mission-description-body"},"To counter this movement and ensure removal of plastic waste from our landfills, oceans, etc., we have committed ourselves to take that very waste off the streets, and convert it into a high utility product, i.e Face masks. Our products are made up of that discarded single use plastic, and go through a rigorous process of transformation & cleansing, before it reaches your face.")))),r.a.createElement("div",{className:"btl-parallax-top"},r.a.createElement("div",{id:"shop",className:"btl-section-content"},r.a.createElement("div",{className:"btl-mission-description"},r.a.createElement("div",{className:"btl-mission-description-header"},"How we do"),r.a.createElement("p",{className:"btl-mission-description-body"},"During this covid-19 crisis, our face-masks act as the first line of defence. To ensure and strengthen safety standards, we have gone a mile ahead, and have curated a fabric with Anti-viral & Anti-bacterial properties."),r.a.createElement(Q,null),r.a.createElement("p",{className:"btl-mission-description-body",style:{marginTop:"5em"}},"Upon testing this fabric, we observed that it successfully neutralised 99.9% of any virus/flu, within 30 minutes of contact. Once the virus is in proximity to the Face Mask, iProtect attracts the virus through a positive charge and  captures it by locking on to the virus protein. The virus membrane begins to disintegrate rendering the virus ineffective. The disintegration process is expedited using Agus technology. We have coupled this technology with our advanced recycling practice to create an optimal balance of safety, sustainability and welfare. The masks will continue to eliminate any threats, upto 20 washes.")))),r.a.createElement(te,null))}}]),a}(r.a.Component)),ie=function(){return r.a.createElement(le,null)};new c.a(".rellax");i.a.render(r.a.createElement(ie,null),document.querySelector("#root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.5eaa7f07.chunk.js.map