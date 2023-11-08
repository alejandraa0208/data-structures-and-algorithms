function businessTrip(graph, itinerary) {
  let totalCost = 0;

  for (let i = 0; i < itinerary.length - 1; i++) {
    const currentCity = itinerary[i];
    const nextCity = itinerary[i + 1];

    if (graph[currentCity] && graph[currentCity][nextCity]) {
      totalCost += graph[currentCity][nextCity];
    } else {
      return null; // Trip is not possible
    }
  }

  return totalCost;
}

module.exports = businessTrip;
