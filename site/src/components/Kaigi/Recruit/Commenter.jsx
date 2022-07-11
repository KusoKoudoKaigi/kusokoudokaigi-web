import * as React from "react"

const Commenter = ({ isFull }) => {
  const recruitText = (isFull) ?
    <p style={{ color: "crimson" }}>審査員が集まったため、募集を締め切りました。</p>
    :
    <>
      <p>今回は3~4名募集します。</p>
      <div style={{
        display: "inline-block", margin: "0 auto", textAlign: "left"
      }}>

        審査員の条件
        <ul>
          <li>クソコードに興味があること(技量問わず)</li>
          <li>Live の時間に、Discord にて通話できること</li>
        </ul>
      </div>
      <p>
        興味のある方は、主催のTwitterアカウントへDMください。<br />
        主催のTwitterアカウント: <a href="https://twitter.com/tamayurasouki">@tamayurasouki</a>
      </p>
    </>

  return (
    <div id="commenter" style={{marginTop: "2rem"}}>
      <h3>審査員募集(定員埋まり次第終了)</h3>
      <p>YouTubeLive上で、一緒にクソコードにコメントをしてくれる審査員の方を募集しています。</p>
      <p>所定の人数になった段階で、締め切りをさせていただきます。</p>
      {recruitText}
    </div>
  )
}

export default Commenter