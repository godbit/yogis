export class YogiDetails {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    dash: number;
    attending: number;
    absent: number;
    percent: number;
    currentScore: number;

    constructor() { }

    static fromResponse(response): YogiDetails {
        const yd = new YogiDetails();
        yd.a = response['A'];
        yd.b = response['B'];
        yd.c = response['C'];
        yd.d = response['D'];
        yd.e = response['E'];
        yd.f = response['F'];
        yd.dash = response['-'];
        yd.attending = response['Attending'];
        yd.absent = response['Absent'];
        yd.percent = response['Percent'];
        yd.currentScore = response['Current score'];
        return yd;
    }
}
