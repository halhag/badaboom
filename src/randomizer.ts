export function randomizeModifier(value: number): number {
    const roll = Math.random();
    if (roll < 0.50) {
        // 50% chance: return the same number
        return value;
    } else if (roll < 0.85) { 
        // 35% chance: return a change of +/- 1
        const change = Math.random() < 0.5 ? 1 : -1;
        return value + change;
    } else {
        // 15% chance: return a change of +/- 3
        const change = Math.random() < 0.5 ? 3 : -3;
        return value + change;
    }
}
