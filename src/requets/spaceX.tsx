export function getRockets() {
    return fetch('https://api.spacexdata.com/v3/rockets')
        .then(res => res.json());
}
