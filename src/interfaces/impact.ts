export interface ImpactProps {
    id: string;
    title: string;
    bio: number;
    agua: number;
    carbon: number;
    solo: number;
}

export interface ImpactTokenProps {
    carbon: number;
    bio: number;
    water: number;
    soil: number;
    totalLocked: number;
    totalSupply: number;
    circulatingSupply: number;
    trees: number;
}