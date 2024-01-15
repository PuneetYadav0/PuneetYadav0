/*
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first  = new Node("Puneet");
// first.next = new Node ("there");
// first.next.next = new Node("Hello")

class SinglyLinkedList {
    constructor(val){
        const newNode = new Node(val);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    
    // push 
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;  
    }

    // pop
    pop(){
    if(!this.head) return undefined;
      let temp = this.head;
      let pre = this.head;
       while (temp.next) {
           pre = temp
           temp= temp.next
       }
        this.tail= pre;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            pre = null;
            temp = null;
        }
        return temp; 
    }


    // Unshift

    unshift(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // shift 

    shift(){
        if(!this.head)return undefined;
        let temp = this.head
        this.head = this.head.next;
        this.length--;
        if(this.length == 0){
           this.tail = 0; 
        }
        temp.next = null;
        return temp;
    }

    

    //get 

    get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        let temp = this.head;
        for(let i=0; i< index; i++){
            temp = temp.next;
        }
        return temp;
    }

    // set 

    set(index, val){
        let temp = this.get(index);

        if(temp){
            temp.val = val;
            return true;
        }
       
        return false;
    }


    // insert 

    insert(index, val){
        if (index === 0) {
            return this.unshift()
        }
        if (index === this.length) {
            return this.push(val)
        }
        if(index < 0 || index > this.length){
            return false;
        }
        const  newNode = new Node(val);
        const temp = this.get(index-1)

        newNode.next = temp.next
        temp.next = newNode;
        this.length++;
        return this;
    }


    // remove 

    remove(index){
        if(index === 0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop();
        }
        if( index < 0 || index >= this.length){
            return undefined;
        }

        const before = this.get(index-1)
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
        
    }


    // reverse 



    reverse(){
        let temp = this.head;
        this.head  = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        
    }


    // 1.  first Middle Element 


    findMiddle(){
        let slow = this.head;
        let fast = this.head;

        while(fast && slow.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
        
    }


    // 2. reverse linked List

    reverseList(){
        let temp = this.head;
        this.head = this.tail;
        this.tail= temp;

        let next = temp.next;
        let prev = null;

        for(let i =0; i<this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
            
        }
        return this; 
    }


    // 03 remove Duplicate Linked List

    removeSortedDulpicate(){
        let current = this.head;

        while(current !== null && current.next !== null){
            if(current.val === current.next.val){
                current.next = current.next.next;
                this.length--;
            }else{
                current = current.next
            }
        }
        return this;
    }


    // 04 remove unshorted list.
    // 05 detect if there is creating a cycle.
    
    
}


let first = new SinglyLinkedList(0)
first.push(1);
first.push(2);
first.push(3);
first.push(3);
first.push(3);
first.get(2);
first.reverseList()
first.removeSortedDulpicate();

*/

