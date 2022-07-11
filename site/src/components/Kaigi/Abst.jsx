import * as React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"

const YouTubeIF = ({ ytLiveId }) => {
  const url = "https://www.youtube-nocookie.com/embed/" + ytLiveId
  return (
    <iframe width="100%" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      style={{ maxWidth: "560px" }}>
    </iframe>
  )
}

YouTubeIF.propTypes = {
  yt_live_id: PropTypes.string,
}

const Abst = ({
  concept, deadline, livedate, ytLiveId,
  codeName, episodeName,
}) => (
  <div id="concept">
    <Container>
      <h2>開催概要</h2>
      <h3>{concept}</h3>
      <h3>
        募集締切: {deadline}<br />
        配信: {livedate}
      </h3>

      <h3>
        <YouTubeIF ytLiveId={ytLiveId}/>
      </h3>

      <h2>募集するもの</h2>
      <h3>
        <ul>
          <li>{codeName}</li>
          <li>{episodeName}</li>
          <li>審査員</li>
        </ul>
      </h3>

    </Container>
  </div>
)

export default Abst