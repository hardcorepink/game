function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        //(head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}

loadScripts([
	"//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-fullscreen.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-indicator.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-video.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-vimeo.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-youtube.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/jquery.blueimp-gallery.js"
],function(){
    console.info('loaded.');
});

document.body.onload = addElement;
 function addElement () { 
  var theDiv = document.getElementById("quality");
   if(theDiv){
     theDiv.innerHTML += "<div id='blueimp-gallery' class='blueimp-gallery'><div class='slides'></div><h3 class='title'></h3><a class='prev'>‹</a><a class='next'>›</a><a class='close'>×</a><a class='play-pause'></a></div> <p>（。 ㅅ 。）<small></small></p>  <small><a href='chickswithtits'><span class='s'>chickswithtits</span></small></a>  <small><a href='i-just-love-boobs'><span class='s'>i-just-love-boobs</span></small></a>  <small><a href='just4puffyboobs'><span class='nc'>just4puffyboobs</span></small></a></small> <small><a href='lovelyboobphotos'><span class='nc'>lovelyboobphotos</span></small></a></small> <small><a href='because-boobs-thats-why'><span class='nc'>because-boobs-thats-why</span></small></a></small> <small><a href='bestboobsonline'><span class='s'>bestboobsonline</span></small></a>  <small><a href='relaxtheyrejustboobs'><span class='nc'>relaxtheyrejustboobs</span></small></a></small> <small><a href='greatbigboobs'><span class='s'>greatbigboobs</span></small></a>  <small><a href='theittybittytittycommittee'><span class='nc'>theittybittytittycommittee</span></small></a></small> <small><a href='sluttybimbotits'><span class='s'>sluttybimbotits</span></small></a>  <small><a href='dreamwoman-boobs'><span class='s'>dreamwoman-boobs</span></small></a>  <small><a href='nosaj81'><span class='nc'>nosaj81</span></small></a></small> <small><a href='just-big-boobs'><span class='s'>just-big-boobs</span></small></a>  <small><a href='madregan'><span class='nc'>madregan</span></small></a></small> <small><a href='legen-wait-for-it-boobie'><span class='s'>legen-wait-for-it-boobie</span></small></a> <small><a href='asslikers'><span class='s'>asslikers</span></small></a> <small><a href='lushbuttgirl'><span class='s'>lushbuttgirl</span></small></a> <small><a href='realniceasses'><span class='s'>realniceasses</span></small></a> <small><a href='tatankaful'><span class='s'>tatankaful</span></small></a> <small><a href='fitness-ass'><span class='s'>fitness-ass</span></small></a> <small><a href='stellar-asses'><span class='s'>stellar-asses</span></small></a> <small><a href='nice-looking-ass'><span class='s'>nice-looking-ass</span></small></a> <small><a href='bigbeautifulasses'><span class='s'>bigbeautifulasses</span></small></a> <small><a href='the-best-of-amateur'><span class='s'>the-best-of-amateur</span></small></a> <small><a href='amateurissweet'><span class='s'>amateurissweet</span></small></a> <small><a href='hahooyahuuuz'><span class='s'>hahooyahuuuz</span></small></a> <small><a href='nsfw-bitches'><span class='s'>nsfw-bitches</span></small></a> <small><a href='fleshofgirls'>fleshofgirls</a></small> <br><br>";
   }
 }
