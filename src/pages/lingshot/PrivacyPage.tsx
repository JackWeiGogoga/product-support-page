import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Lang = "en" | "zh";

export function PrivacyPage() {
  const { product = "lingshot" } = useParams();
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(
    () =>
      lang === "en"
        ? {
            title: "Privacy Policy",
            updated: "Last updated: February 26, 2026",
            intro: "This policy explains how Lingshot handles personal information for iOS users.",
            back: "Back to Support",
            items: [
              {
                title: "1. Data We May Process",
                body: "We may process information needed to provide core app features, such as user-provided content and usage diagnostics.",
              },
              {
                title: "2. Permissions",
                body: "Depending on feature usage, the app may request system permissions such as Camera, Photos, and Microphone. You can revoke permissions in iOS Settings at any time.",
              },
              {
                title: "3. Purpose of Use",
                body: "Data is used to deliver product functionality, improve app stability, and provide support responses.",
              },
              {
                title: "4. Sharing and Disclosure",
                body: "We do not sell personal information. Data may be shared only when required by law or to operate essential service providers under confidentiality obligations.",
              },
              {
                title: "5. Data Retention",
                body: "Data is retained only for as long as necessary for service provision, legal obligations, or dispute resolution.",
              },
              {
                title: "6. Your Rights",
                body: "You may contact us to request access, correction, or deletion of applicable personal data.",
              },
              {
                title: "7. Children",
                body: "Lingshot is not intended for children under 13 without verified parental consent where required by law.",
              },
              {
                title: "8. Contact",
                body: "Privacy and support requests:",
              },
              {
                title: "9. Policy Changes",
                body: "Material updates will be reflected on this page with a revised \"Last updated\" date.",
              },
            ],
          }
        : {
            title: "隐私政策",
            updated: "最后更新：2026 年 2 月 26 日",
            intro: "本政策说明 Lingshot 如何处理 iOS 用户的个人信息。",
            back: "返回支持页",
            items: [
              {
                title: "1. 我们可能处理的数据",
                body: "我们可能处理实现核心功能所需的信息，例如用户提交内容与使用诊断信息。",
              },
              {
                title: "2. 系统权限",
                body: "根据功能使用情况，应用可能申请相机、相册、麦克风等权限。你可随时在 iOS 设置中关闭权限。",
              },
              {
                title: "3. 使用目的",
                body: "数据用于提供产品功能、改进稳定性以及响应技术支持请求。",
              },
              {
                title: "4. 共享与披露",
                body: "我们不会出售个人信息。仅在法律要求或必要服务商履约且受保密义务约束时共享。",
              },
              {
                title: "5. 数据保存期限",
                body: "数据仅在实现服务目的、履行法定义务或处理争议所必需期限内保存。",
              },
              {
                title: "6. 你的权利",
                body: "你可联系我们申请访问、更正或删除适用范围内的个人数据。",
              },
              {
                title: "7. 儿童保护",
                body: "除法律允许并取得监护人同意的情形外，Lingshot 不面向 13 岁以下儿童。",
              },
              {
                title: "8. 联系方式",
                body: "隐私与支持请求邮箱：",
              },
              {
                title: "9. 政策更新",
                body: "如有重要变更，我们将在本页更新并同步修订“最后更新”日期。",
              },
            ],
          },
    [lang],
  );

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] text-foreground">
      <div className="mx-auto max-w-4xl px-6 pb-16 pt-12 sm:px-8">
        <div className="animate-floatIn">
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
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-sm text-slate-600">{t.updated}</p>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
            {t.intro}
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {t.items.map((item, idx) => (
            <PolicyCard key={item.title} title={item.title}>
              <p>
                {item.body}{" "}
                {idx === 7 ? (
                  <a className="font-medium text-slate-900" href="mailto:jackweigogoga@gmail.com">
                    jackweigogoga@gmail.com
                  </a>
                ) : null}
              </p>
            </PolicyCard>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white/80 px-6">
            <Link to={`/${product}`}>{t.back}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

function PolicyCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="border-slate-200/80 bg-white/90 shadow-card backdrop-blur">
      <CardHeader className="pb-3">
        <CardTitle className="text-base text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-slate-600">{children}</CardContent>
    </Card>
  );
}
