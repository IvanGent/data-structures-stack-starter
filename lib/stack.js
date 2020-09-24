// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value){
        if(!this.top) {
            const node = new Node(value);
            this.top = node;
            this.length++
        } else {
            this._push(value);
        }
    }

    _push(value) {
        let next = this.top;
        let val = new Node(value);

        this.top = val;
        val.next = next;
        this.length++
    }

    pop() {

    }

    size() {

    }
}

exports.Node = Node;
exports.Stack = Stack;
