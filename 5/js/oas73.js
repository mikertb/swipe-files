webmd=window.webmd||{},webmd.p=window.webmd.p||{},webmd.p.fe_content_update=function(a){var b,c,d;webmd.oas.timeout&&clearTimeout(webmd.oas.timeout),$.each(webmd.oas.elements_mapping,function(e,f){var g,h=a[e],i="",j="othr",k="";if("undefined"!=typeof h&&"null"!==h)if(b=$.inArray(e,webmd.oas.mapping[f])+1,c=$.inArray(e,webmd.oas.mapping[f])+2,"undefined"!=typeof h.type&&"null"!==h.type&&""!==h.type&&(i="type_",k=" <i> </i>",j=h.type),d=$.extend({link_position_plus_one:c,link_position:b,type_prefix:i,onclick_append:j,i_tag:k},h),"undefined"!=typeof d.alt_text&&""!==$.trim(d.alt_text)||(d.alt_text=d.alt||d.text||""),h.attr&&h.attr_type&&"object"==typeof webmd.oas.attribution&&(d=$.extend(webmd.oas.attribution.getValues(h.attr,h.attr_type),d)),g=webmd.substitute(webmd.oas.templates[f],d).replace(/\{[^\}]*\}|^\s*|\s*$/g,""),"undefined"!=typeof h.img&&""!==h.img){var l,m=webmd.oas.imageTimeout(e);try{l=g.match(/src=\"([^\"]+)/),l&&l[1]&&(h.img=l[1])}catch(a){}webmd.load({image:h.img,load:function(){webmd.oas.showElement(e,g,m)}})}else webmd.oas.showElement(e,g);else webmd.oas.showElement(e)}),$(document).trigger("OASdone")},webmd.oas={templates:{},mapping:{},ruleset:{},elements_array:[],elements_mapping:{},query:"",channel:"",params:{},default_timeout:2e3,load_automatically:!0,executeImmediately:function(){return"https:"!==window.location.protocol&&($("html").addClass("oas"),$(function(){webmd.oas.init()})),!0}(),formatChannel:function(a){return"string"==typeof a?a.toLowerCase().replace(/[^a-z]/g,"").replace("guidetocmini",""):""},channelOverride:{overrides:{acne:"acnemini",atrialfibrillation:"atrialfibrillationmini",parentingaatoc:"healthparenting",alcoholabuse:"alcoholabusemini",premenstrualsyndrome:"pmsmini",quittingsmokingmini:"smokingcessationmini",genitalwarts:"hpvgenitalwartsmini",bph:"prostateenlargementbphmini",benignprostatichyperplasia:"prostateenlargementbphmini",deepveinthrombosis:"dvtmini",chronicfatigue:"chronicfatiguesyndromemini",bingeeating:"bingeeatingdisordermini",knee:"kneepainmini",anorexia:"anorexianervosamini",bulimia:"bulimianervosamini",autism:"autismmini",bingeeatingdisorder:"bingeeatingdisordermini",birthcontrol:"birthcontrolmini",bladdercancer:"bladdercancermini",braincancer:"braincancermini",bulimianervosa:"bulimianervosamini",carpaltunnelsyndrome:"carpaltunnelsyndromemini",cataracts:"cataractsmini",celiacdisease:"celiacdiseasemini",cervicalcancer:"cervicalcancermini",chronicfatiguesyndrome:"chronicfatiguesyndromemini",copd:"copdmini",crohnsdisease:"crohnsdiseasemini",dvt:"dvtmini",earinfection:"earinfectionmini",eczema:"eczemamini",endometriosis:"endometriosismini",foodpoisoning:"foodpoisoningmini",hairloss:"hairlossmini",heartfailure:"heartfailuremini",hpvgenitalwarts:"hpvgenitalwartsmini",kidneystones:"kidneystonesmini",kneepain:"kneepainmini",maculardegeneration:"maculardegenerationmini",medicare:"medicaremini",metabolicsyndrome:"metabolicsyndromemini",nonhodgkinslymphoma:"nonhodgkinslymphomamini",pancreaticcancer:"pancreaticcancermini",pms:"pmsmini",postpartumdepression:"postpartumdepressionmini",prostateenlargementbph:"prostateenlargementbphmini",psoriasis:"psoriasismini",psoriaticarthritis:"psoriaticarthritismini",shingles:"shinglesmini",sleepapnea:"sleepapneamini",smokingcessation:"smokingcessationmini",stressmanagement:"stressmanagementmini",ulcerativecolitis:"ulcerativecolitismini",uterinefibroids:"uterinefibroidsmini",vaccines:"vaccinesmini",weightlosssurgery:"weightlosssurgerymini",palliativecare:"palliativecaremini"},checkOverride:function(a){var b,c;for(b in this.overrides)if(c=new RegExp(b,"i"),c.test(a))return webmd.debug("Over-ride key: "+b+"\nChannel Over-ride: "+a+" -> "+this.overrides[b]),this.mcOverride=this.overrides[b],!0},mcOverride:""},setChannel:function(){function a(a){if("yes"===window.s_mobileweb){var c={1629:"topic_atrialfibrillation"};return b=c[a]?c[a]:a}}var b,c=this.formatChannel(window.s_channel_mini_topic_guide)||this.formatChannel(window.s_channel_mini)||"",d=this.formatChannel(window.s_channel_health)||"",e=this.formatChannel(window.s_channel_super_portal)||"",f=window.s_mobileweb||"";return webmd.debug("1) s_channel_mini_topic_guide: "+window.s_channel_mini_topic_guide+"\nChannel format:"+c+"\n2) s_channel_health: "+window.s_channel_health+"\nChannel format:"+d+"\n3) s_channel_super_portal: "+window.s_channel_super_portal+"\nChannel format:"+e+"\n4) s_package_name: "+window.s_package_name+"\nChannel format:"+this.formatChannel(window.s_package_name)+"\n5) s_business_reference: "+window.s_business_reference+"\nChannel format:"+this.formatChannel(window.s_business_reference)),/\/a-to-z-guides\//i.test(window.location.pathname)&&"yes"!==f?(webmd.debug("Channel Over-ride: navazpage"),b="navazpage"):"yes"===f&&$("html").hasClass("oas")?b=window.s_topic:this.channelOverride.checkOverride(c)?b=this.channelOverride.mcOverride:c||d||e?!d||c||e?!c||d||e?!e||c||d?c&&d?b=/guide|topic/i.test(c)?d:c:d&&e?b=d:c&&e&&(b=/guide|topic/i.test(c)?e:c):b=e:b=c:b=d:b=this.formatChannel(window.s_package_name)||this.formatChannel(window.s_business_reference)||"",a(b),webmd.debug("Active Channel: "+b),this.channel=b,b},setTemplates:function(){var a=this;$(".oas_template").each(function(){var b=$(this).attr("id");a.templates[b]=$("#"+b).html(),"undefined"!=typeof webmd.oas.mapping[b]&&$.each(webmd.oas.mapping[b],function(c,d){a.elements_array.push(d),a.elements_mapping[d]=b})})},imageTimeout:function(a){return setTimeout(function(){$("#"+a).css("visibility","visible")},this.default_timeout)},showElement:function(a,b,c){"undefined"!=typeof c&&clearTimeout(c),"string"==typeof b&&$("#"+a).html(b),$("#"+a).css("visibility","visible")},startTimeout:function(){var a=this;a.timeout=setTimeout(function(){webmd.p.fe_content_update=function(){return!1},$("html").removeClass("oas"),$(document).trigger("OASdone")},a.default_timeout)},loadOAS:function(){var a,b=this;a=$("html").hasClass("harmony")?"http://ls.webmd.com/2/webmd2/":"yes"===window.s_mobileweb?"http://ls.webmd.com/2/webmdmobile/":"http://ls.webmd.com/2/webmd/",b.query=a+b.channel+"/"+(Math.floor(1e9*Math.random())+1e9)+"@Position1,"+b.elements_array.join(",")+",Position2?_RM_NO_COMMENT_",window.location.href.indexOf("preview.webmd")===-1&&window.location.href.indexOf("staging.webmd")===-1||(b.query+="&env=1"),b.params&&$.each(b.params,function(a,c){"object"==typeof c?$.each(c,function(c,d){b.query=webmd.url.appendParam(a,d,b.query)}):b.query=webmd.url.appendParam(a,c,b.query)});var c=window.s_pageview_id||0;b.query+="&XE&oas_nt_pvid="+c+"&XE",webmd.debug("OAS Query URL: "+b.query),webmd.load({js:b.query})},startTimerAndLoadOAS:function(){var a=this;a.startTimeout(),a.load_automatically&&a.loadOAS()},setTopicId:function(){var a,b,c=this;a=window.s_topic||"",b=window.s_tug||"",$.extend(c.params,{xpg:a,tug:b})},init:function(){var a=this;$(".oas_template").length>0&&this.setChannel()?(this.setTemplates(),this.setTopicId(),webmd.object.get("webmd.lotame.defer")?webmd.lotame.defer.done(function(){a.startTimerAndLoadOAS()}):a.startTimerAndLoadOAS()):$("html").removeClass("oas")}},webmd.oas.attribution={disclaimerLinks:{1:{url:"/brought-to-you-by",text:"Brought to you by"},11:{url:"/brought-to-you-by",text:"Brought to you by",suffix:"<br/>the makers of"},12:{url:"/brought-to-you-by",text:"Brought to you by",suffix:"<br/>the maker of"},2:{url:"/funded-by",text:"Funded by"},3:{url:"/sponsored-by",text:"Sponsored by"},4:{url:"/educational-collaboration",text:"Educational Collaboration"},5:{url:"/createdby",text:"Created by"},6:{url:"/funding-from",text:"Funding From"},7:{url:"/grant",text:"Grant"},8:{url:"/madepossible",text:"Made Possible by"},9:{url:"/sponsored-resources",text:"Sponsored Resources"},10:{url:"/supported-by",text:"Supported by"}},logos:{aveeno:"/webmd/consumer_assets/site_images/logos/client/jj/logo_aveeno_logo-promo.png",benecol:"/webmd/consumer_assets/site_images/logos/client/jj/logo_benecol_logo_promo.png",desitin:"/webmd/consumer_assets/site_images/logos/client/jj/logo_desitin_logo-promo.png","johnsons baby":"/webmd/consumer_assets/site_images/logos/client/jj/logo_johnsons-baby_logo-promo.png",lactaid:"/webmd/consumer_assets/site_images/logos/client/jj/logo_lactaid_logo-promo.png","listerine whitening":"/webmd/consumer_assets/site_images/logos/client/jj/logo_listerine-whitening_logo-promo.png",listerine:"/webmd/consumer_assets/site_images/logos/client/jj/logo_listerine_logo-promo.png",neosporin:"/webmd/consumer_assets/site_images/logos/client/jj/logo_neosporin_logo-promo.png",neutrogena:"/webmd/consumer_assets/site_images/logos/client/jj/logo_neutrogena_logo-promo.png",roc:"/webmd/consumer_assets/site_images/logos/client/jj/logo_roc_logo-promo.png",sudafed:"/webmd/consumer_assets/site_images/logos/client/jj/logo_sudafed_logo-promo.png","tylenol cold":"/webmd/consumer_assets/site_images/logos/client/jj/logo_tylenol-cold_logo-promo.png",tylenol:"/webmd/consumer_assets/site_images/logos/client/jj/logo_tylenol_logo-promo.png"},getValues:function(a,b){var c="",d="",e=a,f="",g="";return f=a.toLowerCase().replace(/<[^>]*>/g,"").replace(/\&[^;]*;/g,"").replace(/[^a-z0-9 ]/g,""),a&&this.logos[f]&&(e='<img src="'+image_server_url+this.logos[f]+'"/>'),this.disclaimerLinks[b]&&(c=this.disclaimerLinks[b].url,d=this.disclaimerLinks[b].text,this.disclaimerLinks[b].suffix&&(g=this.disclaimerLinks[b].suffix)),{attr_link:c,attr_text:d,attr_suffix:g,attr_namelogo:e,attr_active:"active"}}};