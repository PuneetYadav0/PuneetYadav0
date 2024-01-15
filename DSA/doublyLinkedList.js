class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class doublyLinkedList {
    constructor(val) {
        let newNode = new Node(val);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // push

    push(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = head;
            this.tail = tail;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    // Pop

    pop(){
        if(this.length === 0){
            return undefined;
        }
        let temp = this.tail;
        if(this.length === 1){
            this.head =null;
            this.tail= null
        }else{
        this.tail = this.tail.prev
        this.tail = null
        temp.prev = null
        }
        this.length --
        return temp
    }


    //  unshift

    unshift(val){
        const newNode = new Node(val);
        if(this.length ===0 ){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            
        }
        this.length++;
        return this;
    }


    // shift

    shift(){
        if(this.length ===0 ) return undefined;
        
        let temp = this.head;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
            
        }
        this.length --
        return temp;
        
    }


    //  get 

    get(index){
        if(index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head;
        for(let i=0;i<index; i++){
            temp = temp.next
            
        }
        return temp
    }

    // set 
    set(index, val){
        let temp = this.get(index);
        
        if(temp){
            temp.val = val
            return true
        }
        return false;
    }


    // insert

    insert(index, val){
        if(index === 0 ) return this.unshift(val)
        if(index === this.length) return this.push(val)
        if(index < 0 || this.length)return false
        
        const newNode = new Node(val)
        const temp = this.get(index-1)

        newNode.next = temp.next
        temp.next = newNode;
        this.length++
    }


    // remove 
    remove(index){
        if(index === 0 ) return this.shift();
        if(index === this.length-1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const temp = this.get(index);

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;

        temp.next = null;
        temp.prev = null
        this.length++
        return temp;
    }

    // swapFirstLast

    swapFirstLast(){
    let temp = this.head.val;
    this.head.val = this.tail.val;
    this.tail.val = temp 
    return this
    
   }


    reverse(){
    let current = this.head;
    let temp = null;

    while (current !== null){
        temp = current.prev;
        current.prev = current.prev;
        current.next = temp;
        current = current.prev
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
        
    return this;
   }


    // q3

    detectCycle(){
    let slow = this.head;
    let fast = this.head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true
        }
    }
    return false;
   }


    // q 04

    isPalindrome(){
        let farwordNode = this.head;
        let backwordNode = this.tail;

        for(let i =0; i< Math.floor(this.length/2); i++){
            if(farwordNode.val !== backwordNode.val){
                return false;
            }
            farwordNode = farwordNode.next;
            backwordNode = backwordNode.prev;
        }
        return true;
    }


    
}



let first = new doublyLinkedList(10);
first.push(20)
first.push(10)
// first.push(50)
// first.unshift(10)


// interview Questions



// Interview Questions Series

// Ques No. 01
/* 
Implement a member function called swapFirstLast() that swaps the value of the  first and last Nodes of a doubly linked list

*/

function swapFirstLast(){
    if(this.length < 2) return;
    let temp = this.head.val;
    this.head.val = this.tail.val;
    this.tail.val = temp 
    return this
}


// Ques No. 02
/* 
Implement a member function called reverse() that reveres the Nodes of a doubly linked list
*/

function reverse(){
    let current = this.head;
    let temp = null;

    while (current !== null){
        temp = current.prev;
        current.prev = current.prev;
        current.next = temp;
        current = current.prev
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp; 
    return this;
}


// Ques No. 03
/* 
detect if any cycle
*/

function detectCycle(){
    let slow = this.head;
    let fast = this.head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true
        }
    }
    return false;
}


