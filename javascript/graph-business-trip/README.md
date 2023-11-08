# Challenge

Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Whiteboard Process

![Graph Business Trip](./Screenshot%202023-11-07%20at%2011.19.51%20PM.png)

## Approach & Efficiency

Initialize a totalCost variable to keep track of the accumulated cost.

Iterate through the itinerary array, starting from the first city.

For each pair of consecutive cities (currentCity and nextCity), check if there is a direct flight between them in the graph.

If a direct flight exists, add the cost of that flight to the totalCost.

If a direct flight doesn't exist between any pair of consecutive cities, return null to indicate that the trip is not possible.

Continue this process until all cities in the itinerary have been checked.

Finally, return the totalCost if the trip is possible, or null if it's not.

The time complexity of this approach is O(n), where n is the number of cities in the itinerary. This is because we iterate through the itinerary once to calculate the cost.

The space complexity is O(1) because we use a constant amount of additional space regardless of the size of the input.

This approach efficiently determines the cost of the trip and handles scenarios where direct flights are missing or the itinerary is empty.
