// 完全二叉树的一些公式
// 1、第n层的节点数最多为2^n个节点
// 2、n层二叉树最多有2^0+……+2^n=2^(n+1)-1个节点
// 3、第一个非叶子节点：length/2
// 4、任意节点的孩子节点：2n、2n+1

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

function Tree(){
    this.root = null;
}

Tree.prototype = {
    insert(data){
        const node = new Node(data, null, null);
        if(!this.root){
            this.root = node;
            return;
        }
        const current = this.root;
        const parent = null;
        while(current){
            parent = current;
            if(data < parent.data){
                current = current.left;
                if(!current){
                    parent.left = node;
                    return;
                }
            } else {
                current = current.right;
                if(!current){
                    parent.right = node;
                    return;
                }
            }
        }
    },
    preOrder(node){
        if(node){
            node.show();
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },
    middleOrder(node){
        if(node){
            this.middleOrder(node.left);
            node.show();
            this.middleOrder(node.right);
        }
    },
    laterOrder(node){
        if(node) {
            this.laterOrder(node.left);
            this.laterOrder(node.right);
            node.show()
        }
    },
    getMin(){
        const current = this.root;
        while(current){
            if(!current.left){
                return current;
            }
            current = current.left;
        }
    },
    getMax(){
        const current = this.root;
        while(current){
            if(!current.right){
                return current;
            }
            current = current.right;
        }
    },
    getDeep(node, deep){
        deep = deep || 0;
        if(node == null){
            return deep
        };
        deep++;
        const dLeft = this.getDeep(ndoe.left, deep);
        const dRight = this.getDeep(node.right, deep);
        return Math.max(dLeft, dRight);
    }
}
// ex:
const t = new Tree();
t.insert(3);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);