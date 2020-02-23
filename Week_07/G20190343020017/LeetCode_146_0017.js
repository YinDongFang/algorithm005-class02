/**
 * 双向链表节点
 */
var LinkedNode = function (key, val, next = null, prev = null) {
    this.key = key;
    this.value = val;
    this.next = next;
    this.prev = prev;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Map();
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let res = this.map.get(key);
    this._use(res);
    return res ? res.value : -1;
};

LRUCache.prototype._use = function (node) {
    if (node && node !== this.head) {
        if (this.tail === node)
            this.tail = node.prev;
        if (node.prev)
            node.prev.next = node.next;
        if (node.next)
            node.next.prev = node.prev;
        node.prev = null;
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.map.get(key);
    // 存在于缓存中
    if (node) {
        node.value = value;
        this._use(node);
    } else {
        let node = new LinkedNode(key, value);
        this.map.set(key, node);
        this.size++;
        if (this.head) {
            // 如果不是空缓存，和head节点建立连接
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            // 判断容量
            if (this.size > this.capacity) {
                this.map.delete(this.tail.key);
                let temp = this.tail.prev;
                this.tail.prev = null;
                this.tail = temp;
                this.tail.next = null;
                this.size = this.capacity;
            }
        } else {
            // 如果是空缓存，将头尾节点指向Node
            this.head = this.tail = node;
        }
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */