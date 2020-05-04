import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetails } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount = () => {
    this.handleSubmit("Accra Ghana")
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: "5",
        key: "AIzaSyDWeh1eN_GN8_w2CYKGcK_EsWWRkf3mLEc",
        q: searchTerm
      },
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
