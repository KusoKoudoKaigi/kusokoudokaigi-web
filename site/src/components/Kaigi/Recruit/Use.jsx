import * as React from "react"

const Use = ({ additionalItems }) => {
  const items = (additionalItems)
    ? additionalItems.map((item, index) => {
        return <li key={`addtional_item_${index}`}>{item}</li>
      })
    : ""

  return (
    <div>
      <h3>はじめに(おねがい)</h3>
      <p>クソコード会議で募集したコード、エピソード、および、クソコード会議動画本編は以下の用途で使わせていただきます。</p>
      <div style={{
        display: "inline-block", margin: "0 auto", textAlign: "left"
      }}>
        <ul>
          <li>YouTubeLiveで紹介・審査</li>
          <li>Live映像を編集して、YouTubeやニコニコ動画への投稿</li>
          <li>クソコード・審査結果などを、本Webサイト上で公開</li>
          {items}
        </ul>
      </div>
    </div>
  )
}

export default Use