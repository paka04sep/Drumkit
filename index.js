for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      //alert("ปุ่มถูกกด");

      //console.log(this.innerHTML);
      var b = this.innerHTML


      if (b == 'w'){
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      }else if(b == 'a'){
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      }else if(b == 's'){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      }else if(b == 'd'){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      }else if(b == 'j'){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      }else if(b == 'k'){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      }else if(b == 'l'){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      }
    
      document.addEventListener("keydown", function(event) {
        var keyPressed = event.key;  
        playSound(keyPressed);
      });
      
      function playSound(key) {
        var audio;
        switch (key) {
          case 'w':
            audio = new Audio('sounds/tom-1.mp3');
            break;
          case 'a':
            audio = new Audio('sounds/tom-2.mp3');
            break;
          case 's':
            audio = new Audio('sounds/tom-3.mp3');
            break;
          case 'd':
            audio = new Audio('sounds/tom-4.mp3');
            break;
          case 'j':
            audio = new Audio('sounds/crash.mp3');
            break;
          case 'k':
            audio = new Audio('sounds/kick-bass.mp3');
            break;
          case 'l':
            audio = new Audio('sounds/snare.mp3');
            break;
          default:
            return;  
        }
        audio.play();   
      }


    });


   
    var student2 = {
        name: "Wonyoung",
        age: 18,
        isStudent: true,
        languages: ["korean", "english"],
        id: 121231 , 
    }
    //console.log(student2.languages[1])
    console.log(JSON.stringify(student2))   



    function Student (name, age, isStudent, languages, id){
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
    this.languages = languages;
    this.id = id ;
    }
    var student3 = new Student("Pakawat", 20, true, ["thai" , "english"], 6652101041);
    console.log(student3) 





  }

