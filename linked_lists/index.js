class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0;

    }
    // Insert first node
    insertFirst(data) {
        let node = new Node(data)
        let current;
        current = this.head
        this.head = node
        this.head.next = current
        this.size++
    }
    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++
    }
    // Insert at index
    insertAt(data, index){
        let node = new Node(data);
        let current, previous;
        // If index is not in linked list
        if(index > 0 && index > this.size){
            return
        }
        if(index === 0){
            current = this.head
            this.head = node
            this.head.next = current
            this.size++
            return;
        }
        current = this.head;
        let count = 0
        while(count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

        this.size++
    }
    // Get at index
    getIndex(index){
        let current = this.head;
        let count = 0
        while(current){
            if(count == index){
                console.log(current.data)
            }
            current = current.next
            count++
        }
        return null;
    }
    // remove at index
    removeIndex(index){
        let current = this.head
        let previous;
        let count = 0
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            this.head = current.next
            
        } else {
            while(count < index){
                count++;
                previous = current;
                current = current.next;

            }
            previous.next = current.next
        }
        this.size--
    }
    // clear list
    clear(){
        this.head = null
        this.size = 0
    }
    // print list data
    printListData(){
        let current = this.head;

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertAt(400,0)

ll.removeIndex(2)
ll.clear()
ll.printListData()

