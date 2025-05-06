const getOddSquares=(nums)=>{   
    return (nums.filter(el=>el%2!==0).map((el)=>el*el).sort((a,b)=>a-b));
}
let arr=[5, 2, 9, 4, 3];
console.log(getOddSquares(arr));