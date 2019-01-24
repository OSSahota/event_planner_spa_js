class Calendar {
  constructor() {
    this.events = [];
    }

  add(event) {
    this.events.push(event);
    // console.log(this.events)
  }

  sort() {
    let events = this.events;
    let future = []
    let dateNow = new Date()
    // console.log(dateNow)

    events.forEach(function(event) {
      // console.log('inside forEach')
      // console.log(new Date(event.date).getTime())
      // console.log(dateNow.getTime())
      if (new Date(event.date).getTime() >= dateNow.getTime()) {
      // console.log('inside if')
        future.push(event);
        // console.log('after push')
      }
    })
    // console.log(future);
    return future;
  }

  sortUpcomingEvents() {
      // return all future events, sorted by dates (not taking in account time)
      let result = this.sort();
      result.sort((e1, e2) => {
          let date1 = new Date(e1.date)
          let date2 = new Date(e2.date)

          return date1 - date2;
      });
      return result;
  }

  elementToDisplay() {
    let div = document.createElement('div');
    this.sortUpcomingEvents().forEach((event) => {
      let eventHTML = event.elementToDisplay();
      div.appendChild(eventHTML);
    });
    return div;
  }

}
