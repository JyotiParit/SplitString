function splitS(str, charToSplit){
    var output=[];
    var currentIndex=0;
    var startIndex=0;
    for(var i=0;i<str.length;i++){ //1
       if(str[i]==charToSplit){
           output[currentIndex]=" ";
           for(var x=startIndex;x<i;x++){  //1
               output[currentIndex]+=str[x];// cuurentIndex=currentIndex+str[x];//1
           }
           startIndex=i+1;  //1+1=2
           currentIndex++;  //1
       }
    }
    output[currentIndex]="";
    for(var i=startIndex;i<str.length;i++){
        output[currentIndex]+=str[i];
    }
    return output;
}
console.log(splitS("tech@core@developers","@"));