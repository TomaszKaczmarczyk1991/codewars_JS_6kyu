class SmartTrafficLight {
    constructor(st1, st2) {
        this.roads = [
            { cars: st1[0], name: st1[1] },
            { cars: st2[0], name: st2[1] }
        ];
    }
    
    turngreen() {
        if (this.roads[0].cars === 0 && this.roads[1].cars === 0) return null;
        if (this.roads[0].cars === this.roads[1].cars) return null;
        
        let maxIndex = this.roads[0].cars > this.roads[1].cars ? 0 : 1;
        let roadName = this.roads[maxIndex].name;
        
        this.roads[maxIndex].cars = 0;
        
        return roadName;
    }
}

// 