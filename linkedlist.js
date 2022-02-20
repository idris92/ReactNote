class LinkedList2 {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	//insert into the head of LinkedList
	insertAtHead2(data) {
		this.head = new Node(data, this.head);
		this.length++;
	}
	//insert at the end of the LinkedList
	insertAtEnd(data) {
		if (!this.head) {
			this.head = new Node(data, this.head);
			this.length++;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(data);
			this.length++;
		}
	}

	//inserting at an index
	insertAt(data, index) {
		//check if index is index is greater than 0 and greater than length of the Node
		if (index > 0 && index > this.length) {
			return;
		}

		// if we are inserting at the beginning of the node
		if (index === 0) {
			this.insertAtHead2(data);
			return;
		}

		//inserting into a specific index greater 0
		let node = new Node(data);
		let current = this.head;
		let previous;
		let count = 0;

		while (count < index) {
			previous = current;
			current = current.next;
			count++;
		}

		previous.next = node;
		node.next = current;
		this.length++;
	}

	//get an item at an index

	getAtIndex(index) {
		let current = this.head;
		let count = 0;
		if (index > this.length) {
			return;
		}

		while (count < index) {
			current = current.next;
			count++;
		}
		console.log(current.data);
	}

	//remove from index
	removeAt(index) {
		//checking if index is out of range
		if (index > 0 && index > this.length) {
			return;
		}

		//if index is zero
		let current = this.head;
		let previous;
		let count = 0;

		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				previous = current;
				current = current.next;
				count++;
			}
			previous.next = current.next;
			this.length--;
		}
	}

	//print the Node
	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const ll2 = new LinkedList2();
ll2.insertAtHead2(500);
ll2.insertAtHead2(200);
ll2.insertAtEnd(900);
ll2.insertAtEnd(1500);
ll2.insertAt(800, 3);
ll2.insertAt(100, 0);
ll2.insertAt(1200, 9);
ll2.getAtIndex(3);
ll2.getAtIndex(0);
ll2.removeAt(0);
ll2.removeAt(2);

ll2.print();
