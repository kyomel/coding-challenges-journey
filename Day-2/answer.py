## Shortest Path Algorithm Solution (Python)
## Implement a function to determine the shortest path for feeding all animals in the zoo, assuming each habitat is a node, and paths between them vary in distance. Skills tested include graph traversal and shortest path algorithms (e.g., Dijkstra’s or BFS).
import heapq

def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    priority_queue = [(0, start)]

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances