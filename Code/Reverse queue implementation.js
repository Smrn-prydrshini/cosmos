class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    reverse() {
        const reversedQueue = new Queue();
        while (!this.isEmpty()) {
            reversedQueue.enqueue(this.dequeue());
        }
        this.items = reversedQueue.items;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            console.log(this.items.join(" <- "));
        }
    }
}


function queueOperations() {
    const queue = new Queue();
    let choice;

    do {
        choice = prompt(`Choose an operation:
        1. Enqueue
        2. Dequeue
        3. Peek
        4. Check if Empty
        5. Get Size
        6. Reverse Queue
        7. Display Queue
        8. Exit`);

        switch (choice) {
            case '1':
                const element = prompt("Enter an element to enqueue:");
                queue.enqueue(element);
                console.log(`Enqueued: ${element}`);
                break;
            case '2':
                const dequeuedElement = queue.dequeue();
                console.log(`Dequeued: ${dequeuedElement}`);
                break;
            case '3':
                console.log(`Front Element: ${queue.peek()}`);
                break;
            case '4':
                console.log(`Is Queue Empty? ${queue.isEmpty()}`);
                break;
            case '5':
                console.log(`Queue Size: ${queue.size()}`);
                break;
            case '6':
                queue.reverse();
                console.log("Queue reversed.");
                break;
            case '7':
                console.log("Current Queue:");
                queue.display();
                break;
            case '8':
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== '8');
}


queueOperations();
