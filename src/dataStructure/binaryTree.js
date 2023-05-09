// 完全二叉树的一些公式
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