describe('Calendar', () => {
  it('saves a user event', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0]).toBe(event)
  })
    it('saves a user event description', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].description).toBe("JAG's BBQ: Fun for everyone")
  })
    it('saves a user event time', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].time).toBe("08:00")
  })
    it('saves a user event date', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    const calendar = new Calendar
    calendar.add(event)
    expect(calendar.events[0].date).toBe("10/10/2019")
  })

    it('only displays upcoming events', () => {
    const calendar = new Calendar
    const event = new Event("JAG's BBQ: Fun for everyone", "2019/10/10", "08:00")
    const event2 = new Event("An's house party", "2019/03/01", "08:00")
    const pastEvent = new Event("JAG's Lido Party", "2018/10/10", "07:00")
    calendar.add(event)
    calendar.add(event2)
    calendar.add(pastEvent)
    let eventArray = [];
    eventArray.push(event);
    eventArray.push(event2);
    // console.log('inside calendarUnitSpec')
    // console.log(eventArray);
    expect((calendar.sort()[0][1])).toBe(eventArray[0][1])
  })
})
