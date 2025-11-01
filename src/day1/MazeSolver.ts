
const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function walk(maze: string[], wall: string, current: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // Base Case
    // 1. Off The Map
    if (current.x < 0 || current.x >= maze[0].length || current.y < 0 || current.y >= maze.length){
        return false
    }
    
    // 2. On A Wall
    if (maze[current.y][current.x] === wall){
        return false
    }

    // 3. At End
    if (current.y === end.y && current.x === end.x){
        path.push(current)
        return true
    }

    // 4. Seen Before
    if (seen[current.y][current.x]){
        return false
    }

    // pre
    seen[current.y][current.x] = true
    path.push(current)

    // recurse
    for (let i = 0; i < directions.length; i++){
        const [x, y] = directions[i]
        if(walk(maze, wall, {
            x: current.x + x,
            y: current.y + y
        }, end, seen, path)){
            return true
        }
    }

    // post
    path.pop()

    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []

    for (let i = 0; i < maze.length; i++){
        seen.push(new Array(maze.length).fill(false))
    }

    walk(maze, wall, start, end, seen, path)

    return path
}