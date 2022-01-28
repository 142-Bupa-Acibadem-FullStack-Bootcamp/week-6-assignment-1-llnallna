// Bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.

// Örnek 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Çünkü nums[0] + nums[1] == 9, return [0, 1].

// Örnek 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Örnek 3:
// Input: nums = [3,3], target = 6
// Output: [0,1] 


const nums = [3,2,4];
let target = 6;

const elementIndex = [];
for (let i=0; i<nums.length; i++)
{
    for(let j= i+1; j<nums.length; j++)
    {
        if(nums[i]+nums[j] === target)
        {
            elementIndex.push(i,j);                        
        }       
    }    
}
console.log(elementIndex);