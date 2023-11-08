const businessTrip = require('./graphBusinessTrip');

describe('businessTrip', () => {
  it('should calculate the cost of a valid trip', () => {
    const graph = {
      A: { B: 100, C: 200 },
      B: { C: 50 },
      C: { D: 100 },
      D: {},
    };

    const itinerary = ['A', 'B', 'C', 'D'];

    const result = businessTrip(graph, itinerary);
    expect(result).toEqual(250);
  });

  it('should handle a trip with a missing direct flight', () => {
    const graph = {
      A: { B: 100 },
      B: {},
    };

    const itinerary = ['A', 'B', 'C'];

    const result = businessTrip(graph, itinerary);
    expect(result).toBeNull();
  });

  it('should handle an empty itinerary', () => {
    const graph = {
      A: { B: 100 },
      B: {},
    };

    const itinerary = [];

    const result = businessTrip(graph, itinerary);
    expect(result).toEqual(0);
  });

  it('should handle a single-city itinerary', () => {
    const graph = {
      A: {},
    };

    const itinerary = ['A'];

    const result = businessTrip(graph, itinerary);
    expect(result).toEqual(0);
  });
});

