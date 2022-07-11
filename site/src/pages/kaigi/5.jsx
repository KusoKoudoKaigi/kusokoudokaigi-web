import * as React from "react"
import { Container, Button } from "react-bootstrap"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Detail from "../../components/Detail/Detail"

import Title from "../../components/Kaigi/Title"
import Abst from "../../components/Kaigi/Abst"
import Commenter from "../../components/Kaigi/Recruit/Commenter"
import Use from "../../components/Kaigi/Recruit/Use"
import CodeAndEpisode from "../../components/Kaigi/Recruit/CodeAndEpisode"

const Recruit = ({codeName, episodeName, deadline}) => (
  <div id="join">
    <Container>
      <h2>募集要項</h2>
      <Use additionalItems={[
        <>さらに、今回は、編集した動画を
          <a href="http://onikuru.info/nicovfes/">ニコV祭</a>へも投稿予定です。
        </>
      ]}/>
      <hr/>

      <CodeAndEpisode name={codeName} deadline={deadline}>
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
      </CodeAndEpisode>

      <hr/>

      <CodeAndEpisode name={episodeName} deadline={deadline}>
        <p>クソコード会議では、クソコードの他にも、テーマお便りを募集しております。</p>
        <p>
          今回のテーマは、「荒くれ者」<br/>
          エンジニアの職場で出会った荒くれ者、やべープログラマ、自身のヤバいプログラミングエピソードなどなど<br />
          さまざまな荒くれエピソードを募集しています。
        </p>
        <Button href="https://forms.gle/DTBZzbfXnnfyvBV28">クソエピソードをくらえ！</Button>
      </CodeAndEpisode>

      <hr/>

      <Commenter isFull={false}/>
   </Container>
  </div>
)

const KaigiPage = () => {
  const title = "第5回 KusoKoudoKaigi"
  const deadline = "8月13日(土)"
  const codeName = "クソFizzBuzz"
  const episodeName = "荒くれ者エピソード"
  return (
    <Layout>
      <Seo title={title} />
      <Title title={title} subtitle="強盗にFizzBuzzを要求されたら"/>
      <Abst
        concept="強盗に出すクソFizzBuzzを募集して、最狂のFizzBuzzを決める配信！"
        deadline={deadline} livedate="YouTubeLiveにて 8月14日(日)21時~"
        ytLiveId={"F7uy8MjuBJ4"}
        codeName={codeName} episodeName={episodeName}
      />
      <Recruit codeName={codeName} episodeName={episodeName} deadline={deadline} />
      <Detail/>
    </Layout>
  )
}

export default KaigiPage

