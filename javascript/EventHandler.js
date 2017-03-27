
function EventHandler() {
  this.queue = {};

  this.subscribe = (event, callback) => {
    // Create empty list for callbacks if first callback for event
    if (typeof this.queue[event] === 'undefined')
      this.queue[event] = [];

    // Push callback into queue
    this.queue[event].push(callback);
  };

  this.publish = (event, data) => {
    // Check if there's any callbacks to call
    if (typeof this.queue[event] === 'undefined')
      return false;

    // Call all callbacks related to event with given data
    for (let i = 0; i < this.queue[event].length; i++)
      (this.queue[event][i])(data);

    return true;
  };

  this.unsubscribe = (event, callback) => {
    // Check if there's any callbacks to remove
    if (typeof this.queue[event] === 'undefined')
      return false;

    // Unsubscribe all instances of callback
    for (let i = 0; i < this.queue[event].length; i++)
      if (this.queue[event][i] === callback)
        this.queue[event].splice(i, 1);

    return true;
  };
};

export default EventHandler;
