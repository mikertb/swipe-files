jQuery(document).ready(function(){var Fool=Stapes.subclass({constructor:function(){console.log('Fool -- starting up...');this.emit('fool');},log:function(){if(window.console){args_array=Array.prototype.slice.call(arguments);console.log(args_array);}}});window.Fool=new Fool;});jQuery(document).ready(function(){var Util=Stapes.subclass({constructor:function(){console.log('Fool.Util -- starting up...');},getLocalApiPath:function(resourceUriSegment){var apiRoot=this.getApiRootPath();if(resourceUriSegment.indexOf('/')!=0){resourceUriSegment='/'+resourceUriSegment;}
return apiRoot+resourceUriSegment;},getApiRootPath:function(){if(!this.apiRoot){if(window.hasOwnProperty('settings')&&window.settings.hasOwnProperty('apiRootPath')&&window.settings.apiRootPath.length>0){this.apiRoot=window.settings.apiRootPath;}else{var appRoot='fooldotcom'
var pathSegments=jQuery(location).attr('pathname').split("/");if(pathSegments.length>1){appRoot=pathSegments[1];}
this.apiRoot='/'+appRoot+'/api';}}
return this.apiRoot;},cookieToObject:function(cookie){var cookieParams=cookie.split('&');var cookieObject={};_.each(cookieParams,function(cookie){cookie=cookie.split('=');cookieObject[cookie[0]]=decodeURIComponent(cookie[1]||'');});return cookieObject;}});window.Fool.extend({'Util':new Util()});});jQuery(document).ready(function(){var Visitor=Stapes.subclass({constructor:function(){console.log('Fool.Visitor -- starting up...');this.explodeVisitorCookie();},explodeVisitorCookie:function(){var visitorCookieDough=jQuery.cookie('Visitor');if(visitorCookieDough===undefined||visitorCookieDough=='')return;var visitorCookie=Fool.Util.cookieToObject(visitorCookieDough);this.set('username',visitorCookie['username']);this.set('uid',visitorCookie['uid']);this.set('registered',visitorCookie['registered']=='true');this.set('visitor',visitorCookie['visitor']);this.set('ecapped',visitorCookie['ecapped']=='true');this.set('visits',visitorCookie['visits']);this.set('dskPrf',visitorCookie['dskPrf']=='true');this.set('account',visitorCookie['account']);this.set('version',visitorCookie['version']);},});window.Fool.extend({'Visitor':new Visitor()});});jQuery(document).ready(function(){var User=Stapes.subclass({cache_key:'user_info',user_info_api_url:'/a/tophat/user_info_api?apikey=public',ttl:5*24*60*60*1000,ready_event_name:'fool:user:user_info.ready',constructor:function(){console.log('Fool.User -- starting up...');this.cache=kizzy('fool.user');this.getUserInfo();this.explodeFoolCookie();},explodeFoolCookie:function(){var foolCookie,foolCookieDough,hash,lookieCookieDough,username;foolCookieDough=jQuery.cookie('Fool');if(foolCookieDough!=undefined){foolCookie=Fool.Util.cookieToObject(foolCookieDough);username=foolCookie['Username'];this.set('username',username);this.set('uid',foolCookie['Uid']);this.set('isUserNameCreated',username!=''&&username!='Fool');this.set('hasUserName',username!=''&&username!=undefined);this.set('isRegistered',foolCookie['R']=='true');}else if(Fool.Visitor!=undefined){username=Fool.Visitor.get('username');this.set('username',username);this.set('uid',Fool.Visitor.get('uid'));this.set('isUserNameCreated',username!=''&&username!='Fool');this.set('hasUserName',username!=''&&username!=undefined);this.set('isRegistered',Fool.Visitor.get('registered'));}
lookieCookieDough=jQuery.cookie('Lookie');if(lookieCookieDough!=undefined){hash=Fool.Util.cookieToObject(lookieCookieDough);this.set('isLoggedIn',hash!=''&&hash!=undefined);}},getUserInfo:function(){cachedResult=this.cache.get(this.cache_key);if(cachedResult){console.log('Fool.User -- got from cache');this.emit(this.ready_event_name,cachedResult);return true;}
this.getUserInfoFromAPI();return false;},getUserInfoFromAPI:function(){jQuery.ajax(this.user_info_api_url,{contentType:'application/json',context:this,success:this.setCache});},setCache:function(data,textStatus,jqXHR){console.log('Fool.User -- updating cache');this.cache.set(this.cache_key,data,this.ttl);console.log('Fool.User -- ready');this.emit(this.ready_event_name,data);}});window.Fool.extend({'User':new User()});});