function threeSum(arr, target) {
// write your code here
	len n = arr.length;
	Arrays.sort(arr);
	let diff = Number.MAX_VALUE;
	let ans = 0;
	for(let i=n-1;i>=2;i--){
		let j = 0, k= i-1;
		while(j<k){
			let sum = arr[i] + arr[j] + arr[k];

		    if(Math.abs(sum-target) < diff){
				diff = Math.abs(sum-target);
				ans = sum;
			}
			if(sum > traget){
				k--;
			}
			else i++;
		}
	}
	return ans;
}

module.exports = threeSum;
