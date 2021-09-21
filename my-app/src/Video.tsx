import React, { Component } from 'react'

export default class Video extends Component {
  render() {
    return (
      <section className = "Video" id = "Video">
        <h3>Video</h3>
        <p>Transcription: <a className = "trans" href="https://docs.google.com/document/d/1uYJWNURG7OnROwCbaTUZB_dnTCgAxbOtJ08ySqnAPuQ/edit">Click</a></p>
        <iframe className = "video_frame" width="80%" height="415" src="https://www.youtube.com/embed/cYvU3rwPPB4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
    )
  }
}
