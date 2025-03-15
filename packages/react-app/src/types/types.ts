export interface Player {
    id: number // uniq ID of player
    name: string // Name of player
    avatar: string // Avatar of player
    isAlive: boolean // Dead or alive
    points: number // points of player
    kills: number // Number of kills
    killedBy?: number // id of player killer
}