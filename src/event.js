class Event {
  constructor(description, date, time) {
    this.description = description;
    this.date = date;
    this.time = time;
  }

  elementToDisplay(){
    let eventDiv = document.createElement('div');
    eventDiv.innerText = `${this.description} - ${this.date} ${this.time}`;
    return eventDiv;
  }
}
