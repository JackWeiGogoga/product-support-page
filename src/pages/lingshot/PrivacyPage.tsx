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
            updated: "Last updated: February 27, 2026",
            intro: "This policy explains how Lingshot handles personal information for iOS users, including when content is sent to third-party AI services at the user's request.",
            back: "Back to Support",
            items: [
              {
                title: "1. Data We May Process",
                body: "Depending on the feature you use, we may process user-entered text, queried words, uploaded or captured images, text extracted from attachments, speech-to-text transcripts, and limited diagnostic information needed to keep the app working.",
              },
              {
                title: "2. Permissions",
                body: "Depending on feature usage, the app may request system permissions such as Camera, Photos, and Microphone. You can revoke permissions in iOS Settings at any time.",
              },
              {
                title: "3. AI Features and Consent",
                body: "Before any personal content is sent to a third-party AI service, Lingshot shows an in-app consent screen that explains what data will be sent, which provider will receive it, and why it is needed. AI processing starts only after you tap the consent button. You can review or revoke this consent later in the app settings.",
              },
              {
                title: "4. Purpose of Use",
                body: "Data is used to provide image recognition, English word lookup and enrichment, attachment text extraction, and other core product functions, as well as to improve app stability and respond to support requests.",
              },
              {
                title: "5. Third-Party AI Service Providers",
                body: "When you use AI-powered features, relevant content may be transmitted to third-party AI providers used by Lingshot, including Volcengine Ark and OpenRouter. These providers process the content only to generate the requested result for the app. We do not sell your personal information.",
              },
              {
                title: "6. Sharing and Disclosure",
                body: "We may share data with service providers only as needed to operate the app, comply with law, protect rights and safety, or respond to lawful requests. We require service providers to provide privacy protections that are at least the same as or stronger than those described in this policy.",
              },
              {
                title: "7. Data Retention",
                body: "Data is retained only for as long as necessary for service provision, legal obligations, security, or dispute resolution. AI request content is not kept longer than needed for the requested feature and operational purposes.",
              },
              {
                title: "8. Your Rights",
                body: "You may contact us to request access, correction, or deletion of applicable personal data, or to ask questions about AI data handling and consent.",
              },
              {
                title: "9. Children",
                body: "Lingshot is not intended for children under 13 without verified parental consent where required by law.",
              },
              {
                title: "10. Contact",
                body: "Privacy and support requests:",
              },
              {
                title: "11. Policy Changes",
                body: "Material updates will be reflected on this page with a revised \"Last updated\" date.",
              },
            ],
          }
        : {
            title: "隐私政策",
            updated: "最后更新：2026 年 2 月 27 日",
            intro: "本政策说明 Lingshot 如何处理 iOS 用户的个人信息，包括在用户主动使用相关功能时向第三方 AI 服务发送内容的情形。",
            back: "返回支持页",
            items: [
              {
                title: "1. 我们可能处理的数据",
                body: "根据你使用的功能不同，我们可能处理你输入的文本、查询的单词、拍摄或上传的图片、从附件中提取的文字、语音转写文本，以及保障应用运行所需的少量诊断信息。",
              },
              {
                title: "2. 系统权限",
                body: "根据功能使用情况，应用可能申请相机、相册、麦克风等权限。你可随时在 iOS 设置中关闭权限。",
              },
              {
                title: "3. AI 功能与授权",
                body: "在任何个人内容发送给第三方 AI 服务之前，Lingshot 会先在应用内展示授权说明，明确告知将发送哪些数据、发送给哪家服务商以及用途。只有在你点击同意后，相关 AI 处理才会开始。你也可以稍后在应用设置中重新查看或撤回该授权。",
              },
              {
                title: "4. 使用目的",
                body: "这些数据用于提供图片识别、英语单词查询与补充解释、附件文字提取等核心产品功能，以及改进稳定性并响应技术支持请求。",
              },
              {
                title: "5. 第三方 AI 服务商",
                body: "当你使用 AI 相关功能时，相关内容可能会被传输给 Lingshot 使用的第三方 AI 服务商，包括火山引擎方舟（Volcengine Ark）和 OpenRouter。这些服务商仅为生成你请求的结果而处理相关内容。我们不会出售你的个人信息。",
              },
              {
                title: "6. 共享与披露",
                body: "我们仅在运营应用、履行法律义务、保护权利与安全或响应合法请求所必需的范围内与服务商共享数据，并要求相关服务商提供不低于本政策所述标准的隐私保护。",
              },
              {
                title: "7. 数据保存期限",
                body: "数据仅在实现服务目的、履行法定义务、保障安全或处理争议所必需期限内保存。AI 请求内容不会在超出实现对应功能和必要运营目的的期限外长期保存。",
              },
              {
                title: "8. 你的权利",
                body: "你可联系我们申请访问、更正或删除适用范围内的个人数据，也可以咨询与 AI 数据处理及授权相关的问题。",
              },
              {
                title: "9. 儿童保护",
                body: "除法律允许并取得监护人同意的情形外，Lingshot 不面向 13 岁以下儿童。",
              },
              {
                title: "10. 联系方式",
                body: "隐私与支持请求邮箱：",
              },
              {
                title: "11. 政策更新",
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
          {t.items.map((item) => (
            <PolicyCard key={item.title} title={item.title}>
              <p>
                {item.body}{" "}
                {item.title === "10. Contact" || item.title === "10. 联系方式" ? (
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
