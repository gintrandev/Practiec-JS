// import { createStore } from "https://cdn.skypack.dev/redux";

// =================== MY REDUX =====================
function createStore(reducer) {
    let state = reducer(undefined, {});
    const subscribes = [];
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);

            subscribes.forEach((subscriber) => subscriber());
        },
        subscribe(subscriber) {
            subscribes.push(subscriber);
        },
    };
}

// =================== MY APP =====================
const initState = 0;

// Reducer
function bankReducer(state = initState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state;
    }
}

// Store
const store = (window.store = createStore(bankReducer));

//Actions
function actionDeposit(payload) {
    return {
        type: "DEPOSIT",
        payload,
    };
}

function actionWithdraw(payload) {
    return {
        type: "WITHDRAW",
        payload,
    };
}

// DOM Events
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

// Events handler
deposit.onclick = function () {
    store.dispatch(actionDeposit(10));
};

withdraw.onclick = function () {
    store.dispatch(actionWithdraw(10));
};

// Listener
store.subscribe(() => {
    console.log("State vừa update xong!");
    render();
});

store.subscribe(() => {
    console.log("Sub 2");
});
// Render
function render() {
    const output = document.querySelector("#output");
    output.innerHTML = store.getState();
}

render();
