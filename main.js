dog=0;
cat=0;
cow=0;
snake=0;

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lr17O27PC/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        c1=Math.floor(Math.random()*255)+1;
        c2=Math.floor(Math.random()*255)+1;
        c3=Math.floor(Math.random()*255)+1;
        document.getElementById("numberoftimes").innerHTML="Detected Dog - "+dog+", Detected Cat - "+cat+", Detected Cow - "+cow+", Detected Snake - "+snake;
        document.getElementById("audioplayed").innerHTML="Audio being played - "+results[0].label;
        document.getElementById("numberoftimes").style.color="rgb("+c1+","+c2+","+c3+")";
        document.getElementById("audioplayed").style.color="rgb("+c1+","+c2+","+c3+")";

        img=document.getElementById("img");

        if(results[0].label=="Meowing"){
            img.src="cat.jpeg";
            cat=cat+1;
        }
        else if(results[0].label=="Barking"){
            img.src="dog.jpeg";
            dog=dog+1;
        }
        else if(results[0].label=="Mooing"){
            img.src="cow.jpeg";
            cow=cow+1;
        }
        else{
            img.src="snake.jpeg";
            snake=snake+1;
        }
    }
}