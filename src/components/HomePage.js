import React from 'react'
import { Button } from 'react-bootstrap';

function HomePege() {
  return (
    <div className="container text-center">
      {/* <span class="fa-stack fa-4x">
      <i class="fa-solid fa-address-card"></i> */}
      {/* </span> */}
    {/* <h1></h1> */}

    

    <p>
      Miho.Hのポートフォリオサイトです。
      成果物や身につけたスキルをまとめました。
    </p>

    <section class="page-section" id="services">
      <div className="service">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>
        <div class="row text-center">
          <div class="col-md-6">
            <span class="fa-stack fa-4x">
              <i class="fa-solid fa-laptop-file"></i>
            </span>
            <h4 class="my-3">ポートフォリオサイト</h4>
            <p class="text-muted">
              tutorialを見ながらこのポートフォリオサイトを作成しました。
              もっと手を加えて良いwebサイトにしたいです。
            </p>
            <p>使用言語など:HTML,CSS,JavaScript,React,Git</p>
          </div>
          <div class="col-md-6">
            <span class="fa-stack fa-4x">
            <a href='https://tanslation-app-python.onrender.com/tr/'>
              <i class="fa-solid fa-language"></i>
              </a>
            </span>
            <h4 class="my-3">翻訳アプリケーション</h4>
            <p class="text-muted">
            tutorialを見ながらDjango,DeepLAPIを使用し翻訳アプリケーションを作りました。
            </p>
            <p>使用言語など:Django,HTML,CSS,Bootstrap,sqlite,Docker,Dockercompose,render</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skill">
      <div class="text-center">
        {/* <h1 class="title">スキル</h1> */}
        <div class="row text-center">
          <div class="col-md-4 services">
            {/* <img src={reactImage} /> */}
            {/* <h4>Pyhton</h4>
            <p>学習中です
            </p> */}
          </div>
          <div class="col-md-4 services">
            {/* <img src={jsImage} /> */}
            {/* <h4>HTML/CSS</h4>
            <p>HTML/CSS,JSの基礎がわかります</p> */}
          </div>
          <div class="col-md-4 services">
            {/* <img src={firebaseImage} /> */}
            {/* <h4>Django</h4>
            <p>Djangoがつかえます</p> */}
          </div>
        </div>
        {/* <button type="button" class="btn btn-primary">
          スキル一覧
        </button> */}
      </div>
    </section>
  </div>
  )
}

export default HomePege