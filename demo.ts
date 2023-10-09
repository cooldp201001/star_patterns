
function reversePyramid (size:number):void{
    let str:string = "";

    for(let col=1 ; col<=size ; col++){

        for(let row =1 ; col+row <= size*2 ;row++){
            
            str += row >= col? "*":" ";


        }
        str += "\n"
    }
    console.log(str);
 
}

 let x = reversePyramid(40);
 
