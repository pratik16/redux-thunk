export const RECEIVE_IMG = 'RECEIVE_IMG';

function receive_img(json) {
    const { img } = json
    return {
        type: RECEIVE_IMG,
        img
    }
}

function fetch_img_json() {
    return fetch('http://dummy.restapiexample.com/api/v1/employees');
        //.then(response => response.json);
}

export function fetcheImg() {
    return function(dispatch) {
        return fetch_img_json()
            .then(json => dispatch(receive_img(json)));
    }
}