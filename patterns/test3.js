// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// 123
// 456
// 789

// let count=1;
// for(let i=3;i>1;i--){
//     for(let j=0;j<3;j++){
//         process.stdout.write(count + " ");
//         count++;
//     }
//     console.log('\n');
// }




// function arrayPrint(arr){
//     if(arr.length>0){
//         for(let i=0;i<(arr.length);i++){
//             //console.log("dhgdghghh",arr[i].length);
//             if(arr[i].length>0){
//                 for(let j=0;j<3;j++)
//                 {
//                     process.stdout.write(arr[i][j] + " ");
//                 }
//             }
//             console.log('\n');
//         }
//     }
// }
// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// arrayPrint(arr);

let b =new Array();
function arrayPrint(arr){
    if(arr.length>0){
        
        for(let i=0;i<3;i++){
            
            //console.log("dhgdghghh",arr[i].length);
            let a=new Array();
            if(arr[i].length>0){
                for(let j=2;j>=0;j--)
                {
                    //process.stdout.write(arr[j][i] + " ");[]
                        //a.push(arr[j][i]);
                        a=[...a,arr[j][i]];

                    
                }
            }
            b=[...b,a];
        }
    }
}

let arr=[[1,2,3],[4,5,6],[7,8,9]];
arrayPrint(arr);
console.log(b);