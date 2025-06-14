/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let map = new Map() // 用于记录节点是否被访问过！

    const dfs = function(node) {
        if(!node) return null // 递归，出口
        
        // 用给定节点新建
        const root = new Node(node.val)

        if(map.has(node)) return map.get(node)
        
        if(!map.has(node)) {
            map.set(node, root)
        }

        for(let i = 0; i < node.neighbors.length; i++) {
            root.neighbors[i] = dfs(node.neighbors[i])
        }

        return root
    }

    return dfs(node)
};