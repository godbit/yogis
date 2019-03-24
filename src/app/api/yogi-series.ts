export class YogiEventStats {
    date: string;
    description: string;
    delta: number;
    grade: string;
    score: number;

    constructor(date: string, description: string, delta: number, grade: string, score: number) {
        this.date = date;
        this.description = description;
        this.delta = delta;
        this.grade = grade;
        this.score = score;
    }
}

export class YogiSeries {
    series: YogiEventStats[] = [];

    constructor() { }

    static fromResponse(response: Object): YogiSeries {
        const ys = new YogiSeries();
        for (const row in response) {
            if (!response.hasOwnProperty(row)) {
                continue;
            }
            const stats = response[row];
            const eventStats = new YogiEventStats(
                stats['date'],
                stats['description'],
                stats['delta'],
                stats['grade'],
                stats['score']
            );
            ys.series.push(eventStats);
        }
        return ys;
    }
}


