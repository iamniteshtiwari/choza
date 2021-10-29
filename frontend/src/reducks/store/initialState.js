const initialState = {
    items: {
        results: [],
        count: 0,
        next: null,
        previous: null
    },
    carts: {
        results: [],
        count: 0,
        next: null,
        previous: null,
        subtotal: 0,
      },
    user: {
        user_name: '',
        email: '',
        token: '',
        token_expires_at: ''
        
    }
};

export default initialState;
