import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Zap, Shield, Star } from "lucide-react";
import { AlertCircle, Clock, ClipboardList } from "lucide-react";

//componet
import Header from "@/components/header";
import Footer from "@/components/footer";
import DescriptionCard from "@/components/discriptionCard";
import AccordionComponent from "@/components/accordion";
import PlanCard from "@/components/planCard";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-green-50 p-8">
      {/* Header */}
      <Header
        links={[
          { label: "製品特徴", href: "#features" },
          { label: "料金・プラン", href: "#pricing" },
          { label: "導入事例", href: "#testimonials" },
          { label: "使用方法・チュートリアル", href: "#support" },
          { label: "お問い合わせ", href: "#tutorial" },
        ]}
      />
      
      {/* Hero Section */}
      <section className="py-60 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-grow h-px bg-[#00AFC4]"></div>
            <h1 className="mx-6 text-6xl font-extrabold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">
              そのデータの手入力、<br />AIに任せてみませんか？
            </h1>
            <div className="flex-grow h-px bg-blue-800"></div>
          </div>
          <p className="text-2xl font-semibold text-gray-600 mb-8 max-w-2xl mx-auto">
            どんな紙の帳票でも丸ごと読み取り。
            <br />
            <span className="flex whitespace-nowrap justify-center mb-6">
              欲しい情報だけを表形式で抜き出せる、シンプルかつパワフルな次世代OCR。
            </span>
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-800 text-white hover:bg-blue-700">
              無料で試す
            </Button>
            <Button size="lg" variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50">
              デモを見る
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-gradient-to-b from-white via-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold font-semibold mb-4">Demo</h2>
            <div className="bg-gray-100 h-100 rounded-lg flex items-center justify-center">
              <p className="text-xl text-gray-500">デモ画面がここに表示されます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50 " id="features">
        <div className="container px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
          <h2 className="text-3xl font-bold font-semibold text-blue-800 text-center mx-4 whitespace-nowrap">
            ScanMateの特徴
          </h2>
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
        </div>
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2">
                <img
                  src="/images/feature-format.svg"
                  alt="シンプルな設計"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-800 mb-2">
                    誰でも使える、シンプルな設計
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    書類を1ページ丸ごと読み取るため、<br />従来のOCR製品では必須だったテンプレート登録が不要。<br />必要なのは欲しい情報の指定だけ。
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2 md:order-2">
                <img
                  src="/images/feature-security.svg"
                  alt="AWSセキュア環境"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:order-1 flex items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-800 mb-2">
                    AWSセキュア環境
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    データはAWS上で暗号化保管。<br />堅牢なセキュリティで安心してご利用いただけます。
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2">
                <img
                  src="/images/feature-easy.svg"
                  alt="簡単操作"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-800 mb-2">
                    AIによるパワフルなアシスト機能
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    印字はもちろん、手書き文字やスタンプもAIが自動で判別。<br />まるで人間が作業しているかのような、驚きのOCR体験を。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issue Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl mb-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
          <h2 className="text-3xl font-bold font-semibold text-blue-800 text-center mx-4 whitespace-nowrap">
            お困りではありませんか？
          </h2>
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
        </div>
          <ul className="space-y-8 max-w-3xl mx-auto">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <AlertCircle className="h-6 w-6 text-blue-800" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  大量の請求書や領収書を効率よく処理したい
                </h3>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  紙や画像で送られてくる帳票を手入力で処理していませんか？<br />ScanMateならPDFをアップロードするだけで必要な情報を自動的にCSV化します。
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Clock className="h-6 w-6 text-blue-800" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  書類処理に追われて、本業に集中できない
                </h3>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  少人数のバックオフィス業務では帳票処理が大きな負担。<br />ScanMateを導入すれば面倒な作業から解放され、本来の業務に専念できます。
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <ClipboardList className="h-6 w-6 text-blue-800" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  商談メモや注文書の転記作業が面倒
                </h3>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  手書き・PDF・FAXなど形式がバラバラな書類から必要項目を探すのは大変。<br />ScanMateは印字も手書きも正確に抽出し、転記作業を大幅に削減します。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-16 bg-gradient-to-b from-white via-green-50 to-white" id="procedure">
        <div className="container mx-auto px-4 bg-gradient-to-b from-white via-green-50 to-white">
          <h2 className="text-4xl font-bold font-semibold text-blue-800 text-center mb-12">
            ScanMateの使い方
          </h2>

          {/* 横並び：幅が狭くなると縦並びになるflex設定 */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg p-6 w-64 h-80">
              {/* 番号とアイコン */}
              <div className="flex flex-col items-center mb-4">
                <span className="text-xl font-bold text-blue-800 mb-2">1</span>
                {/* 例：クラウドアップロードのSVGアイコン */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 15a4 4 0 000 8h12a4 4 0 000-8M7 15V7a4 4 0 018 0v8m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">PDFをアップロード</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                帳票のアップロードを<br />行います。一枚ずつも<br />複数枚も可能です。
              </p>
            </div>

            {/* 矢印 */}
            <div className="hidden md:block mx-4">
              <span className="text-gray-400 text-2xl">→</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg p-6 w-64 h-80 mt-8 md:mt-0">
              <div className="flex flex-col items-center mb-4">
                <span className="text-xl font-bold text-blue-800 mb-2">2</span>
                {/* 例：タグ（カラム指定）のSVGアイコン */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M5 3v18h14V3H5zm5 2h4v2h-4V5zm0 4h4v2h-4V9zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">カラム名を指定</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                帳票の項目名<br />（例：氏名、合計金額）<br />を入力します。
              </p>
            </div>

            {/* 矢印 */}
            <div className="hidden md:block mx-4">
              <span className="text-gray-400 text-2xl">→</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg p-6 w-64 h-80 mt-8 md:mt-0">
              <div className="flex flex-col items-center mb-4">
                <span className="text-xl font-bold text-blue-800 mb-2">3</span>
                {/* 例：歯車アイコン（プロンプト設定） */}
                <svg
                  xmlns="prompt_engineering.png"
                  className="h-10 w-10 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8c-1.105 0-2 .895-2 2 0 .91.586 1.674 1.396 1.905l.204.045v3.05c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-3.05l.204-.045A2 2 0 0014 10c0-1.105-.895-2-2-2zm0-7c-1.105 0-2 .895-2 2v.09a8.002 8.002 0 00-3.536 1.934l-.064.064L3.464 4.646a2 2 0 00-2.828 2.828l1.444 1.444a7.956 7.956 0 001.934 3.536H4a2 2 0 100 4h.09a8.002 8.002 0 001.934 3.536l.064.064L5.464 20.54a2 2 0 002.828 2.828l1.444-1.444a7.956 7.956 0 003.536-1.934V20a2 2 0 004 0v-.09a8.002 8.002 0 003.536-1.934l.064-.064 1.444 1.444a2 2 0 002.828-2.828l-1.444-1.444a7.956 7.956 0 00-1.934-3.536H20a2 2 0 100-4h-.09a8.002 8.002 0 00-1.934-3.536l-.064-.064 1.444-1.444a2 2 0 00-2.828-2.828l-1.444 1.444a7.956 7.956 0 00-3.536 1.934V4a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">プロンプトを設定</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                必要に応じて<br />AIへの追加の指示を<br />入力します。
              </p>
            </div>

            {/* 矢印 */}
            <div className="hidden md:block mx-4">
              <span className="text-gray-400 text-2xl">→</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg p-6 w-64 h-80 mt-8 md:mt-0">
              <div className="flex flex-col items-center mb-4">
                <span className="text-xl font-bold text-blue-800 mb-2">4</span>
                {/* 例：チェックアイコン（結果確認） */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">結果の確認・修正</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                実行後、出力された表を<br />見ながら、確認と修正を<br />行ってください。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* OCR Capabilities */}
      <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
          <h2 className="text-3xl font-bold font-semibold text-blue-800 text-center mx-4 whitespace-nowrap">
            ScanMateの機能一覧
          </h2>
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
        </div>
          <div className="text-center mb-8">
            <p className="text-2xl mx-6 font-semibold text-gray-800">読み取りが可能な文字</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">印字されたテキスト</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">手書き文字 <br /> (鉛筆・カラーペンにも対応)</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">会社印・スタンプ</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">二重線での訂正・枠線からのはみ出し</h3>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12 mb-8">
            <p className="text-2xl mb-6 font-semibold text-gray-800">その他の機能</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">カラム名指定</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">プロンプト指示追加</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">画面上での確認・修正</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">CSVエクスポート</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Methods */}
      <section className="py-16 bg-white" id="support">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
          <h2 className="text-3xl font-bold font-semibold text-blue-800 text-center mx-4 whitespace-nowrap">
            使用方法・チュートリアル
          </h2>
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
        </div>
          <p className="text-center text-lg font-semibold text-gray-800 mb-8">
            誰でも簡単に使える、シンプルな設計。詳しい使用方法は以下のチュートリアルをご覧ください。
          </p>
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">チュートリアル動画</h3>
            <div className="bg-gray-100 h-100 w-full rounded-lg flex items-center justify-center">
              <p className="text-lg text-gray-500">
                チュートリアル動画がここに表示されます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="pricing">
        <div className="container mx-auto px-4 bg-gradient-to-b from-white to-blue-50">
            <h2 className="text-4xl font-bold font-semibold text-blue-800 text-center mb-12">料金・プラン</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PlanCard
              title="Light Plan"
              description="個人・小規模利用向け"
              price="30,000"
              features={["月間1,800ページまで", "1枚あたり16円", "1,801枚目以降は15円/枚"]}
              selected={false}
            />
            <PlanCard
              title="Standard Plan"
              description="中小企業向け"
              price="100,000"
              features={["月間10,000ページまで", "1枚あたり10円", "10,001枚目以降は15円/枚"]}
              selected={true}
            />
            <PlanCard
              title="Premium Plan"
              description="大企業向け"
              price="200,000"
              features={["月間30,000ページまで", "1枚あたり6円", "30,001枚目以降は5円/枚"]}
              selected={false}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-blue-50" id="faq">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
          <h2 className="text-3xl font-bold font-semibold text-blue-800 text-center mx-4 whitespace-nowrap">
            よくあるご質問
          </h2>
          <div className="flex-grow h-px bg-[#006F95] max-w-[120px] mx-2"></div>
        </div>
          <div className="text-6xl font-semibold max-w-3xl mx-auto">
            <AccordionComponent
              className="text-2xl font-semibold"
              accordionItems={[
                {
                  title: "どのような形式の帳票に対応していますか？",
                  content:
                    "PDF形式であれば、請求書や申込書、アンケート調査票、名刺など幅広い書類に対応しています。同一内容でレイアウトが多少異なる帳票にも柔軟に対応します。",
                },
                {
                  title: "手書きの文字は読み取れますか？",
                  content:
                    "手書き文字も認識可能ですが、印刷されたテキストにてより高い精度を発揮します。特に筆記体や崩れた文字は誤認識の可能性があるため、重要な項目については手書きではなく印刷入力を推奨しています。",
                },
                {
                  title: "指定する「カラム名」とは何ですか？",
                  content:
                    "CSVに出力したい情報のラベルの名前を指します（例:「氏名」「申込日」「合計金額」「診断理由」など）。カラム名を入力するだけで、AIが帳票の文脈を理解し、対応する情報を自動的に抽出します。",
                },
                {
                  title: "セキュリティや個人情報の取り扱いは大丈夫ですか？",
                  content:
                    "はい、安心してご利用いただけます。すべてのファイルはSSL通信で暗号化されます。また、処理するデータは大規模言語モデルの学習に一切使用されません。",
                },
                {
                  title: "誤認識や抽出ミスがあった場合はどうなりますか？",
                  content:
                    "抽出結果はCSV形式で確認・修正可能なため、簡単に再編集できます。また、フィードバックをいただいてモデルの抽出精度を改善する機能も、今後搭載予定です。",
                },
                {
                  title: "大量の帳票を一括処理できますか？",
                  content:
                    "はい、複数ファイルの一括アップロード・一括処理にも対応しています。",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-semibold text-blue-800 text-center mb-12">導入実績</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarFallback>田中</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">田中様</p>
                    <p className="text-sm text-gray-600">製造業</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                    <p className="text-lg font-semibold text-gray-600">
                      手書きの検査記録の入力作業が大幅に削減されました。精度も高く、非常に満足しています。
                    </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarFallback>佐藤</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">佐藤様</p>
                    <p className="text-sm text-gray-600">小売業</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                    <p className="text-lg font-semibold text-gray-600">
                      レシートや伝票の処理が自動化され、経理業務の効率が大幅に向上しました。
                    </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarFallback>鈴木</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">鈴木様</p>
                    <p className="text-sm text-gray-600">医療機関</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                    <p className="text-lg font-semibold text-gray-600">
                      患者記録のデジタル化が簡単になり、医療スタッフの負担が軽減されました。
                    </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-semibold mb-4">まずは無料トライアルから</h2>
          <p className="text-2xl font-semibold mb-8">お気軽にお試しください</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              無料トライアル
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-800 hover:bg-blue-50"
            >
              資料請求
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        footerSections={[
          {
            title: "製品",
            links: [
              { label: "機能", href: "#" },
              { label: "料金", href: "#" },
              { label: "API", href: "#" },
            ],
          },
          {
            title: "サポート",
            links: [
              { label: "ヘルプセンター", href: "#" },
              { label: "チュートリアル", href: "#" },
              { label: "お問い合わせ", href: "#" },
            ],
          },
          {
            title: "会社情報",
            links: [
              { label: "会社概要", href: "#" },
              { label: "プライバシーポリシー", href: "#" },
              { label: "利用規約", href: "#" },
            ],
          },
        ]}
      />
    </div>
  );
}