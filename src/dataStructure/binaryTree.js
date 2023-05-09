// 完全二叉树的一些公式
// 1、第n层的节点数最多为2^n个节点
// 2、n层二叉树最多有2^0+……+2^n=2^(n+1)-1个节点
// 3、第一个非叶子节点：length/2
// 4、一个节点的孩子节点：2n、2n+1

// 基本结构
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}

Node.property = {
    show(){
        console.log(this.data)
    }
}

function Tree() {
    this.root = null;
}