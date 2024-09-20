import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className=' hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode<br />
            My Portfolio WebSite</h1>
            <p className='mb-8 leading-relaxed'>現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML, CSS, JavaScript, TypeScript, PHP, SQL, ReactなどWeb全般とPythonです。自身が作ったものを公開しておりますので、ぜひ見ていってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてWebサイトやWebAppを個人として受注しています。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしています。</p>
            <p>以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactのJSやTSで実装しています。また、PYthonを使ってAIによる株価の予測サイトを構築しました。また数件の事業所のWebサイトの構築など多岐にわたります。</p>
          </div>
          {/* カードのdivタグ */}
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                        <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                        <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                        <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                      </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                  </div>
                  <div>
                    <p>ReactとJavaScriptで投稿機能つきのChatアプリ。仕様はReact, JavaScript, html, css, firebase, AWS。ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                    <a href="https://smilechat-c52ad.web.app/" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                        <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                        <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                        <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                      </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>X Clone Post App</h2>
                  </div>
                  <div>
                    <p>ReactとJavaScriptで投稿機能つきのXクローン。仕様はReact, JavaScript, html, css, firebase, AWS。ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                    <a href="https://main.d2s6imepw3j86p.amplifyapp.com/" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                        <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                        <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                        <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                      </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>月日別収支計算App</h2>
                  </div>
                  <div>
                    <p>ReactとTypeScriptとFirebaseで月日別収支計算アプリ。日々の収支の入力とreport画面で棒グラフや円グラフを実装しています。データベースはFirebaseでhostもFirebaseを使用し、デプロイしました。</p>
                    <a href="https://householdapp-e946c.web.app/" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z"
                        fill="currentColor"
                      />
                  </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>AI Finance</h2>
                  </div>
                  <div>
                    <p>AIを使った株やビットコインのデータの取得、分析、1か月後の予測アプリです。AIはscikit learnの回帰で実装しています。主にPythonでコーディングを行い、フレームワークはStreamlitを使用しています。株や暗号通貨の売買にぜひお役立てください。
                    </p>
                    <a href="https://yosshyjungle-predict-stock-app-yxbgc3.streamlit.app/" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z"
                        fill="currentColor"
                      />
                  </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>簡単メモアプリ</h2>
                  </div>
                  <div>
                  <p>ReactとJavaScriptで簡単なメモアプリを作りました。デプロイ先はAWSを使用しています。主にStateの管理を注意して実装しています。初心者にはちょうど良いコードの内容となっていて、簡単に実装できています。</p>

                    <a href="https://main.d2yn8tn876uu01.amplifyapp.com/" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z"
                        fill="currentColor"
                      />
                  </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>簡単クイズアプリ</h2>
                  </div>
                  <div>
                  <p>ReactとJavaScriptで簡単なクイズアプリを作りました。デプロイ先はAWSを使用しています。主にStateの管理とレンダリングの管理を注意して実装しています。初心者にはちょうど良いコードの内容となっています。</p>

                    <a href="https://main.d2yn8tn876uu01.amplifyapp.com/" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z"
                        fill="currentColor"
                      />
                  </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>クイズミリオネア</h2>
                  </div>
                  <div>
                  <p>ReactとJavaScriptでクイズミリオネアを作りました。クイズの内容は3つしか入っていませんが、今後追加していこうと思っています。尚、問題はランダムではなくいつも同じなので面白くないかもしれません。</p>

                    <a href="https://main.d27zkonzal9foi.amplifyapp.com/" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z"
                        fill="currentColor"
                      />
                  </svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>AI 占い</h2>
                  </div>
                  <div>
                    <p>AIを使った占いアプリです。素材はゲッターズ飯田さんのものを使わせてもらっています。自身の占いのみならず、気になるあの人との相性も占えます。尚、フレームワークはStreamlitを使用しています。
                    </p>
                    <a href="https://share.streamlit.io/yosshyjungle/uranai/app.py" className='mt-3 text-green-500 items-center' target="_blank">もっと見る → </a>
                  </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor" /><path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor" /><path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor" /><path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor" /></svg>
                    </div>
                      <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Site Dev</h2>
                  </div>
                  <div>
                    <p>中小企業のWebサイト構築を数件受注しています。商社や税理士事務所、業界団体等多岐にわたります。それぞれの案件は、綿密にヒアリングを行い、クライアントが納得するまで修正を繰り返します。自社サーバーを使用することで安価に抑えています。</p>
                    <a href="https://tamasen.org" className='mt-3 text-green-500 items-center' target='_blank'>もっと見る → </a>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          {/* left side */}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" alt="" className='rounded'/>
          </div>
          {/* right side */}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
            <div className='w-full'>
              <h2>HTML/CSS</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"60%"}}>60%</div>
              </div>
              <h2>Python</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{width:"80%"}}>80%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default App
