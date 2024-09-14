const array=[23,535,2424,3535353,2222,1111111];
let temp=0;
let largest=0;
for(let i=0;i<array.length;i++)
{
    if(array[i]>temp)
    {
        temp=array[i];
    }
    else{
        largest=array[i];
    }
    
} console.log(largest);