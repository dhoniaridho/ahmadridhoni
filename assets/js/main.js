      // Look for .hamburger
      var hamburger = document.querySelector(".hamburger");
      // On click
      hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
      });

      $(".bar").each(function(){
        $(this).find(".bar-inner").animate({
          width: $(this).attr("data-width")
        },2000)
      });

      var percentage = 80;
      $("#progressbar")
        .animate({
          "value": percent + "%"
        }, {
          duration: 600,
          easing: 'linear'
        });

        AOS.init();

        // ini typewrite ya//
        var line = document.getElementById("line")
        var txts = ['"Hi, I am Graphic Designer"', '"I am a Web Developer"', '"I am a Video Editor"'];
        var speed = 100
        
        async function typewriter(txt) {
        for(let i = 0; i < txt.length; i++){
        line.innerHTML += txt.charAt(i);
        await delay(speed) 
        }
        }
        
        async function reverseTypewriter(txt) {
        for(let i = txt.length; i > 0; i--){
        line.innerHTML = line.innerHTML.slice(0,-1)
        await delay(speed)
        }
        }
        
        async function writeLoop(){
        
        for(let i = 0; i < txts.length; i++){
        await typewriter(txts[i])
        await delay(1000)
        await reverseTypewriter(txts[i])
        await delay(300)
        }
        
        writeLoop()
        }
        
        function delay(ms){
        return new Promise((resolve)=>{setTimeout(()=>{resolve()},ms)})
        }
        
        writeLoop()