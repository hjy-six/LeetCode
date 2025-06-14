/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const path = new Array(nums.length); // 结果排列的长度固定为 nums.length
    const used = new Array(nums.length).fill(false); // 记录哪些数已被选中
    
    const dfs = (i) => {
        if (i === nums.length) { 
            ans.push([...path]); // 记录当前排列
            return;
        }
        for (let j = 0; j < nums.length; j++) {
            if (!used[j]) { // 选择一个未使用的数字
                path[i] = nums[j]; // 放入排列的第 i 位置
                used[j] = true; // 标记为已选
                dfs(i + 1); // 递归处理下一个位置
                used[j] = false; // 回溯，撤销选择
                // 注意 path 无需恢复，直接覆盖即可
            }
        }
    };

    dfs(0);
    return ans;
};

