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
          { label: "機能", href: "#features" },
          { label: "料金", href: "#pricing" },
          { label: "事例", href: "#testimonials" },
          { label: "サポート", href: "#support" },
          { label: "チュートリアル", href: "#tutorial" },
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
            手書きの文字や印刷された文字を瞬時にデジタル化。
            <br />
            面倒な手入力作業を大幅に削減し、ビジネスプロセスの効率化を実現します。
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              無料で試す
            </Button>
            <Button size="lg" variant="outline">
              機能を見る
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">デモ画面/画像</h2>
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
              title="高精度なOCR技術"
              description="最新のAI技術により、手書き文字や印刷文字を高精度で認識。複雑なレイアウトにも対応します。"
              icon={<FileText className="h-12 w-12 text-blue-600 mb-4" />}
            />
            <DescriptionCard
              title="高速処理"
              description="大量の文書も瞬時に処理。従来の手入力作業と比べて作業時間を大幅に短縮できます。"
              icon={<Zap className="h-12 w-12 text-green-600 mb-4" />}
            />
            <DescriptionCard
              title="セキュリティ対応"
              description="企業レベルのセキュリティ基準に準拠。機密文書も安心してお任せいただけます。"
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
                  title: "手書きの文字をデジタル化したい",
                  content:
                    "ScanMateは手書きの文字も高精度で認識します。手書きのメモや書類も簡単にデジタル化できます。",
                },
                {
                  title: "大量の文書を効率よく処理したい",
                  content:
                    "高速な処理能力により、大量の文書も瞬時にデジタル化。業務効率が大幅に向上します。",
                },
                {
                  title: "セキュリティが心配",
                  content:
                    "企業レベルのセキュリティ基準に準拠しており、機密文書も安心してご利用いただけます。",
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
                <h3 className="font-semibold">印刷された文字</h3>
                <p className="text-sm text-gray-600">活字</p>
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
            簡単な操作でAI-OCRをご利用いただけます。詳しい使用方法は以下のチュートリアルをご覧ください。
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

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">料金・プラン</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PlanCard
              title="Light Plan"
              description="個人・小規模利用向け"
              price="0"
              features={["月間100ページまで", "基本OCR機能", "1,800円"]}
              selected={false}
            />
            <PlanCard
              title="Standard Plan"
              description="中小企業向け"
              price="100,000"
              features={["月間10,000ページまで", "高精度OCR機能", "10,000円"]}
              selected={true}
            />
            <PlanCard
              title="Premium Plan"
              description="大企業向け"
              price="200,000"
              features={["無制限ページ", "最高精度OCR機能", "30,000円"]}
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
                  title: "どのような書類を読み取ることができますか？",
                  content:
                    "印刷された文書、手書きの文書、表やフォーム、名刺、レシートなど、様々な種類の文書に対応しています。",
                },
                {
                  title: "無料で利用できる期間はありますか？",
                  content:
                    "はい、Light Planでは月間100ページまで無料でご利用いただけます。また、14日間の無料トライアルもご用意しています。",
                },
                {
                  title: "読み取り精度はどの程度ですか？",
                  content:
                    "印刷された文字では99%以上、手書き文字でも95%以上の高い精度を実現しています。",
                },
                {
                  title: "どのような形式で出力されますか？",
                  content:
                    "テキスト、CSV、Excel、PDF、JSONなど、様々な形式での出力に対応しています。",
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
