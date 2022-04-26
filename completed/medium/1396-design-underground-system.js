class UndergroundSystem {
  constructor () {
    this.passengers = {};
    this.trips = {};
  }
  checkIn(id, stationName, t) {
    this.passengers[id] = {
      stationName,
      startTime: t,
    }
  }
  checkOut(id, stationName, t) {
    let start = this.passengers[id].stationName;
    let startTime = this.passengers[id].startTime;

    if (!this.trips[start]) {
      this.trips[start] = {};
    }

    if (!this.trips[start][stationName]) {
      this.trips[start][stationName] = [];
    }

    this.trips[start][stationName].push(t - startTime);
  }
  getAverageTime(startStation, endStation) {
    let tripsArr = this.trips[startStation][endStation]
    let time = 0;
    let len = tripsArr.length;
    for (let i = 0; i < len; i++) {
      time += tripsArr[i];
    }
    return (time / len);
  }
};
/*
 A customer with a card ID equal to id, checks in at the station stationName at time t.
 A customer can only be checked into one place at a time. 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    
};

/** 
 * A customer with a card ID equal to id, checks out from the station stationName at time t.
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    
};

/** 
 * Returns the average time it takes to travel from startStation to endStation.
The average time is computed from all the previous traveling times from startStation to endStation that happened directly, meaning a check in at startStation followed by a check out from endStation.
The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.
There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 * 
 * You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order.
 */