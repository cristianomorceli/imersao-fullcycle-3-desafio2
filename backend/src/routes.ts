export class Route {
    readonly title: string;
    readonly startPosition: string;
    readonly endPosition: string;
}

export class Routes {
    [key: number]: Route;
}