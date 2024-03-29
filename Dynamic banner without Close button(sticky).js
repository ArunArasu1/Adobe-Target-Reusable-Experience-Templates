 "use strict"

let config = {
	    "initialDelay":{
			"time":100
		},
		"bannerPosition": {
            "selector": "#navbar > div.menu > div.container",
            "location": "after" //before/after
        },
        "background": {
            "imageUrl": "",//"https://www.vodafone.de/media/img/teaser/hero-navigation-bg-2560x432.jpg", // image url of banner  https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg
            "backgroundColour": "#efefef"
        },
        "autoHide": {
            "flag": "", // yes to activate
            "time": 5
        },
        "borderStyle": {
            "width": "2px",
            "style": "solid",
            "colour": "white"
        },
        "title": {
            "text": "Heading Text",
            "colour": "black"
        },
        "message": {
            "text": "Samsung Galaxy S10 mit dem Red S 10 GB",
            "fontSize": "20px",
            "colour": "#333",
			"fontFamily":"Vodafone"
        },
        "ctaLink1": {
            "text": "Check Offer",
            "href": "",
            "fontSize": "16px",
            "backgroundColour": "#e60000",
            "textColour": "white",
            "fontFamily": "Vodafone"
        },
        "ctaLink2": {
            "text": "Close Offer",
            "href": "",
            "fontSize": "16px",
            "backgroundColour": "#fff",
            "textColour": "black",
			"fontFamily":"Vodafone"
        },
        "subHeading": {
            "subHeading1Text": "Offer 1",
            "subHeading1Href": "",
            "subHeading2Text": "Offer 2",
            "subHeading2Href": "",
            "subHeading3Text": "Offer 3",
            "subHeading3Href": "",
            "fontSize": "16px",
            "textColour": "#000",
			"fontFamily":"Vodafone"
        },
        "logoImage": {
            "flag": "yes",
            "url": "https://www.freepnglogos.com/uploads/vodafone-png-logo/vodafone-ghana-14.png",
            "width": "30px",
            
        }
		
};
var delay=setInterval(function(){if(0==document.querySelectorAll(".mid").length){var e="";"before"==config.bannerPosition.location&&(e="beforebegin"),"after"==config.bannerPosition.location&&(e="afterend"),document.querySelector(config.bannerPosition.selector).insertAdjacentHTML(e,"<style>.offerbadge_out_sticky{background-color:#efefef;height:0;opacity:0;overflow:hidden;position:fixed;top:60px;box-shadow:0 0 20px #000;border-bottom:2px solid #e60000;z-index:10;width:100%;transition:all .2s ease-out}.offerbadge_out_sticky--visible{height:60px;opacity:1;overflow:visible;transition:all .2s ease-out}.offerbadge{display:flex;width:80%;max-width:960px;margin:auto;justify-content:space-between;padding:12px 20px 10px 20px;cursor:pointer}.inflex1{display:flex;align-items:center}.inflex2{display:flex;align-items:center;transition:all .5s}.arrowChecked{transform:rotateX(180deg);transition:all .5s}.openedBox{color:#e60000;font-weight:700}.badgeicon{height:30px;width:30px;filter:brightness(.5)}span.badgeHeadline{font-family:Vodafone;color:#000;font-size:18px;margin-left:10px;padding-top:3px}span.notification_badge{background-color:#e60000;color:#fff;border-radius:50%;border:2px solid #efefef;text-align:center;font-size:11px;font-weight:700;line-height:17px;margin-left:-14px;margin-bottom:12px;height:22px;width:22px;z-index:2}@media only screen and (max-width:800px){.offerbadge{width:95%;padding:12px 10px 10px 10px}span.giftbox{font-size:18px}span.badgeHeadline{font-size:18px;margin-left:5px}}.offerbox_out{margin:auto;border-bottom:2px solid #e60000;height:0;transition:all 1s}.fadecontent{opacity:0;transition:all .2s}.offerbox_headline{width:80%;max-width:960px;margin:auto;padding:15px 20px 0 20px}.offerbox_in{display:flex;width:80%;max-width:960px;margin:auto;justify-content:space-between;padding:0 10px}.innerflex1{padding:10px 10px}.innerflex2{display:flex;align-self:flex-end;flex-direction:column;flex-shrink:0;padding:10px 0;text-align:right}span.s_headline{font-family:"+config.message.fontFamily+";font-size:"+config.message.fontSize+";font-weight:700}.inner_benefits{display:flex;align-items:center;padding:10px 0 0 0}span.innerspan{font-family:"+config.subHeading.fontFamily+";font-size:"+config.subHeading.fontSize+";margin-left:10px;color:"+config.subHeading.textColour+"}button.red-cta{font-family:"+config.ctaLink1.fontFamily+";width:200px;margin:5px 0;padding:10px 20px;font-size:"+config.ctaLink1.fontSize+";font-weight:600;background-color:"+config.ctaLink1.backgroundColour+";border:0;box-shadow:0 1px 3px rgba(51,51,51,.6);cursor:pointer;color:#fff}button.red-cta:hover{background-color:#b60000}button.white-cta{font-family:"+config.ctaLink2.fontFamily+";width:200px;margin-top:5px;margin-bottom:12px;padding:10px 20px;font-size:"+config.ctaLink2.fontSize+";font-weight:600;background-color:"+config.ctaLink2.backgroundColour+';border:0;box-shadow:0 1px 3px rgba(51,51,51,.6);cursor:pointer;color:#000}button.white-cta:hover{background-color:#ebebeb}a#ignoreRET{font-size:12px;text-decoration:underline;margin-right:3px}.slide-from-top{animation:slide-from-top 1s both;transition:all 1s}@keyframes slide-from-top{0%{height:0}100%{height:170px}}.slide-from-bottom{animation:slide-from-bottom 1s both;transition:all 1s}@keyframes slide-from-bottom{0%{height:170px}100%{height:0}}.fade-in{animation:fade-in 1s both;transition:all 1s}@keyframes fade-in{70%{opacity:0}100%{opacity:1}}.fade-out{animation:fade-out .2s both;transition:all .2s}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}.ring-top{animation:ring-top .8s ease-out both}@keyframes ring-top{0%,100%{transform:rotate(0);transform-origin:50% 0}10%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-4deg)}30%,50%,70%{transform:rotate(4deg)}80%{transform:rotate(-2deg)}90%{transform:rotate(2deg)}}@media only screen and (max-width:800px){.offerbox_headline{width:95%;margin:auto}.offerbox_in{width:95%}@keyframes slide-from-top{0%{height:0}100%{height:200px}}@keyframes slide-from-bottom{0%{height:200px}100%{height:0}}}@media only screen and (max-width:600px){.offerbox_in{display:block}.innerflex2{display:block;text-align:center}button.red-cta{width:100%}button.white-cta{width:100%}span.s_headline{font-size:18px}@keyframes slide-from-top{0%{height:0}100%{height:310px}}@keyframes slide-from-bottom{0%{height:310px}100%{height:0}}}.chevron_per{box-sizing:border-box;position:relative;display:block;color:#e60000;transform:scale(1.6);width:22px;height:22px;border:2px solid transparent;border-radius:100px}.chevron_per::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:1px solid;border-right:1px solid;transform:rotate(45deg);left:4px;top:2px}.check_per{box-sizing:border-box;position:relative;display:block;transform:scale(1.8);width:22px;height:22px;border:2px solid transparent;border-radius:100px;color:#427d00}.check_per::after{content:"";display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}</style><div class="mid"><div class="offerbadge_out"> <div class="offerbadge"> <div class="inflex1"><img id="logoImage" src='+config.logoImage.url+' style="width:'+config.logoImage.width+'">  <span class="badgeHeadline" style="color:'+config.title.colour+'">'+config.title.text+'</span>  </div><div class="inflex2"><i class="chevron_per"></i> </div></div></div></div>'),""!=config.background.imageUrl&&(document.querySelector(".mid").style.backgroundImage="url('"+config.background.imageUrl+"')"),""==config.background.imageUrl&&(document.querySelector(".mid").style.backgroundColor=config.background.backgroundColour);let o=config.message.text,t=config.subHeading.subHeading1Text,i=config.subHeading.subHeading2Text,n=config.subHeading.subHeading3Text,a=config.ctaLink1.text,r=config.ctaLink2.text,s=config.ctaLink1.href,d=(config.ctaLink2.href,document.querySelector(".offerbadge_out")),l=document.querySelector(".offerbadge"),f=document.querySelector(".inflex2");d.insertAdjacentHTML("afterend",'<div class="offerbox_out"> <div class="fadecontent"><div class="offerbox_headline"><span class="s_headline" style="color:'+config.message.colour+'">'+o+'</span> </div><div class="offerbox_in"><div class="innerflex1"> <div class="benefits"> <div class="inner_benefits"> <i class="check_per"></i> <a href=""><span class="innerspan">'+t+'</span></a> </div><div class="inner_benefits"><i class="check_per"></i> <a href=""><span class="innerspan">'+i+'</span></a> </div><div class="inner_benefits"><i class="check_per"></i> <a href=""><span class="innerspan">'+n+'</span></a> </div></div></div><div class="innerflex2"> <a class="red-cta-link" href="'+s+'"><button type="button" class="red-cta">'+a+'</button></a> <a class="white-cta-link" href="javascript:void(0)"><button type="button" class="white-cta">'+r+"</button></a> </div></div></div></div>");
let slideUp=(e,t=500)=>{e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.boxSizing="border-box",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)},slideDown=(e,t=500)=>{e.style.removeProperty("display");let o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.display=o;let r=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.boxSizing="border-box",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)};var slideToggle=(e,t=500)=>"none"===window.getComputedStyle(e).display?slideDown(e,t):slideUp(e,t);
let c=document.querySelector(".offerbox_out"),g=document.querySelector(".fadecontent");document.getElementById("ignoreRET");l.onclick=function(){f.classList.toggle("arrowChecked"),d.classList.toggle("openedBox"),c.classList.contains("slide-from-top")?(c.classList.remove("slide-from-top"),g.classList.remove("fade-in"),c.classList.add("slide-from-bottom"),g.classList.add("fade-out")):(c.classList.remove("slide-from-bottom"),c.classList.add("slide-from-top"),g.classList.add("fade-in"),g.classList.remove("fade-out"))},document.querySelector(".white-cta-link").onclick=function(){slideToggle(document.querySelector(".mid"), 2000);},"yes"!=config.logoImage.flag&&(document.querySelector("#logoImage").style.display="none"),"yes"==config.autoHide.flag&&""==config.autoHide.countDown&&setTimeout(function(){document.querySelector(".mid").style.display="none"},1e3*config.autoHide.time),clearInterval(delay)}},config.initialDelay.time);
