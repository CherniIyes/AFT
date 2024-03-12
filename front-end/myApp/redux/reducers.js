const initialState = {
    count: 0,
    user: null,            // Initialize user to null
    blogPosts: [],         // Initialize blogPosts array
    chatMessages: [],      // Initialize chatMessages array
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      case 'LOGIN':
        return { ...state, user: action.payload };  // Save user data in the state
      case 'SIGN_UP':
        return { ...state, user: action.payload };  // Save user data in the state
      case 'LOGOUT':
        return { ...state, user: null };            // Clear the user data when logging out
      case 'ADD_BLOG_POST':
        // Create a new blog post object with the user information
        const newBlogPost = {
          ...action.payload, // Assuming action.payload contains the blog post data
          user: state.user, // Include user information from the state
        };
  
        return { ...state, blogPosts: [...state.blogPosts, newBlogPost] }; // Add a new blog post with user info
      case 'DELETE_BLOG_POST':
        return { ...state, blogPosts: state.blogPosts.filter(post => post.id !== action.payload.id) }; // Delete a blog post
      case 'SEND_MESSAGE':
        return { ...state, chatMessages: [...state.chatMessages, action.payload] }; // Send a chat message
      case 'GET_BLOG_POST':
        return { ...state, blogPosts: action.payload }; // Update blog posts with fetched data
      default:
        return state;
    }
  };
  
  export default counterReducer;