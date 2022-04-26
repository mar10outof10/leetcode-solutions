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