import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Mail, Shield, Smartphone, Wrench } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Lang = "en" | "zh";

export function SupportPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(
    () =>
      lang === "en"
        ? {
            title: "Lingshot",
            intro:
              "Lingshot is an iOS app designed to make language learning faster and more intuitive with a clean, focused mobile experience.",
            contactSupport: "Contact Support",
            privacyPolicy: "Privacy Policy",
            contact: "Contact",
            contactDesc1: "Email support:",
            contactDesc2: "Response target: within 48 hours on business days.",
            compatibility: "Compatibility",
            platform: "Platform: iOS",
            system: "Recommended system: iOS 16.0 or later.",
            updated: "Latest support page update: February 26, 2026.",
            compliance: "Compliance",
            compliance1: "Dedicated privacy policy page is available.",
            compliance2: "Includes data usage, permissions, and contact channel.",
            faq: "Frequently Asked Questions",
            faqs: [
              {
                q: "How can I report a bug?",
                a: "Email a short description, screenshots, and your iOS version to support. Typical response time is within 48 hours.",
              },
              {
                q: "What devices are supported?",
                a: "Lingshot supports iPhone devices running iOS 16.0 or later for the best experience.",
              },
              {
                q: "How do I request a feature?",
                a: "Send us your use case by email. Feature requests are reviewed continuously and prioritized by impact.",
              },
            ],
          }
        : {
            title: "Lingshot",
            intro: "Lingshot 是一款 iOS 语言学习应用，提供更高效、更直观、更加专注的移动端学习体验。",
            contactSupport: "联系技术支持",
            privacyPolicy: "隐私政策",
            contact: "联系方式",
            contactDesc1: "支持邮箱：",
            contactDesc2: "工作日通常 48 小时内回复。",
            compatibility: "兼容性",
            platform: "平台：iOS",
            system: "建议系统：iOS 16.0 及以上。",
            updated: "支持页更新时间：2026 年 2 月 26 日。",
            compliance: "合规信息",
            compliance1: "已提供独立隐私政策页面。",
            compliance2: "包含数据使用、权限说明与联系渠道。",
            faq: "常见问题",
            faqs: [
              {
                q: "如何反馈 Bug？",
                a: "请发送问题描述、截图及 iOS 版本到支持邮箱，我们通常在 48 小时内回复。",
              },
              {
                q: "支持哪些设备？",
                a: "Lingshot 建议在 iOS 16.0 及以上版本的 iPhone 设备上使用。",
              },
              {
                q: "如何提交功能建议？",
                a: "请通过邮箱说明你的使用场景，我们会持续评估并按影响优先级安排。",
              },
            ],
          },
    [lang],
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(186,230,253,0.5),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(125,211,252,0.33),transparent_42%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] text-foreground">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 sm:px-8">
        <header className="animate-floatIn">
          <div className="mb-4 flex justify-end gap-2">
            <Button
              variant={lang === "en" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setLang("en")}
            >
              EN
            </Button>
            <Button
              variant={lang === "zh" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setLang("zh")}
            >
              中文
            </Button>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            {t.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-full px-6">
              <a href="mailto:jackweigogoga@gmail.com">{t.contactSupport}</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white/80 px-6">
              <Link to="privacy">
                {t.privacyPolicy}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="border-slate-200/80 bg-white/80 shadow-card backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                <Mail className="h-5 w-5 text-sky-600" />
                {t.contact}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>{t.contactDesc1}</p>
              <a className="font-medium text-slate-900" href="mailto:jackweigogoga@gmail.com">
                jackweigogoga@gmail.com
              </a>
              <p className="mt-2">{t.contactDesc2}</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-white/80 shadow-card backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                <Smartphone className="h-5 w-5 text-sky-600" />
                {t.compatibility}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>{t.platform}</p>
              <p className="mt-2">{t.system}</p>
              <p className="mt-2">{t.updated}</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 bg-white/80 shadow-card backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                <Shield className="h-5 w-5 text-sky-600" />
                {t.compliance}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>{t.compliance1}</p>
              <p className="mt-2">{t.compliance2}</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10">
          <Card className="border-slate-200/80 bg-white/90 shadow-card backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-slate-900">
                <Wrench className="h-5 w-5 text-sky-600" />
                {t.faq}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {t.faqs.map((item, index) => (
                  <div key={item.q}>
                    <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                    {index < t.faqs.length - 1 ? <Separator className="mt-5 bg-slate-200" /> : null}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  );
}
