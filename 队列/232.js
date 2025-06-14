var MyQueue = function() {
    this.is = [];
    this.os = [];
};

MyQueue.prototype.push = function(x) {
    this.is.push(x);
};

MyQueue.prototype.pop = function() {
    if(!this.os.length){
        while(this.is.length){
            this.os.push(this.is.pop());
        }
    }
    return this.os.pop();
};

MyQueue.prototype.peek = function() {
    if(!this.os.length){
        while(this.is.length){
            this.os.push(this.is.pop());
        }
    }
    return this.os[this.os.length - 1];
};

MyQueue.prototype.empty = function() {
    return !this.is.length && !this.os.length;
};

