class Security {

    constructor(){
      // this.actualCode = 
       this.access1 = createInput("Code1");
      // this.access1.position(100,90);
       this.access1.style('background','white');

       this.access2 = createInput("Code2");
       // this.access2.position(100,90);
        this.access2.style('background','white');

        this.access3 = createInput("Code3");
        // this.access3.position(100,90);
         this.access3.style('background','white');

       this.button1 = createButton('Check');
      // this.button1.position(100,120);
       this.button1.style('background','lightgrey');

       this.button2 = createButton('Check');
       // this.button2.position(100,120);
        this.button2.style('background','lightgrey');

        this.button3 = createButton('Check');
        // this.button3.position(100,120);
         this.button3.style('background','lightgrey');

    }

    hide(){
        this.button1.hide();
        this.access1.hide();
        this.button2.hide();
        this.access2.hide();
        this.button3.hide();
        this.access3.hide();
     }

//authenticate(actualCode,enteredCode){
//    if(actualCode === enteredCode)
//          return true
//     else
//          return false
    
//}
    display(){

        this.access1.position(100,90);
        this.button1.position(100,120);
        this.access2.position(700,190);
        this.button2.position(700,220);
        this.access3.position(100,290);
        this.button3.position(100,320);


        this.button1.mousePressed(()=>{
        if(system.authenticate(accessCode1,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++
      }
    });
      
    this.button2.mousePressed(()=>{
        if(system.authenticate(accessCode1,this.access1.value())){
            this.button2.hide();
            this.access2.hide();
            score++
      }
    });

    this.button3.mousePressed(()=>{
        if(system.authenticate(accessCode1,this.access1.value())){
            this.button3.hide();
            this.access3.hide();
            score++
      }
    });

    }
}

