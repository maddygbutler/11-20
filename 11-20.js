
// 10 loneSum

function loneSum(a,b,c){
    if(a==b && a==c ){
        return 0;
    }
    if(a==b){
        return c;
    }
    if (b==c){
        return a;
    }
    if(a==c){
        return b;
    }

    if(a != b && a != c){
        return a+b+c;
    }
}

//11 firstLast6
function firstlast6(arr){

    var first= arr[0];
    var last= arr[arr.length-1];

    if(first==6 || last==6){
        return true;
    }else{
        return false;
    }
}

//12 has 23

function has23(arr){
    if(arr.length ==2){
        if(arr.includes(2) || arr.includes(3)){
            return true;
        }else{
            return false;
        }
    }
}

//13 fix 23

function fix23(arr) {
    if (arr.indexOf(2) == arr.indexOf(3)-1) {
        arr(3]=0;
    }
    return arr;
}

//14 countYZ

function countYZ(str){
    var string = str.toLowerCase();
    var count = 0;
    var strArray = string.split(" ");
    for (var i=0; i<strArray.length; i++){
        var currentString = strArray[i];
        if (currentString.endsWith("y") || currentString.endsWith("z")){
            count += 1;
        }
    }

    return count;
}

//15 endOther

function endOther(strA, strB){
    strA= strA.toLowerCase();
    strB= strB.toLowerCase();
    if(strA.endsWith(strB) || strB.endsWith(strA)){
        return true;
    }else{
        return false;
    }
}

//16 starOut

function starOut(str){
    if(str.includes("*")){
        var newStr= "";
        for(i=0; i<str.length; i++){
            if( str[i +1] !== "*" && str[i - 1] !== "*" && str[i] !== "*"){
                newStr = newStr + str.charAt(i);

            }
        }
    }else{
        newStr = str;
    }
    return newStr;
}


//17 getSandwich
function getSandwich(str){
    var newStr="";
    if(str.includes ("bread")){
        var firstBread= str.indexOf("bread");

        var secondBread= str.lastIndexOf("bread");

        var middle= str.slice (firstBread + 5,secondBread);

        var sandwich= middle.indexOf("bread");

        var newStr= middle;
    }else{
        newStr= newStr;
    }

    return newStr;
}

// 18 canBalance
function canBalance(arr){
    var first=0;
    var second= 0;
    var first_sum=0;
    var second_sum=0;
    for(var i=0; i< arr.length; i++){
        first_sum=0;
        second_sum=0;
        first = arr.slice(0,i);
        first_sum = first.reduce((a,b)=>a+b, 0);
        second = arr.slice(i);
        second_sum = second.reduce((a,b)=>a+b, 0);
        if (first_sum === second_sum){
            return true;
        }

    }
    return false;
}

//19 countClumps
function countClumps(arr){
    var clumps=0;
    var i=0;
    while(i< arr.length){
        var j= i;
        var clumpLength = 1;
        while(arr[i]===arr[j+1]){
            clumpLength += 1;
            j += 1;
        }
        if (clumpLength > 1) {
            clumps += 1;
        }
        i += clumpLength
    }
    return clumps;
}

//20 evenlySpaced
function evenlySpaced(a,b,c){
    var numArray=[a,b,c];
    var lg = Math.max(a,b,c);
    var sm = Math.min(a,b,c);
    var mid= (lg+sm) / 2;
    if((a==mid ) || (b==mid) || (c==mid)){
        return true;
    }else{
        return false;
    }

}