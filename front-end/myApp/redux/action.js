// Redux Actions

// Authentication Actions
export const login = (user) => ({
      type: 'LOGIN',
      payload: user,
    });
    
    export const signUp = (user) => ({
      type: 'SIGN_UP',
      payload: user,
    });
    
    export const logout = () => ({
      type: 'LOGOUT',
    });
    
    export const addBlogPost = (posts) => ({
      type: 'ADD_BLOG_POSTS', // Updated action type
      payload: posts,
    });
    
    export const deleteBlogPost = (postId) => ({
      type: 'DELETE_BLOG_POST',
      payload: postId,
    });
    
    // Chat Actions
    export const sendMessage = (message) => ({
      type: 'SEND_MESSAGE',
      payload: message,
    });
    
    // Blog Actions
    export const getBlogPosts = (posts) => ({
      type: 'GET_BLOG_POSTS', // New action type
      payload: posts,
    });
    
    // New action for fetching blog posts
    export const fetchBlogPosts = () => ({
      type: 'FETCH_BLOG_POSTS_REQUEST', // Indicate that the fetch request is in progress (optional)
    });
    
    export const fetchBlogPostsSuccess = (posts) => ({
      type: 'FETCH_BLOG_POSTS_SUCCESS',
      payload: posts,
    });
    
    export const fetchBlogPostsFailure = (error) => ({
      type: 'FETCH_BLOG_POSTS_FAILURE',
      payload: error,
    });