


function summ(arr,sum){

    let x=[];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1;j<arr.length; j++ ){
            console.log(i,"-----",j);
            if((arr[i]+arr[j])==sum){

                return [i,j];
            }
        }
    }

}
const test=[10,20,-6,7,23,11];
console.log(summ(test,30));

