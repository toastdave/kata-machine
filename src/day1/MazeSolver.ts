
function walk(maze: string[], wall: string, current: Point, end: Point, seen: boolean[][]): boolean {
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
        return true
    }

    // 4. Seen Before
    if (seen[current.y][current.x]){
        return false
    }

}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}