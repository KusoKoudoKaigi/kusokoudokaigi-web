import * as React from "react"

const CodeAndEpisode = ({name, deadline, children }) => (
  <div style={{ margin: "2rem auto" }}>
    <h3>{name}募集({deadline}まで)</h3>
    {children}
  </div>
)

export default CodeAndEpisode
