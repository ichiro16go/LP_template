import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Zap, Shield, Star } from "lucide-react";
//componet
import Header from "@/components/header";
import Footer from "@/components/footer";
import DescriptionCard from "@/components/discriptionCard";
import AccordionComponent from "@/components/accordion";
import PlanCard from "@/components/planCard";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        title="ScanMate"
        links={[
          { label: "製品特徴", href: "#features" },
          { label: "料金・プラン", href: "#pricing" },
          { label: "導入事例", href: "#testimonials" },
          { label: "使用方法・チュートリアル", href: "#support" },
          { label: "お問い合わせ", href: "#tutorial" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            そのデータの手入力、
            <br />
            AIに任せてみませんか？
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            どんな紙の帳票でも丸ごと読み取り。
            <br />
            欲しい情報だけを表形式で抜き出せる、シンプルかつパワフルな次世代OCR。
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              無料で試す
            </Button>
            <Button size="lg" variant="outline">
              デモを見る
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Demo</h2>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">デモ画面がここに表示されます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ScanMateの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <DescriptionCard
              title="誰でも使える、シンプルな設計"
              description="書類を1ページ丸ごと読み取るため、従来のOCR製品では必須だったテンプレート登録が不要。必要なのは欲しい情報の指定だけ。"
              icon={<FileText className="h-12 w-12 text-blue-600 mb-4" />} // ここは画像に変えたい
            />
            <DescriptionCard
              title="フォーマットのバージョン変更にも柔軟に対応"
              description="AIがPDF内を探索するため、場所の指定が不要。帳票のバージョン変更も怖くありません。"
              icon={<Zap className="h-12 w-12 text-green-600 mb-4" />}
            />
            <DescriptionCard
              title="AIによるパワフルなアシスト機能"
              description="印字はもちろん、手書き文字やスタンプもAIが自動で判別。まるで人間が作業しているかのような、驚きのOCR体験を。"
              icon={<Shield className="h-12 w-12 text-purple-600 mb-4" />}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            お困りではありませんか？
          </h2>
          <div className="max-w-3xl mx-auto">
            <AccordionComponent
              accordionItems={[
                {
                  title: "大量の請求書や領収書を効率よく処理したい",
                  content:
                    "紙や画像で送られてくる大量の帳票を手入力していませんか？ScanMateならPDFの請求書をアップロードするだけで、必要な情報だけをCSVに自動抽出。", // 画像足したい
                },
                {
                  title: "書類処理に追われて、本業に集中できない",
                  content:
                    "少人数で回す業務では、帳票処理も大きな負担。ScanMateを使えば、もう、書類処理で時間を奪われる必要はありません。",
                },
                {
                  title: "商談メモや注文書のExcel転記が面倒",
                  content:
                    "手書き・PDF・FAX…バラバラな形式の注文書から、毎回必要項目を探して転記していませんか？ScanMateは、印字やスタンプ、手書き文字が混在した文書でも読み取りが可能。入力の手間を大幅に削減します。",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* OCR Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ScanMateの機能一覧
          </h2>
          <div className="text-center mb-8">
            <p className="text-gray-600">OCRで読み取りが可能な文書</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">はみだし、二重線</h3>
                <p className="text-sm text-gray-600">レイアウトに依存しない情報抽出設計で、AIがカラム名に対応する情報を推測し、自動で転記。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">手書きの文字</h3>
                <p className="text-sm text-gray-600">手書き・手書き</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">表・フォーム</h3>
                <p className="text-sm text-gray-600">表形式</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">その他の書類</h3>
                <p className="text-sm text-gray-600">各種文書</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            使用方法・チュートリアル
          </h2>
          <p className="text-center text-gray-600 mb-8">
          誰でも簡単に使える、シンプルな設計。詳しい使用方法は以下のチュートリアルをご覧ください。
          </p>
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">チュートリアル動画</h3>
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                チュートリアル動画がここに表示されます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ScanMateの使い方
          </h2>
          <div className="text-center mb-8">
            <p className="text-gray-600">簡単4ステップ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">読み取りたいPDFのアップロード</h3>
                <p className="text-sm text-gray-600">一度に複数の帳票をアップロード可能です。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">必要なカラム名を指定</h3>
                <p className="text-sm text-gray-600">帳票の項目名など、AIに参照させたい場所を指定します。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">【任意】プロンプトの設定</h3>
                <p className="text-sm text-gray-600">読み取る際に追加で特別な指示を指定できます。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 h-24 rounded mb-4"></div>
                <h3 className="font-semibold">実行結果の確認・修正</h3>
                <p className="text-sm text-gray-600">実行ボタンを押すと処理が開始。実行結果の表を見ながら、結果の確認と修正を行います。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">料金・プラン</h2>
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
              features={["月間30,000ページまで", "1枚あた6円", "30,001枚目以降は5円/枚"]}
              selected={false}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            よくあるご質問
          </h2>
          <div className="max-w-3xl mx-auto">
            <AccordionComponent
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
                    "CSVに出力したい情報のラベルの名前を指します（例：「氏名」「申込日」「合計金額」「診断理由」など）。カラム名を入力するだけで、AIが帳票の文脈を理解し、対応する情報を自動的に抽出します。",
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">導入実績</h2>
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
                <p className="text-gray-600">
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
                <p className="text-gray-600">
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
                <p className="text-gray-600">
                  患者記録のデジタル化が簡単になり、医療スタッフの負担が軽減されました。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">まずは無料トライアルから</h2>
          <p className="text-xl mb-8">お気軽にお試しください</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              無料トライアル
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-gray-100 "
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
