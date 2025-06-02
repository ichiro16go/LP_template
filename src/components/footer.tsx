import Link from "next/link"

interface FooterProps{
    footerSections:Array<{title:string, links:Array<{label:string, href:string}>}>
}

export default function Footer({footerSections}: FooterProps) {

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ScanMate</h3>
            <p className="text-gray-600">AI-OCRサービスで業務効率化を実現</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-600">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 ScanMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
