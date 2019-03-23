export class YogiEventStats {
    description: string;
    delta: number;
    grade: string;
    score: number;

    constructor(description: string, delta: number, grade: string, score: number) {
        this.description = description;
        this.delta = delta;
        this.grade = grade;
        this.score = score;
    }
}

export class YogiSeries {
    seriesMap = new Map<string, YogiEventStats>();

    constructor() { }

    static fromResponse(response: Object): YogiSeries {
        const ys = new YogiSeries();
        for (const date in response) {
            if (!response.hasOwnProperty(date)) {
                continue;
            }
            const stats = response[date];
            const eventStats = new YogiEventStats(
                stats['delta'],
                stats['description'],
                stats['grade'],
                stats['score']
            );
            ys.seriesMap.set(date, eventStats);
        }
        return ys;
    }
}


