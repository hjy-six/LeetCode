	const majorityElement = nums => {
	    let count = 1;
	    // 将第一个数赋予 majority
	    let majority = nums[0];
	
	    for (let i = 1; i < nums.length; i++) {
	        if (count === 0) {
	            majority = nums[i];
	        }
	
	        if (nums[i] === majority) {
	            count++;
	        } else {
	            count--;
	        }
	    }
	
	    return majority;
	};
