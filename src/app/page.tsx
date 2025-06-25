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
    <div className="min-h-screen bg-blue-50 p-8">
      {/* Header */}
      <Header
        links={[
          { label: "製品特徴", href: "#features" },
          { label: "料金・プラン", href: "#pricing" },
          { label: "機能一覧", href: "#testimonials" },
          { label: "チュートリアル", href: "#support" },
          { label: "お問い合わせ", href: "#tutorial" },
        ]}
      />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
        <div
          className="w-[100%] h-full bg-cover bg-center translate-x-[-5%] brightness-90 mt-10"
          style={{ backgroundImage: "url('/hero_section_1.png')" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, transparent 80%, #EFF6FF 100%),
              linear-gradient(to top, #EFF6FF 0%, transparent 20%, transparent 70%, #EFF6FF 100%),
              linear-gradient(to bottom, #EFF6FF 0%, transparent 20%, transparent 70%, #EFF6FF 100%),
              linear-gradient(to left, #EFF6FF 0%, transparent 50%, transparent 80%, #EFF6FF 100%),
              linear-gradient(to right, #EFF6FF 0%, transparent 10%, transparent 50%, #EFF6FF 100%)
            `,
          }}
        ></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-end pr-70 mt-10">
        <div className="max-w-xl text-right">
          <h1 className="flex text-5xl font-extrabold drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] leading-snug bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            そのデータの手入力、<br />AIに任せてみませんか？
          </h1>
          <p className="text-2xl font-semibold text-gray-800 mt-6 mb-10 drop-shadow-md">
          どんな紙の帳票でも丸ごと読み取り。<br />
          欲しい情報だけを表形式で抜き出せる、<br />シンプルかつパワフルな次世代OCR。
          </p>
          <div className="flex gap-4 justify-end pr-24">
            <Button size="lg" className="bg-black text-white hover:bg-gray-700">
              無料で試す
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-800 hover:bg-gray-200"
            >
              デモを見る
            </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Demo Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center items-center justify-center">
          <div className="bg-white h-120 mx-70 rounded-lg flex items-center justify-center">
            <p className="text-xl text-gray-500">デモ画面がここに表示されます</p>
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
                  src="/how_to_work.png"
                  alt="シンプルな設計"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
              <div className="md:w-1/2 p-8 flex items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-800 mb-2">
                    誰でも使える、シンプルな設計
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    書類を1ページ丸ごと読み取るため、従来のOCR製品では必須だったテンプレート登録が不要。必要なのは欲しい情報の指定だけ。
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2 md:order-2">
                <img
                  src="/security_icon.png"
                  alt="AWSセキュア環境"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
              <div className="md:w-1/2 p-8 md:order-1 flex items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-800 mb-2">
                    AWSセキュア環境
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    データはAWS上で暗号化保管。堅牢なセキュリティで安心してご利用いただけます。
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2">
                <img
                  src="/AI_processing.png"
                  alt="簡単操作"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
              <div className="md:w-1/2 p-8 flex items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-800 mb-2">
                    AIによるパワフルなアシスト機能
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    印字はもちろん、手書き文字やスタンプもAIが自動で判別。まるで人間が作業しているかのような、驚きのOCR体験を。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issue Section */}
      <section className="py-16 bg-blue-50">
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
      <section className="py-16 bg-blue-50" id="procedure">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-semibold text-blue-800 text-center mb-12">
            ScanMateの使い方
          </h2>

          {/* 横並び：幅が狭くなると縦並びになるflex設定 */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 w-64 h-80">
              {/* 番号とアイコン */}
              <div className="flex flex-col items-center mb-4">
                <span className="text-2xl font-bold text-blue-800 mb-2">1</span>
                {/* クラウドアップロードPNGアイコン */}
                <img src="/1_upload_icon.png" alt="クラウドアップロードアイコン" className="h-20 w-20 ml-4" />
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800">PDFをアップロード</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                帳票のアップロードを行います。一枚ずつも、複数枚も可能です。
              </p>
            </div>

            {/* 矢印 */}
            <div className="hidden md:block mx-4">
              <span className="text-gray-400 text-2xl">→</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 w-64 h-80 mt-8 md:mt-0">
              <div className="flex flex-col items-center mb-4">
                <span className="text-2xl font-bold text-blue-800 mb-2">2</span>
                {/* タグPNGアイコン */}
                <img src="/2_column_icon.png" alt="タグアイコン" className="h-20 w-20 ml-4" />
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800">カラム名を指定</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                帳票の項目名（例：氏名、合計金額）を入力します。
              </p>
            </div>

            {/* 矢印 */}
            <div className="hidden md:block mx-4">
              <span className="text-gray-400 text-2xl">→</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 w-64 h-80 mt-8 md:mt-0">
              <div className="flex flex-col items-center mb-4">
                <span className="text-2xl font-bold text-blue-800 mb-2">3</span>
                {/* 歯車PNGアイコン */}
                <img src="/3_prompt_icon.png" alt="歯車アイコン" className="h-20 w-20" />
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800">プロンプトを設定</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                必要に応じてAIへの追加の指示を入力します。
              </p>
            </div>

            {/* 矢印 */}
            <div className="hidden md:block mx-4">
              <span className="text-gray-400 text-2xl">→</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 w-64 h-80 mt-8 md:mt-0">
              <div className="flex flex-col items-center mb-4">
                <span className="text-2xl font-bold text-blue-800 mb-2">4</span>
                {/* チェックPNGアイコン */}
                <img src="/4_check_icon.png" alt="チェックアイコン" className="h-20 w-20" />
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800">結果の確認・修正</h3>
              <p className="text-lg font-semibold text-gray-600 text-center mt-2">
                実行後、出力された表を見ながら、確認と修正を行ってください。
              </p>
            </div>
          </div>  
        </div>
      </section>


      {/* OCR Capabilities */}
      <section className="py-16 bg-blue-50">
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
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <img src="/印字.png" alt="印字アイコン" className="h-40 w-auto"></img>
                <h3 className="text-lg font-semibold">印字されたテキスト</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center items-center justify-center text-center">
                <img src="/手書き文字.png" alt="手書き文字" className="h-40 w-auto"></img>
                <h3 className="text-lg font-semibold">手書き文字 <br /> (鉛筆・カラーペンにも対応)</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <img src="/スタンプ.png" alt="スタンプ" className="h-40 w-50 mb-4"></img>
                <h3 className="text-lg font-semibold">会社印・スタンプ</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <img src="/二重線.png" alt="二重線" className="h-40 w-50 mb-4" />
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
      <section className="py-16 bg-blue-50" id="support">
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
      <section className="py-16 bg-blue-50" id="pricing">
        <div className="container mx-auto px-4">
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
              className="text-2xl font-semibold bg-white p-8 rounded-lg"
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
                    "CSVに出力したい情報のラベルの名前を指します（例:「氏名」「申込日」「合計金額」「診断理由」）。カラム名を入力するだけで、AIが帳票の文脈を理解し、対応する情報を自動的に抽出します。",
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

      {/* Specifications Section */}
      <section className="py-16 bg-blue-50" id="specifications">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-4xl font-bold font-semibold text-blue-800 text-center">
              製品仕様
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-left text-sm">
              <thead className="bg-white font-semibold">
                <tr>
                  <th className="px-6 py-3 border-b">項目</th>
                  <th className="px-6 py-3 border-b">推奨スペック</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-b font-semibold">入力画像仕様</td>
                  <td className="px-6 py-4 border-b">PDF（1ファイル最大○MB、推奨○dpi）</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-semibold">出力ファイル形式</td>
                  <td className="px-6 py-4 border-b">CSV（UTF-8形式）、JSON（オプション）</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-semibold">推奨ブラウザ</td>
                  <td className="px-6 py-4 border-b">Google Chrome、Microsoft Edge</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-semibold">対応OS</td>
                  <td className="px-6 py-4 border-b">Windows ○ 以降、macOS ○ 以降</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-semibold">動作環境</td>
                  <td className="px-6 py-4 border-b">インターネット接続、JavaScript有効化</td>
                </tr>
              </tbody>
            </table>
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

      {/* Testimonials
      <section className="py-16 bg-blue-50" id="testimonials">
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
      </section> */}

      {/* Footer */}
      <Footer
        footerSections={[
          {
            title: "製品",
            links: [
              { label: "製品特徴", href: "#" },
              { label: "料金・プラン", href: "#" },
              { label: "製品仕様", href: "#" },
            ],
          },
          {
            title: "サポート",
            links: [
              { label: "チュートリアル", href: "#" },
              { label: "よくあるご質問", href: "#" },
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