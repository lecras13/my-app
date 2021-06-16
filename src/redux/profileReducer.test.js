import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";


test('new post should be added', () => {
    let action = addPostActionCreator("hello")

    let state = {
        post: [
            {id: 1, message: "how' re you?", likesCount: 12},
            {id: 2, message: "How are you?", likesCount: 5},
            {id: 3, message: "Fine", likesCount: 5},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.post.length).toBe(4);
});

test('new post', () => {
    let action = addPostActionCreator("hello")

    let state = {
        post: [
            {id: 1, message: "how' re you?", likesCount: 12},
            {id: 2, message: "How are you?", likesCount: 5},
            {id: 3, message: "Fine", likesCount: 5},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.post[3].message).toBe("hello");
});


test('length after deleted', () => {
    let action = deletePostActionCreator(1)

    let state = {
        post: [
            {id: 1, message: "how' re you?", likesCount: 12},
            {id: 2, message: "How are you?", likesCount: 5},
            {id: 3, message: "Fine", likesCount: 5},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.post.length).toBe(2);
});