/*
Quick Sort - O(n log n)
This sort will first find a pivot (first element of the array), then it will create 2 arrays (left, and right).
The array will be looped through, and each element will be pushed into left or right array based on whether it is bigger or smaller than the pivot number.
The function is then ran recursively with the base case being the array only has 1 element.
*/


uA = [9,5,3,2,6,4,8,7,0,1]

function quickSort(arr){
    if(arr.length<2){
        return arr
    }else{
        var pivot = arr[0]
        var left = []
        var right=[]
        for(var i=1; i<arr.length; i++){
            if(arr[i]<pivot){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(pivot).concat(quickSort(right))
    }
}

console.log(quickSort(uA))