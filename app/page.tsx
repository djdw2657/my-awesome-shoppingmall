import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-12">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight text-foreground">ATELIER</div>
            <nav className="hidden items-center gap-8 md:flex">
              <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                회사소개
              </Link>
              <Link href="#values" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                핵심가치
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                문의하기
              </Link>
              <Button size="sm" className="ml-4">
                쇼핑하기
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              스타일과 품질이 만나는
              <br />
              <span className="font-medium">프리미엄 패션</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              ATELIER는 현대적인 감각과 전통적인 장인정신을 결합하여 특별한 패션 경험을 선사합니다.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                브랜드 스토리 보기
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                컬렉션 둘러보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Feature */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
          <div className="aspect-[16/9] overflow-hidden bg-secondary">
            <img src="/elegant-fashion-atelier-studio-interior.jpg" alt="ATELIER Studio" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
                우리의 이야기
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  ATELIER는 2015년, 패션을 사랑하는 디자이너들이 모여 시작한 프리미엄 패션 브랜드입니다. 우리는 단순히
                  옷을 만드는 것을 넘어, 착용하는 이의 개성과 라이프스타일을 표현하는 작품을 창조합니다.
                </p>
                <p>
                  최고급 원단 선택부터 섬세한 봉제까지, 모든 과정에서 장인정신을 담아냅니다. 지속 가능한 패션을
                  지향하며, 환경과 사회적 책임을 다하는 브랜드로 성장하고 있습니다.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src="/fashion-designer-sketching-atelier.jpg" alt="Designer at work" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="border-y border-border bg-muted/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">핵심 가치</h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              우리가 추구하는 가치는 모든 제품과 서비스에 녹아있습니다
            </p>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full border border-border bg-background">
                <span className="font-serif text-2xl font-medium text-foreground">1</span>
              </div>
              <h3 className="mb-4 font-serif text-2xl font-medium text-foreground">장인정신</h3>
              <p className="text-balance leading-relaxed text-muted-foreground">
                숙련된 장인들의 손길로 완성되는 모든 제품은 디테일에 대한 집착과 완벽을 향한 열정을 담고 있습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full border border-border bg-background">
                <span className="font-serif text-2xl font-medium text-foreground">2</span>
              </div>
              <h3 className="mb-4 font-serif text-2xl font-medium text-foreground">지속가능성</h3>
              <p className="text-balance leading-relaxed text-muted-foreground">
                친환경 소재와 윤리적 생산 프로세스를 통해 패션 산업의 긍정적인 변화를 이끌어갑니다.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full border border-border bg-background">
                <span className="font-serif text-2xl font-medium text-foreground">3</span>
              </div>
              <h3 className="mb-4 font-serif text-2xl font-medium text-foreground">혁신</h3>
              <p className="text-balance leading-relaxed text-muted-foreground">
                전통과 현대의 조화를 통해 시대를 초월하는 디자인과 새로운 패션 트렌드를 창조합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <img src="/premium-fashion-clothing-detail.jpg" alt="Fashion detail" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-secondary sm:mt-12">
                  <img src="/luxury-fabric-texture-close-up.jpg" alt="Fabric texture" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">우리의 비전</h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  ATELIER는 글로벌 패션 시장에서 한국의 우수한 디자인과 품질을 알리는 선도적인 브랜드가 되고자 합니다.
                </p>
                <p>
                  고객 한 분 한 분의 개성을 존중하며, 패션을 통해 자신감과 아름다움을 표현할 수 있도록 돕는 것이 우리의
                  목표입니다.
                </p>
                <p>
                  앞으로도 지속 가능한 패션을 실천하고, 혁신적인 디자인으로 패션 업계에 새로운 기준을 제시하겠습니다.
                </p>
              </div>
              <Button size="lg" className="mt-8 group">
                채용 정보 보기
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-serif text-5xl font-light text-foreground md:text-6xl">2015</div>
              <div className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">설립 연도</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-light text-foreground md:text-6xl">50+</div>
              <div className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">직원 수</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-light text-foreground md:text-6xl">10K+</div>
              <div className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">고객</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-light text-foreground md:text-6xl">15+</div>
              <div className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">매장</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
            함께 성장할 파트너를 찾습니다
          </h2>
          <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
            비즈니스 제휴, 투자 문의, 또는 채용 관련 문의사항이 있으시면 언제든지 연락 주시기 바랍니다.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group">
              문의하기
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              카탈로그 다운로드
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="text-xl font-semibold text-foreground">ATELIER</div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                스타일과 품질을 담은 프리미엄 패션 브랜드. 지속 가능한 패션을 통해 더 나은 미래를 만들어갑니다.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">회사</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    채용정보
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    파트너십
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">고객지원</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    문의하기
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    매장찾기
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    개인정보처리방침
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2025 ATELIER. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
