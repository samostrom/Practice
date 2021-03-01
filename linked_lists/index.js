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

    // Get at index

    // remove at index

    // clear list

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
ll.insertLast(400)

ll.printListData()