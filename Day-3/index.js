// Question: Implement Hash Table(Master the Art of Efficient Data Storage with Hash Tables)
// Spesifics implementation hash table:
// Hash Function: Customized for string keys to minimize collisions and ensure even distribution.
// Collision Handling: Chaining method using linked lists.
// Operations:
// Insert: Places an element based on its hash index into a linked list.
// Delete: Removes an element by searching through the linked list at its hash index.
// Search: Retrieves an element using the hash index to access the correct list.

class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
    this.buckets.fill(null).map(() => new LinkedList());
  }

  getHash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash + char.charCodeAt(0) * 31) % this.buckets.length;
    }

    return hash;
  }

  insert(key, value) {
    const index = this.getHash(key);
    const bucketLinkedlist = this.buckets[index];
    const node = bucketLinkedlist.find({ callback: nodeValue => nodeValue.key === key });
    if(!node) {
      bucketLinkedlist.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  delete(key) {
    const index = this.getHash(key);
    this.buckets[index].delete({ callback: nodeValue => nodeValue.key === key });
  }

  search(key) {
    const index = this.getHash(key);
    const bucketNode = this.buckets[index].find({ callback: nodeValue => nodeValue.key === key });

    return bucketNode ? bucketNode.value.value : undefined;
  }
}