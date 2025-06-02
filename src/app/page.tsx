import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Check, FileText, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="font-bold text-xl">ScanMate</div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#" className="text-sm hover:text-gray-600">
                機能
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                料金
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                事例
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                サポート
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                チュートリアル
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                お問い合わせ
              </Link>
            </nav>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800">ログイン</Button>
        </div>
      </header>

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
          <h2 className="text-3xl font-bold text-center mb-12">ScanMateの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>高精度なOCR技術</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  最新のAI技術により、手書き文字や印刷文字を高精度で認識。複雑なレイアウトにも対応します。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>高速処理</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  大量の文書も瞬時に処理。従来の手入力作業と比べて作業時間を大幅に短縮できます。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>セキュリティ対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  企業レベルのセキュリティ基準に準拠。機密文書も安心してお任せいただけます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お困りではありませんか？</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>手書きの文字も認識できますか？</AccordionTrigger>
                <AccordionContent>
                  はい、ScanMateは手書き文字の認識にも対応しています。日本語の手書き文字を高精度で認識し、デジタル化することができます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>どのような形式で出力されますか？</AccordionTrigger>
                <AccordionContent>
                  テキストファイル、CSV、Excel、PDFなど、様々な形式での出力に対応しています。用途に応じて最適な形式をお選びいただけます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>セキュリティは大丈夫ですか？</AccordionTrigger>
                <AccordionContent>
                  はい、企業レベルのセキュリティ基準に準拠しており、データの暗号化や安全な処理環境を提供しています。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* OCR Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ScanMateの機能一覧</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">使用方法・チュートリアル</h2>
          <p className="text-center text-gray-600 mb-8">
            簡単な操作でAI-OCRをご利用いただけます。詳しい使用方法は以下のチュートリアルをご覧ください。
          </p>
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">チュートリアル動画</h3>
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">チュートリアル動画がここに表示されます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">料金・プラン</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Light Plan</CardTitle>
                <CardDescription>個人・小規模利用向け</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  ¥0<span className="text-sm font-normal">/月</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    月間100ページまで
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    基本OCR機能
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    1,800円
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  無料で始める
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <Badge className="w-fit mb-2">人気</Badge>
                <CardTitle>Standard Plan</CardTitle>
                <CardDescription>中小企業向け</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  ¥100,000<span className="text-sm font-normal">/月</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    月間10,000ページまで
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    高精度OCR機能
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    10,000円
                  </li>
                </ul>
                <Button className="w-full">プランを選択</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Premium Plan</CardTitle>
                <CardDescription>大企業向け</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  ¥200,000<span className="text-sm font-normal">/月</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    無制限ページ
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    最高精度OCR機能
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    30,000円
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  お問い合わせ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくあるご質問</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>どのような書類を読み取ることができますか？</AccordionTrigger>
                <AccordionContent>
                  印刷された文書、手書きの文書、表やフォーム、名刺、レシートなど、様々な種類の文書に対応しています。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>無料で利用できる期間はありますか？</AccordionTrigger>
                <AccordionContent>
                  はい、Light
                  Planでは月間100ページまで無料でご利用いただけます。また、14日間の無料トライアルもご用意しています。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>読み取り精度はどの程度ですか？</AccordionTrigger>
                <AccordionContent>
                  印刷された文字では99%以上、手書き文字でも95%以上の高い精度を実現しています。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>どのような形式で出力されますか？</AccordionTrigger>
                <AccordionContent>
                  テキスト、CSV、Excel、PDF、JSONなど、様々な形式での出力に対応しています。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
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
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">レシートや伝票の処理が自動化され、経理業務の効率が大幅に向上しました。</p>
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
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">患者記録のデジタル化が簡単になり、医療スタッフの負担が軽減されました。</p>
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
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              資料請求
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ScanMate</h3>
              <p className="text-gray-600">AI-OCRサービスで業務効率化を実現</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">製品</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#">機能</Link>
                </li>
                <li>
                  <Link href="#">料金</Link>
                </li>
                <li>
                  <Link href="#">API</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#">ヘルプセンター</Link>
                </li>
                <li>
                  <Link href="#">チュートリアル</Link>
                </li>
                <li>
                  <Link href="#">お問い合わせ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#">会社概要</Link>
                </li>
                <li>
                  <Link href="#">プライバシーポリシー</Link>
                </li>
                <li>
                  <Link href="#">利用規約</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 ScanMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
