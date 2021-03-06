describe('Event', () => {
  it('should store a description', () => {
    const event = new Event("JAG's BBQ: Fun for everyone")
    expect(event.description).toBe("JAG's BBQ: Fun for everyone")
  })

  it('should store a date', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019")
    expect(event.date).toBe("10/10/2019")
  })

  it('should store a time', () => {
    const event = new Event("JAG's BBQ: Fun for everyone", "10/10/2019", "08:00")
    expect(event.time).toBe("08:00")
  })
})
