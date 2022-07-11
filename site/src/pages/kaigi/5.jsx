import * as React from "react"
import { Container, Button } from "react-bootstrap"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Detail from "../../components/Detail/Detail"

const Title = () => (
  <div id="title">
    <Container>
      <h1>第5回 KusoKoudoKaigi</h1>
      <h4>~ 強盗にFizzBuzzを要求されたら ~</h4>
    </Container>
  </div>
)

const Abst = () => (
  <div id="concept">
    <Container>
      <h2>開催概要</h2>
      <h3>強盗に出すクソFizzBuzzを募集して、最狂のFizzBuzzを決める配信！</h3>
      <h3>
        募集締切: 8月13日(土)<br />
        配信: YouTubeLiveにて 8月14日(日)21時~
      </h3>

      <h3>
        <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/F7uy8MjuBJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
          style={{ maxWidth: "560px"}}>
        </iframe>
      </h3>

      <h2>募集するもの</h2>
      <h3>
        <ul>
          <li>クソFizzBuzz</li>
          <li>荒くれ者エピソード</li>

          <li>審査員</li>
        </ul>
      </h3>

    </Container>
  </div>
)

const Commenter = ({isFull}) => {
  return (
    <div id="commenter">
      <h3>審査員募集(定員埋まり次第終了)</h3>
      <p>YouTubeLive上で、一緒にクソコードにコメントをしてくれる審査員の方を募集しています。</p>
      <p>所定の人数になった段階で、締め切りをさせていただきます。</p>
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
    </div>
  )
}

// TODO: 後で切り分けたりリファクタしたりする
const Recruit = () => (
  <div id="join">
    <Container>
      <h2>募集要項</h2>
      <h3>はじめに(おねがい)</h3>
      <p>クソコード会議で募集したコード、エピソード、および、クソコード会議動画本編は以下の用途で使わせていただきます。</p>
      <div style={{
        display: "inline-block",  margin: "0 auto", textAlign: "left"
      }}>
        <ul>
          <li>YouTubeLiveで紹介・審査</li>
          <li>Live映像を編集して、YouTubeやニコニコ動画への投稿</li>
          <li>クソコード・審査結果などを、本Webサイト上で公開</li>
          <li>さらに、今回は、編集した動画を
            <a href="http://onikuru.info/nicovfes/">ニコV祭</a>
            へも投稿予定です。
          </li>
        </ul>
      </div>

      <br/>
      <hr/>
      <br/>

      <h3>クソFizzBuzz募集(8月13日(土)まで)</h3>
      <p>強盗に出すクソFizzBuzzを募集します！</p>
      <p>以下のストーリーに合うクソFizzBuzzをお願いします！</p>
      <h4>ストーリー</h4>
      <p>
        あなたの仕事場に、ナイフを持った不審者が現れ、こう言いました。<br/>
        「今すぐFizzBuzzとやらのコードを出せ！
        15まで出力しろ！！」<br />
        あなたはFizzBuzzのプログラムとその出力結果を、提出しなければなりません。
      </p>
      <div style={{
        display: "inline-block",  margin: "0 auto", textAlign: "left"
      }}>
        その他、細々したこと
        <ul>
          <li>言語不問、複数提出可</li>
          <li>審査基準は、おもしろいこと、狂っていることです。</li>
          <li>具体的な要件はストーリーから読み取れる範囲で好きにしてください。</li>
          <li><s>犯人はFizzBuzzと言っておりますが、募集するのはクソFizzBuzzです。</s></li>
          <li>明らかに悪意のあるコードはダメよ()</li>
          <li>あまりに高度なコードは審査員が理解できないかもしれないので、アピールポイントの記入をお願いします。</li>
        </ul>
      </div>
      <p>
        提出は, 以下のフォームから<br />
        ソースコード, 実行結果, アピールポイントを提出してください！
      </p>
      <Button href="https://forms.gle/fWeFLhHcHXiYs2d79">クソコードをくらえ！</Button>

      <br/>
      <br/>
      <hr/>
      <br/>

      <h3>荒くれ者エピソード募集(8月13日(土)まで)</h3>
      <p>クソコード会議では、クソコードの他にも、テーマお便りを募集しております。</p>
      <p>
        今回のテーマは、「荒くれ者」<br/>
        エンジニアの職場で出会った荒くれ者、やべープログラマ、自身のヤバいプログラミングエピソードなどなど<br />
        さまざまな荒くれエピソードを募集しています。
      </p>
      <Button href="https://forms.gle/DTBZzbfXnnfyvBV28">クソエピソードをくらえ！</Button>

      <br/>
      <br/>
      <hr/>
      <br/>

      <Commenter/>
   </Container>
  </div>
)

const KaigiPage = () => (
  <Layout>
    <Seo title="第5回 KusoKoudoKaigi" />
    <Title/>
    <Abst/>
    <Recruit/>
    <Detail/>
  </Layout>
)

export default KaigiPage

