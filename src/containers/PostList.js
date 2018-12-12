import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts ,removePost} from "../store/actions/posts";
import PostItem from "../component/Postitem";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
}
  componentDidMount() {
    this.props.fetchPosts();
    this.setState({
      filtered: this.props.posts
    });
    this.handleChange = this.handleChange.bind(this);


  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.posts
    });
  }


  handleChange(e) {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];
    
    // If the search bar isn't empty
if (e.target.value !== "") {
        // Assign the original list to currentList
    currentList = this.props.posts;
        
        // Use .filter() to determine which items should be displayed
        // based on the search terms
  newList = currentList.filter(post => {
            // change current item to lowercase
    const lc = post.text.toLowerCase();
            // change search term to lowercase
    const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
    return lc.includes(filter);
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.props.posts;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
}




  render() {
    const { removePost,currentUser } = this.props;
    let PostList =this.state.filtered.map(post => (
      <PostItem
        handleChange={this.handleChange}
        key={post._id}
        id={post._id}
        img={post.img}
        comments={post.comments}
        date={post.createAt}
        text={post.text}
        username={post.user.username}
        profileImg={post.user.profileImg}
        userId={post.user._id}
        removePost={removePost.bind(this, post.user._id, post._id)}
        isCorrectUser={currentUser === post.user._id}
      />
    ));
    return (

          <ul className="list-group" id="posts">
                <input style={{
                  'width':'60%',
                  'color':'white',
                  'borderColor':'#21201c',
                  'display':'block', 
                  "margin":"5px auto"}}
                   type="text" className="input" onChange={this.handleChange} placeholder="Search..." />

            {PostList}
          </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchPosts ,removePost})(PostList);
