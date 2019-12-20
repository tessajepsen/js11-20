//firtLast6

function firstLast6(array){
    if(array[0]==6){
        return true;
    }
    if(array[array.length - 1]==6){
        return true;
    }
    return false;
}


//has_23

function has23(array){
    for(var i=0; i<array.length; i++){
        if(array[i]==2 || array[i]==3){
            return true;
        }
    }
    return false;
}


//fix_23

function fix23(array){
    for(var i=0; i<array.length; i++){
        if(array[i]==2 && array[i+1]==3){
            array[i+]=0
        }
    }
    return array;
}


//countYZ

function countYZ(array){
    var count = 0;
    var yip = array.toLowerCase();
    for(var i=0; i<yip.length; i++){
        if((yip[i]=="y" || yip[i]=="z") && (yip[i]==" " || yip[i]==undefined)){
            return count;
        }
    }
}


//endOther

function endOther(str1, str2){
    var s = str1.toLowerCase();
    var r = str2.toLowerCase();
    if(s.endsWith(r)){
        return true;
    }
    if(r.endsWith(s)){
        return true;
    }
    return false;
}

//starOut

function starOut(str){
    var plop = "";
    for(var i=0; i<str.length; i++){
        if(str[i]=="*" || str[i-1]=="*" || str[i+1]=="*"){
            plop = plop;
        }else{
            plop+=str[i];
        }
    }
    return plop;
}


//getSandwich

function getSandwich(str){
    var indx = "bread";
    var ind = "bread";
    if(!(indx == -1) && !(indx == ind)){
        return str.substring(0,5);
    }
    return "";
}


//canBalance

function canBalance(ar){
    var fic = 0;
    var fac = 0;
    for(var i=0; i<ar.length; i++){
        fic+=ar[i]
    }
    for(var i=0; i<ar.length; i++){
        fic-=ar[i];
        fac-=[i];
        if(fic=fac){
            return true;
        }
    }
    return false;
}


//countClumps

function countClumps(ar){
    var c=0;
    for(var i=0; i<ar.length; i++){
        if(ar[i-1]==ar[i]){
            c;
        }else{
            if(ar[i+1]==ar[i]){
                c++;
            }
        }
    }
    return c;
}

//evenlySpaced

function evenlySpaced(a, b, c){
    var ar = [a, b, c];
    ar.sort();
    if( (ar[2]-ar[1]) == (ar[1]-ar[0]) ){
        return true;
    }else{
        return false;
    }
}






