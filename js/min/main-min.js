Parse.initialize("vc59bNX5cbtFv4Upaz4y31IJ6zOH5uKqJbRqoSgy","jbMROx6VuQ6wVWRur29gYcQ7o3ucD4VYdh7DoFHj"),$(document).ready(function(){"use strict";function e(e,t,a){$("section.community").append("<div class='repo'><div class='repoTitle'><h4>"+e+"</h4></div><div class='repoDescription'><p>"+t+"</p></div><div class='repoButton'><a href="+a+" target='_blank'><button class='outline'>View on GitHub</button></a></div></div>")}function t(){function e(){var e=1;k>=1480?(e=.75,$(".wheelsContainer, .hoist, .hoistParts").velocity({scale:[e,e]},{queue:!1,duration:0})):$(".wheelsContainer, .hoist, .hoistParts").velocity({scale:[e,e]},{queue:!1,duration:0})}$(".craneLine").velocity({translateY:[0,"-25%"]},{queue:!1,duration:600,easing:[.4,0,.2,1],complete:function(){$(".craneLine").velocity({translateX:["13%",0],translateY:["-14.8%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".cranePivot").velocity({translateX:["13%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".craneVideo").velocity({translateY:["-14.8%",0],translateX:["13.4%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1],complete:function(){$(".craneLine").velocity({translateY:["-30%","-14.8%"]},{queue:!1,duration:800,easing:[.4,0,.2,1]});for(var e=$(".appRect"),t=$(".appSquare"),a=0;a<t.length;a++)t.eq(a).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:[0,"90deg"]},{queue:!1,duration:600,delay:100*a+400,easing:[.175,.885,.32,1.275]});for(var i=0;i<e.length;i++)e.eq(i).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:0},{queue:!1,duration:600,delay:100*i+100*a+400,easing:[.175,.885,.32,1.275]});$(".phone1ScreenContainer").velocity({backgroundColor:"#EF3F61"},{queue:!1,duration:600,easing:[.4,0,.2,1]})}})}});var t="-"+$(".middleLineOne").height()/$(".pushOne").height()*100+"%";$(".middleLineOne").velocity({translateY:[0,"-105%"]},{queue:!1,duration:1200,delay:800,easing:[300,28],complete:function(){$(".pushOne").velocity({translateY:[t,0]},{queue:!1,duration:800,easing:[.4,0,.2,1]}).velocity({rotateZ:["12deg","0deg"]},{queue:!1,duration:300,easing:[.4,0,.2,1]}),$(".middleLineOne").velocity({translateY:["-100%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1],complete:function(){$(".middleLine2, .push2").velocity({y:[0,"-125%"]},{queue:!1,duration:1e3,delay:200,easing:[300,28],complete:function(){$(".middleLine2").velocity({y:["-125%",0]},{queue:!1,duration:1e3,delay:200,easing:[300,28]}),$(".phone2Screen .phoneCircle").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone2Screen").velocity({backgroundColor:"#4BBC6E"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".push2 path").velocity({fill:"#40a05b"},{queue:!1,duration:200,easing:[.4,0,.2,1]})}})}})}}),$(window).resize(function(){e()}),e(),$(".wheelsContainer").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]}),$(".hoist, .hoistParts").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1],complete:function(){$(".phone3Screen .phoneCircle").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone3Screen").velocity({backgroundColor:"#555574"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".analytics path").velocity({fill:"#3A3A59"},{queue:!1,duration:200,easing:[.4,0,.2,1]}),$(".hoistLineInner").velocity({y:["-22%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1]})},begin:function(){$(".hoistWheel").velocity({rotateZ:["-=720deg"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]})}})}function a(){var e=$(window).scrollTop();if(x===e)return!1;x=e;var t=$(".header").height();e>=0&&y>=e&&k>960&&($(".heroText").css({transform:"translateY(-"+e/1.6+"px)",opacity:1-e/t}),$(".skyline").css({transform:"translateY("+.135*e+"px)"}));var a=$(".secondaryNav");e>=$(".header").height()?a.addClass("shown"):a.removeClass("shown");for(var i=$("section"),o=0;o<i.length;o++){var n=i.eq(o).offset().top,s=i.eq(o).height();e>n-64&&n+s-64>e&&q===!1&&($(".secondaryNav ul a").removeClass("active"),$(".secondaryNav ul a").eq(o).addClass("active"))}}var i=0,o=0,n=0;if("undefined"!=typeof gitJson)for(var s=0;s<gitJson.length;s++){var r=gitJson[s].name,c=r.toLowerCase(),d=gitJson[s].html_url,l=gitJson[s].has_issues,p=gitJson[s].description,u=parseInt(gitJson[s].stargazers_count),v=parseInt(gitJson[s].forks_count),g=gitJson[s].language,h=gitJson[s]["private"];h!==!0&&(n++,i+=u,o+=v,c.indexOf("sdk")>=0||c.indexOf("cli")>=0?c.includes("ios")===!0?($(".iosRepo .sdkRepoStar").text(u),$(".iosRepo .sdkRepoFork").text(v)):c.includes("android")===!0?($(".androidRepo .sdkRepoStar").text(u),$(".androidRepo .sdkRepoFork").text(v)):c.includes("javascript")===!0||c.includes("js")===!0?($(".javascriptRepo .sdkRepoStar").text(u),$(".javascriptRepo .sdkRepoFork").text(v)):c.includes("php")===!0?($(".phpRepo .sdkRepoStar").text(u),$(".phpRepo .sdkRepoFork").text(v)):c.includes("net")===!0?($(".xamarinRepo .sdkRepoStar").text(u),$(".xamarinRepo .sdkRepoFork").text(v),$(".unityRepo .sdkRepoStar").text(u),$(".unityRepo .sdkRepoFork").text(v)):c.includes("arduino")===!0?($(".arduinoRepo .sdkRepoStar").text(u),$(".arduinoRepo .sdkRepoFork").text(v)):c.includes("embedded")===!0?($(".embeddedRepo .sdkRepoStar").text(u),$(".embeddedRepo .sdkRepoFork").text(v)):c.includes("cli")===!0&&($(".cloudCodeRepo .sdkRepoStar").text(u),$(".cloudCodeRepo .sdkRepoFork").text(v)):l!==!1&&(c.includes("facebook")===!0||c.includes("twitter")===!0?$("section.socialRepos").append("<div class='repoList'><a href='"+d+"' target='_blank'><div class='repoTitle'><h4>"+r+"</h4></div><div class='repoDescription'><p>"+p+"</p></div><div class='repoInfo'><p><span><img src='img/forksDark.svg' alt='' class='icon'>"+v+"</span><span><img src='img/starsDark.svg' alt='' class='icon'>"+u+"</span><span>"+g+"</span></p></div></a></div>"):c.includes("tutorial")===!0?$("section.tutorials").append("<div class='repoList'><a href='"+d+"' target='_blank'><div class='repoTitle'><h4>"+r+"</h4></div><div class='repoDescription'><p>"+p+"</p></div><div class='repoInfo'><p><span><img src='img/forksDark.svg' alt='' class='icon'>"+v+"</span><span><img src='img/starsDark.svg' alt='' class='icon'>"+u+"</span><span>"+g+"</span></p></div></a></div>"):c.includes("todo")===!0||c.includes("demo")===!0||c.includes("any")===!0||c.includes("scrumptious")===!0||c.includes("store")===!0||c.includes("f8")===!0||c.includes("internetcar")===!0?$("section.sampleApps").append("<div class='repoList'><a href='"+d+"' target='_blank'><div class='repoTitle'><h4>"+r+"</h4></div><div class='repoDescription'><p>"+p+"</p></div><div class='repoInfo'><p><span><img src='img/forksDark.svg' alt='' class='icon'>"+v+"</span><span><img src='img/starsDark.svg' alt='' class='icon'>"+u+"</span><span>"+g+"</span></p></div></a></div>"):$("section.other").append("<div class='repoList'><a href='"+d+"' target='_blank'><div class='repoTitle'><h4>"+r+"</h4></div><div class='repoDescription'><p>"+p+"</p></div><div class='repoInfo'><p><span><img src='img/forksDark.svg' alt='' class='icon'>"+v+"</span><span><img src='img/starsDark.svg' alt='' class='icon'>"+u+"</span><span>"+g+"</span></p></div></a></div>")))}$(".heroText .repoCount").text(n),$(".heroText .starCount").text(i),$(".heroText .forkCount").text(o);var f=Parse.Object.extend("communityRepos"),m=new Parse.Query(f);m.ascending("repoName"),m.find({success:function(t){for(var a=0;a<t.length;a++){var i=t[a],o=i.get("repoName"),n=i.get("repoDescription"),s=i.get("repoUrl");e(o,n,s)}},error:function(e){console.log("Error: "+e.code+" "+e.message)}}),$(".expandableRepoLink").click(function(){var e=$(this);$(".expandableRepoLink").not(e).removeClass("expanded"),e.toggleClass("expanded")});var y=$(window).height(),k=$(window).width();$(window).resize(function(){y=$(window).height(),k=$(window).width()}),$(window).load(function(){t()});var R=0,x,q=!1;$(window).on("mousewheel",function(){a(),R=1,clearTimeout($.data(this,"timer")),$.data(this,"timer",setTimeout(function(){R=0},100))}).scroll(function(){return 1===R?!1:void a()}),$("a[href*=#]:not([href=#])").click(function(){var e=$(this),t=e.attr("href");location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&$(t).velocity("scroll",{duration:600,easing:[.4,0,.2,1],begin:function(){$(".secondaryNav ul a").removeClass("active"),e.addClass("active"),q=!0},complete:function(){q=!1}})})});